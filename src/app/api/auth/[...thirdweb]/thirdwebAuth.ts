// import { PrivateKeyWallet } from '@thirdweb-dev/auth/evm';
// import { ThirdwebAuthAppRouter } from '@thirdweb-dev/auth/next';
// import { postRequest } from '@/utils/api';

// export const { ThirdwebAuthHandler, getUser } = ThirdwebAuthAppRouter({
//   domain: process.env.appDomain!,
//   wallet: new PrivateKeyWallet(process.env.adminPrivateKey!),
//   authOptions: {
//     validateNonce: async (nonce: string) => {
//       const url = `${process.env.apiDomain}/users/nonce`;
//       await postRequest(url, { nonce }, true);
//     },
//   },
// });
