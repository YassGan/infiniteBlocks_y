import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "../components/common/ScrollTop";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import AlertMessage from "~/components/common/AlertMessage";
import Toast from "~/components/common/Toast";
import { AlertMessages } from "~/data/alert-messages"
import { ToastService } from "~/services/toast.service";
import { SessionProvider, useSession } from "next-auth/react"
import axios from "axios";
import { Session } from "next-auth";
import AuthWrapper from "~/components/utils/AuthWrapper";
import { AuthService } from "~/services/auth.service";





if (process.env.PROJECT_ID == undefined) {
  throw new Error("Could not find PROJECT_ID");
}


interface AppProps {
  Component: React.ElementType;
}


// 1. Get projectId
const projectId = process.env.PROJECT_ID;

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });
// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
  require("masonry-layout/masonry");
}

export default function App({ Component, ...pageProps }: AppProps & { session: any }) {
  const [user,setUser] = useState<any>(null);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min");
    require("masonry-layout/dist/masonry.pkgd.min");
    Aos.init({
      duration: 1200,
    });
    if (pageProps.session != undefined) {
      console.log("session = " + JSON.stringify(pageProps));
    }
  }, []);

  //  const session = useSession();
  //console.log("session = "+ props.session);

  const toastService = new ToastService();

  const setCurrentUser = (sessionData: Session) => {
    setUser(sessionData?.user);
  }

  const sendConfirmationEmail = async () => {
    //console.log(user);
    await axios("/api/auth/resend-email", {method: 'POST', data: user} );
    //await AuthService.sendActivationEmail()
    toastService.set("Account Confirmation", "Activation email has been sent.", "success", true);
  }

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <AuthWrapper authCallback={setCurrentUser} >
          <AlertMessage hidden={user != null && user.emailVerified == true} message={AlertMessages.EMAIL_VERIFICATION} handleAction={sendConfirmationEmail} />
        </AuthWrapper>
        <div className="main-page-wrapper">
          <WagmiConfig config={wagmiConfig}>
            <Component {...pageProps} />
          </WagmiConfig>

          <ScrollToTop />
        </div >
        <Toast service={toastService} />
      </SessionProvider>
    </>
  );
}
