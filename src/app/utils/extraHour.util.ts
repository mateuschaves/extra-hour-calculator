import { isHoliday } from "@/app/services/brasil.service";
import { addHours } from "date-fns";

// 50%
const NORMAL_FEE = 1.5;

// 70%
const NIGHT_FEE = 0.2 + NORMAL_FEE;


type TaxConfig = {
  normalTax: number,
  nightTax: number,
  holidayTax: number,
}

export function getDifferenceInHours(date1: string, date2: string) {
    const date1Formatted = new Date(date1);
    const date2Formatted = new Date(date2);
  
    const differenceInMs = date1Formatted.getTime() - date2Formatted.getTime();
    return Math.abs(differenceInMs / (1000 * 60 * 60));
}

export async function calculateExtraHoursV2(dateStart: Date, dateEnd: Date, baseHourValue: number, taxConfig: TaxConfig): Promise<number> {
    const startHour = dateStart.getHours();
    const endHour = dateEnd.getHours();
    const isSunday = dateStart.getDay() === 0;

    const hasLessThanOneHour = getDifferenceInHours(dateStart.toISOString(), dateEnd.toISOString()) < 1;

    if (hasLessThanOneHour) {
      const differenceInMinutes = Math.abs(dateStart.getMinutes() - dateEnd.getMinutes());

      const _isHoliday = await isHoliday(dateStart);

      if (isSunday || _isHoliday) {
        return baseHourValue + (baseHourValue * differenceInMinutes / 60);
      }

      return baseHourValue * differenceInMinutes / 60;
    }
  
    let extraHours = 0;
  
    for (let hour = startHour; hour !== endHour; hour = (hour + 1) % 24) {
      const isNormalHour = hour >= 6 && hour < 18;
      const isExtraHour = hour >= 18 && hour < 22;
      const isNightHour = (hour >= 22 && hour < 24) || (hour >= 0 && hour < 6);

      const currentDate = addHours(dateStart, hour);

      const _isHoliday = await isHoliday(currentDate);

      if (isNormalHour) {
        // Normal hours, no fee
      } else if (isExtraHour) {
        extraHours += baseHourValue * (taxConfig.normalTax || NORMAL_FEE);
      } else if (isNightHour) {
        extraHours += baseHourValue * (taxConfig.nightTax || NIGHT_FEE);
      }
  
      if (isSunday || _isHoliday) {
        extraHours += baseHourValue * (taxConfig.holidayTax);
      }
    }
  
    return extraHours;
}

export function convertTaxToPercentage(tax: string) {
  const _tax = Number(tax);
  return (_tax / 100) + 1;
}
  

