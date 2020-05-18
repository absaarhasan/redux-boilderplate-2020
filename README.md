# Redux Boiler-plate with AWS Auth

## Features
* React
* Redux
* React Hooks
* Redux Sagas
* Webpack
* Jest
* React Test Library
* TypeScript
* ESLint
* Emotion
* SSR
* Streamed rendering
* Critical Path CSS

The command scripts are all in the package.json file.

You will have to set up your own AWS Cognito User Pool to see it working.

Once you have set this up, and configured your local machine to work with AWS, then all you will need to do is to update the AWS config file:

>> src >> constants >> awsConfig.js

I don't see this codebase as complete, but I think AWS should look into supplying something like this, because the AWS Amplify platform is too prescriptive, and opinionated for most commercial needs.

Areas I can see it being improved would be:
* PWA optimisation
* Using SSL to safeguard the Access Token
