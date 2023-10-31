export const extractNightHours = (dateStart: Date, dateEnd: Date) => {
    const isSameDay = dateStart.getDate() === dateEnd.getDate();
    
    if (isSameDay) {
        const hasNightHours = dateEnd.getHours() >= 22;

        if (hasNightHours) {
            const nightHours = dateEnd.getHours() - 22;
            return nightHours;
        } else {
            return 0;
        }
    } else {
        const nightHours = 6 - dateStart.getHours();
        return nightHours;
    }
}

export const extractSundayHours = (dateStart: Date, dateEnd: Date) => {
    const isSameDay = dateStart.getDate() === dateEnd.getDate();
    
    if (isSameDay) {
        const hasSundayHours = dateEnd.getDay() === 0;

        if (hasSundayHours) {
            const sundayHours = dateEnd.getHours() - dateStart.getHours();
            return sundayHours;
        } else {
            return 0;
        }
    } else {
        dateEnd.setHours(23, 59, 59);

        const sundayHours = dateEnd.getHours() - dateStart.getHours();
        return sundayHours;
    }
}

export const hasNightHours = (dateStart: Date, dateEnd: Date) => {
    return !!extractNightHours(dateStart, dateEnd);
};

export const hasSundayHours = (dateStart: Date, dateEnd: Date) => {
    return !!extractSundayHours(dateStart, dateEnd);
}

export function getDifferenceInHours(date1: string, date2: string): number {
    const date1Formatted = new Date(date1);
    const date2Formatted = new Date(date2);
  
    const differenceInMs = date1Formatted.getTime() - date2Formatted.getTime();
    return Math.abs(Math.floor(differenceInMs / (1000 * 60 * 60)));
  }
  

