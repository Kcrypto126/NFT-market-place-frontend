import { ConnectWallet } from '@thirdweb-dev/react';

export default function WalletLogin() {
  return (
    <ConnectWallet
      className='connect-btn'
      theme='light'
      btnTitle='Signup'
      auth={{ loginOptional: false }}
      modalTitle='Signup'
      modalSize='compact'
      modalTitleIconUrl=''
      showThirdwebBranding={false}
    />
  );
}
