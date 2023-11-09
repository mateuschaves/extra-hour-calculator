import { isHoliday } from "@/app/services/brasil.service";
import { addHours } from "date-fns";

// 50%
const NORMAL_FEE = 1.5;

// 70%
const NIGHT_FEE = 0.2 + NORMAL_FEE;


export function getDifferenceInHours(date1: string, date2: string): number {
    const date1Formatted = new Date(date1);
    const date2Formatted = new Date(date2);
  
    const differenceInMs = date1Formatted.getTime() - date2Formatted.getTime();
    return Math.abs(Math.floor(differenceInMs / (1000 * 60 * 60)));
}

export async function calculateExtraHoursV2(dateStart: Date, dateEnd: Date, baseHourValue: number): Promise<number> {
    const startHour = dateStart.getHours();
    const endHour = dateEnd.getHours();
    const isSunday = dateStart.getDay() === 0;
  
    let extraHours = 0;
  
    for (let hour = startHour; hour !== endHour; hour = (hour + 1) % 24) {
      const isNormalHour = hour >= 6 && hour < 18;
      const isExtraHour = hour >= 18 && hour < 22;
      const isNightHour = (hour >= 22 && hour < 24) || (hour >= 0 && hour < 6);

      const currentDate = addHours(dateStart, hour);

      const _isHoliday = await isHoliday(currentDate);

      if (isNormalHour) {
        // Normal hours, no fee
        //extraHours += baseHourValue;
      } else if (isExtraHour) {
        // Extra hours with 50% fee
        extraHours += baseHourValue * NORMAL_FEE;
      } else if (isNightHour) {
        // Night hours with 70% fee
        extraHours += baseHourValue * NIGHT_FEE;
      }
  
      if (isSunday || _isHoliday) {
        // Sunday hours with 100% fee
        extraHours += baseHourValue;
      }
    }
  
    return extraHours;
  }
  

