import type { CareerAPIResponse, Career } from '../types';

export const transformCareerData = (data: CareerAPIResponse): Career[] => {
  if (!data.career) return [];
  const allPositions = [
    ...data.career.current_positions,
    ...data.career.previous_positions,
  ];
  return allPositions.sort((a, b) => b.from.localeCompare(a.from));
};
