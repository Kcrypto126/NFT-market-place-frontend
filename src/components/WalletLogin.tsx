'use client';
import { LoginPayload, VerifyLoginPayloadParams } from 'thirdweb/auth';
import { sepolia } from 'thirdweb/chains';
import { ConnectButton } from 'thirdweb/react';
import { client } from '@/lib/login';
import { getRequest, postRequest } from '@/utils/api';

export default function WalletLogin() {
  console.log('client this is client', client);
  return (
    <ConnectButton
      // className='connect-btn'
      // theme='light'
      // btnTitle='Signup'
      // auth={{ loginOptional: false }}
      // modalTitle='Signup'
      // modalSize='compact'
      // modalTitleIconUrl=''
      // showThirdwebBranding={false}
      theme='dark'
      client={client}
      auth={{
        /**
         * 	`getLoginPayload` should @return {VerifyLoginPayloadParams} object.
         * 	This can be generated on the server with the generatePayload method.
         */
        getLoginPayload: async (params: {
          address: string;
        }): Promise<LoginPayload> => {
          const res = await getRequest(
            process.env.NEXT_PUBLIC_AUTH_API + '/users/login',
            {
              address: params.address,
              chainId: sepolia.id.toString(),
            }
          );
          return res as LoginPayload;
        } /**
         * 	`doLogin` performs any logic necessary to log the user in using the signed payload.
         * 	In this case, this means sending the payload to the server for it to set a JWT cookie for the user.
         */,
        doLogin: async (params: VerifyLoginPayloadParams) => {
          console.log('Hi, I am going to login!');
          await postRequest(
            process.env.NEXT_PUBLIC_AUTH_API + '/users/login',
            params
          );
          console.log('Hi, I am going to login!');
        },
        /**
         * 	`isLoggedIn` returns true or false to signal if the user is logged in.
         * 	Here, this is done by calling the server to check if the user has a valid JWT cookie set.
         */
        isLoggedIn: async (): Promise<boolean> => {
          const response = await getRequest(
            process.env.NEXT_PUBLIC_AUTH_API + '/users/isLoggedIn'
          );
          console.log('Hi, I am going to know I have logged in');
          return Boolean(response);
        },
        /**
         * 	`doLogout` performs any logic necessary to log the user out.
         * 	In this case, this means sending a request to the server to clear the JWT cookie.
         */
        doLogout: async () => {
          await postRequest(
            process.env.NEXT_PUBLIC_AUTH_API + '/users/logout',
            {}
          );
        },
      }}
    />
  );
}
