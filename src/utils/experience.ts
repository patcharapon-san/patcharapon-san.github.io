export function getYearsOfExperience(startYear = 2015): number {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;
  return (years < 0 ? 0 : years) + 1;
}

export const fmtYears = (yearsLabel?: string, startYear?: number) => {
    if (typeof startYear === 'number') return `${getYearsOfExperience(startYear)}+`;
    return yearsLabel ?? '';
};