import { Handler } from 'aws-cdk-lib/aws-lambda';
import { getCurDatetime } from './utils';

export const handler: Handler = async () => {
  const datetime = getCurDatetime();
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, datetime }),
  };
};
