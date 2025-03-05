import dayjs from 'dayjs';

export const getCurDatetime = () => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
};
