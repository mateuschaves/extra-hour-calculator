

export function formatMoneyBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function formatTimeHHMM(time: number) {
    return `${Math.floor(time / 60)}:${time % 60}`;
}


function getMonthName(month: number): string {
  switch (month) {
    case 0:
      return 'Janeiro';
    case 1:
      return 'Fevereiro';
    case 2:
      return 'Março';
    case 3:
      return 'Abril';
    case 4:
      return 'Maio';
    case 5:
      return 'Junho';
    case 6:
      return 'Julho';
    case 7:
      return 'Agosto';
    case 8:
      return 'Setembro';
    case 9:
      return 'Outubro';
    case 10:
      return 'Novembro';
    case 11:
      return 'Dezembro';
    default:
      return '';
  }
}

export function formatDayAndMonth(date: string): string {
  const dateFormatted = new Date(date);
  const day = dateFormatted.getDate();
  const month = dateFormatted.getMonth();
  const monthName = getMonthName(month);

  const hours = String(dateFormatted.getHours()).padStart(2, '0');
  const minutes = String(dateFormatted.getMinutes()).padStart(2, '0');

  return `${day} de ${monthName} às ${hours}:${minutes}`;
}

export function pluralize(count: number, word: string) {
  return count === 1 ? word : `${word}s`;
}

export function cleanNumber(value: string): number {
  return Number(value.replaceAll('.', '').replaceAll(',', '.'));
}