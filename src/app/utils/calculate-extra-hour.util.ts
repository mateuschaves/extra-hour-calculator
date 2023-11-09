/**
 * Calculate extra hour
 * 
 * @description
 * extra hours are calculated as follows:
 * 
 * hours between 06:00 and 22:00 are normal hours and don't have a fee
 * hours between 18:00 and 22:00 are extra hours and have a 50% fee
 * hours between 22:00 and 06:00 are night hours and have a 70% fee
 * hours between 00:00 and 23:59 on sundays are sunday hours and have a 100% fee
 * 
 * 
 * @param {date} dateStart
 * @param {date} dateEnd
 * @param {number} valueHour
 * 
 * @returns {number} extraHours
 * 
 * 
 * 
 * @example
 * 
 * calculateExtraHours(new Date('2020-01-01 22:00:00'), new Date('2020-01-02 06:00:00'), 10)
 * 
 * @returns 80
 */