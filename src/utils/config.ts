const config = Object.freeze({
  embeddedWallet: {
    auth: {
      options: ['email', 'google', 'apple', 'facebook'],
    },
  },
  authConfig: {
    authUrl: '/api/auth',
    domain: process.env.appDomain!,
  },
  authOptions: {
    uri: process.env.appDomain!,
    chainId: process.env.chainId!.toString(),
  },
});

export default config;
