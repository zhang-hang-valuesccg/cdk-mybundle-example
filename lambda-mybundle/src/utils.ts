import dayjs from 'dayjs';
import { z } from 'zod';

export const getCurDatetime = () => {
  const datetime = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const parsed = z.string().parse(datetime);
  return parsed;
};
