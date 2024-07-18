#!/usr/bin/env node
import 'source-map-support/register';
import { BookStack } from '../lib/dns-stack';
import { App } from 'aws-cdk-lib';

const app = new App();
new BookStack(app, 'InfraStack', {

});