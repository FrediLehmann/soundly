import Amplify, { Auth } from 'aws-amplify';
// Why you not working anymore?
import awsconfig from './aws-exports';

Amplify.configure && Amplify.configure(awsconfig);
