#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkMybundleExampleStack } from '../lib/cdk-mybundle-example-stack';
import * as dotenv from 'dotenv';

dotenv.config();

const app = new cdk.App();
new CdkMybundleExampleStack(app, 'CdkMybundleExampleStack', {
  env: {
    account: process.env.ACCOUNT || '',
    region: 'ap-northeast-1',
  },
});
