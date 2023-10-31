import axios from 'axios';

const BRASIL_API_BASE_URL = 'https://brasilapi.com.br/api';

type Holiday = {
    "date": string,
    "name": string,
    "type": string
}

type Holidays = Holiday[];

const brasilApiClient = axios.create({
    baseURL: BRASIL_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function getHolidays(year: number) {
    return brasilApiClient.get<Holidays>(`/feriados/v1/${year}`)
        .then((response) => response.data);
}

export async function isHoliday(date: Date) {
   const holidays = await getHolidays(date.getFullYear());

   if (holidays.length) {
         const holiday = holidays.find((holiday) => {
              const holidayDate = new Date(holiday.date);
              return holidayDate.getDate() === date.getDate();
         });
         return !!holiday;
   }

   return false;
}