interface Cognito {
  userPoolId: string;
  region: string;
  clientId: string;
}

const awsConfig: Record<string, Cognito> = {
  cognito: {
    userPoolId: /* <YOUR_USER_POOL_ID_HERE> */ '',
    region: /* <YOUR_AWS_REGION_HERE> */ '',
    clientId: /* <YOUR_CLIENT_ID_HERE> */ '',
  },
};

export default awsConfig;
