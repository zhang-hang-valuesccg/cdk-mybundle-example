import * as cdk from 'aws-cdk-lib';
import { Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { execSync } from 'child_process';
import { Construct } from 'constructs';

export class CdkMybundleExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn_bundlebycdk = new NodejsFunction(this, 'bundlebycdk', {
      entry: 'lambda-bundle-by-cdk/index.ts',
      handler: 'handler',
      runtime: Runtime.NODEJS_20_X,
    });

    const fn_package = new NodejsFunction(this, 'package', {
      entry: 'lambda-package/src/index.ts',
      handler: 'handler',
      runtime: Runtime.NODEJS_20_X,
    });

    execSync('npm run build & npm run produce', {
      cwd: 'lambda-mybundle',
      stdio: 'inherit',
      shell: 'bash',
    });

    const fn_mybundle = new NodejsFunction(this, 'mybundle', {
      code: Code.fromAsset('lambda-mybundle/bundle'),
      handler: 'index.handler',
      runtime: Runtime.NODEJS_20_X,
    });
  }
}
