import Link from "next/link";
import LoginForm from "~/components/auth/signin-page/LoginForm";
import Seo from "~/components/common/Seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";



const LogIn = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const SignInAction = async (data: any) => {
    /*try {
      await AuthService.signin(data);
      router.push("/");
    } catch (e: any) {
      if (e instanceof FirebaseError) {
        if (e.code === 'auth/invalid-credential') {
          
        }else {

        }
      } else {
        console.error(e);
        throw new Error(e);
      }
    }*/

    signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: true,
      callbackUrl: '/'
    });

  };

  return (
    <>
      <Seo pageTitle="Login" />
      {/* 
        =============================================
        Theme Main Menu
        ============================================== 
        */}
      <div className="theme-main-menu sticky-menu theme-menu-eight">
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <Image
                src="/images/logo/logo-2.png"
                alt="logo"
                width={75}
                height={75}
              />
              <Link href="/" className="d-block" style={{ fontSize: 2 + 'em', fontWeight: 'bold' }}>
                Infiniteblocks
              </Link>
            </div>
            <Link href="/" className="go-back-btn fw-500 tran3s">
              Go to home
            </Link>
          </div>
        </div>
        {/* /.inner-content */}
      </div>
      {/* /.theme-main-menu */}

      {/* 
        =============================================
        User Data Page
        ============================================== 
        */}
      <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
        <div className="form-wrapper position-relative m-auto">
          <div className="text-center">
            <h2 className="tx-dark mb-30 lg-mb-10">Login</h2>
            <p className="fs-20 tx-dark">
              Still don&lsquo;t have an account?{" "}
              <Link href="/auth/signup">Sign up</Link>
            </p>
          </div>
          <LoginForm signinAction={SignInAction} />
        </div>
        {/* End form-wrapper */}

        <p className="mt-auto pt-50">Copyright @{currentYear} infiniteblocks inc.</p>
        <img
          src="/images/assets/ils_11.png"
          alt="illustration"
          className="lazy-img illustration-one wow fadeInRight"
        />
        <img
          src="/images/assets/ils_12.png"
          alt="illustration"
          className="lazy-img illustration-two wow fadeInLeft"
        />
      </div>
      {/* /.fancy-feature-fiftyOne */}
    </>
  );
};

export default LogIn;
