import { InjectedConnector } from 'wagmi/connectors/injected';
import { useAccount, useConnect, useDisconnect, useNetwork, useSignMessage } from 'wagmi';
import { getEllipsisTxt } from '../utils/format';
import { useEffect, useRef, useState } from "react";
import { useWeb3Modal as createWeb3Modal } from '@web3modal/wagmi/react'
import { SiweMessage } from 'siwe';

const ConnectButton = (props) => {

  const handleAuth = async () => {
    const modal = createWeb3Modal();
    await modal.open();
  };

  return (
    <button className={`${(props.isWhite) ? 'btn-twentyOne' : 'start-btn-two'} fw-500 position-relative d-none d-lg-block`} onClick={handleAuth}>
      Connect Wallet
    </button>
  );
};

export default ConnectButton;
