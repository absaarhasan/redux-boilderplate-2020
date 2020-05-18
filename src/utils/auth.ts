import awsConfig from 'Constants/awsConfig';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import {
  RegData, ForgotData, VerifyData, LoginData,
} from 'Actions/types';

const poolData = {
  UserPoolId: awsConfig.cognito.userPoolId,
  ClientId: awsConfig.cognito.clientId,
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

export type VerifyPassword = ReturnType<typeof verifyPasswordService>

export const verifyPasswordService = (data: VerifyData) => {
  const { email, password, code } = data;
  const userData = {
    Username: email,
    Pool: userPool,
  };

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  return new Promise((resolve, reject) => {
    cognitoUser.confirmPassword(code, password, {
      onSuccess: () => {
        resolve();
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  }).catch((err) => {
    throw new Error(err.message || JSON.stringify(err));
  });
};

export const forgotPasswordService = ({ email }: ForgotData) => {
  const userData = {
    Username: email,
    Pool: userPool,
  };

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  return new Promise((resolve, reject) => {
    cognitoUser.forgotPassword({
      onSuccess: (result) => {
        resolve(result);
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  }).catch((err) => {
    throw new Error(err.message || JSON.stringify(err));
  });
};

export const logoutService = () => {
  const cognitoUser = userPool.getCurrentUser();
  if (cognitoUser) {
    cognitoUser.signOut();
  }
};

export const isAuthorisedService = () => {
  const cognitoUser = userPool.getCurrentUser();
  if (cognitoUser) {
    return new Promise((resolve, reject) => {
      cognitoUser.getSession((err, session) => {
        if (err) {
          reject(err);
        }
        cognitoUser.getUserAttributes((err, result) => {
          if (err) {
            reject(err);
          }
          const authData = {};
          result.forEach((result) => {
            authData[result.getName()] = result.getValue();
          });
          resolve(authData);
        });
      });
    }).catch((err) => {
      throw new Error(err.message || JSON.stringify(err));
    });
  }
  return null;
};

export const loginService = (data: LoginData) => {
  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
    data,
  );
  const userData = {
    Username: data.Username,
    Pool: userPool,
  };
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        const accessToken = result.getAccessToken().getJwtToken();
        resolve(accessToken);
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  }).catch((err) => {
    throw new Error(err.message || JSON.stringify(err));
  });
};

export const registerService = (data: RegData) => {
  const {
    userNameObj, emailObj, email, password,
  } = data;
  const attrEmail = new AmazonCognitoIdentity.CognitoUserAttribute(emailObj);
  const attrUserName = new AmazonCognitoIdentity.CognitoUserAttribute(
    userNameObj,
  );
  const attributeList = [attrEmail, attrUserName];

  return new Promise((resolve, reject) => {
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      result ? resolve(result) : reject(err);
    });
  }).catch((err) => {
    throw new Error(err.message || JSON.stringify(err));
  });
};
