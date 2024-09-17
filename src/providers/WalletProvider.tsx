// 'use client';

// import {
//   EmbeddedWalletConfigOptions,
//   ThirdwebProvider,
//   embeddedWallet,
//   en,
// } from '@thirdweb-dev/react';
// import config from '@/utils/config';

// export default function WalletProvider({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ThirdwebProvider
//       activeChain={process.env.activeChain}
//       clientId={process.env.thirdWebId}
//       locale={en()}
//       supportedWallets={[
//         embeddedWallet(config.embeddedWallet as EmbeddedWalletConfigOptions),
//       ]}
//       authConfig={config!.authConfig}
//     >
//       {children}
//     </ThirdwebProvider>
//   );
// }
