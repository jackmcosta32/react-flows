import { formatISO, type ContextOptions } from 'date-fns';

export const toIsoDateString = (
  date?: Date,
  options?: ContextOptions<Date>,
) => {
  if (!date) return;

  return formatISO(date, {
    representation: 'date',
    ...options,
  });
};
