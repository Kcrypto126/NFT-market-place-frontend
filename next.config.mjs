export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */

  const baseConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      thirdWebId: process.env.THIRDWEB_ID,
      thirdWebKey: process.env.THIRDWEB_KEY,
      adminWallet: process.env.ADMIN_WALLET,
      adminPrivateKey: process.env.PRIVATE_KEY,
    },
  };

  if (process.env.NODE_ENV === 'development') {
    return {
      ...baseConfig,
      env: {
        ...baseConfig.env,
        appDomain: 'http://localhost:3000',
        apiDomain: 'http://localhost:4000/api',
        chainId: '80001',
        activeChain: 'mumbai',
      },
    };
  }

  return {
    ...baseConfig,
    env: {
      ...baseConfig.env,
      appDomain: process.env.APP_DOMAIN,
      apiDomain: process.env.API_DOMAIN,
      chainId: process.env.CHAIN_ID,
      activeChain: process.env.ACTIVE_CHAIN,
    },
  };
};
