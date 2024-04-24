export const daysAgo = ( n:number, date?:Date) => {
  const d = date || new Date();

  d.setDate(d.getDate() - Math.abs(n));
  return d;
};
