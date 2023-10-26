

export function formatMoneyBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function formatTimeHHMM(time: number) {
    return `${Math.floor(time / 60)}:${time % 60}`;
}