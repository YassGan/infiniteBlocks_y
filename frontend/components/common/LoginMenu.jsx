import Link from "next/link";
import ConnectButton from "./ConnectButton";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";


const LoginMenu = (props) => {
    const router = useRouter();
    const session = useSession();
    const currentUser = session.data?.user;
    const handleSignout = async () => {
        signOut();
    };

    return (
        <div className="right-widget d-none d-lg-flex align-items-center ms-auto ms-lg-0 order-lg-3">
            {currentUser == null ? (
                <>
                    <Link
                        href="/auth/signin"
                        className={`${props.isWhite ? 'login-btn-five' : 'login-btn-two'} fw-500 d-flex align-items-center me-3 me-xl-5`}
                    >
                        <i className="bi bi-lock" />
                        <span>login</span>
                    </Link>
                    <ConnectButton isWhite={props.isWhite} />
                </>
            )
                :
                <>
                    <div className="dropdown">
                        <button className="login-btn-three rounded-circle tran3s me-3" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-person" />
                        </button>
                        
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item disabled">{currentUser?.displayName}</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                            <li><a className="dropdown-item" href="" onClick={handleSignout}>Sign Out</a></li>
                        </ul>
                    </div>




                </>
            }
        </div>
    )
}

export default LoginMenu;