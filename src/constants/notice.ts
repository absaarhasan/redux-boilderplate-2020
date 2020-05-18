const notice: Record<string, Record<string, string>> = {
  error: {
    network: "Oops... it looks like there's been a network error!",
    browser: 'Oops... something went wrong!',
  },
  success: {
    register: 'Please check your email for a verification link',
    forgot: 'Please check your email for a verification code',
    verify: 'Your password has now been updated. Please login.',
    logout: 'You are now logged out.',
    login: 'You are now logged in.',
  },
};

export default notice;
