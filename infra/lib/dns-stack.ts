import { Stack, StackProps } from 'aws-cdk-lib';
import { CnameRecord, HostedZone } from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BookStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Gets the Domain name for the AWS Hosted Zone you want to use
    const route53HostedZone = HostedZone.fromLookup(this, 'route53HostedZone', {
      domainName: 'sghost.org',
    })

    // Creates a new CNAME record in the Hosted Zone
    // Redirects ${githubPagesCNAMERecord.recordName}.${route53HostedZone.domainName} to ${githubPagesCNAMERecord.domainName}
    const githubPagesCNAMERecord = new CnameRecord(this, 'githubPagesCNAMERecord', {
      zone: route53HostedZone,
      recordName: 'test',
      domainName: 'sghost13.github.io',
      comment: 'A test record in this zone'
    });

  }
}
