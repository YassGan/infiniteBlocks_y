import { Auth, User, UserCredential, getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_APP } from "./firebase.service";
import { decode, verify } from "jsonwebtoken";
import { assert } from "console";

export class AuthService {

    private static auth: Auth = getAuth(FIREBASE_APP);

    public static signin = async (obj: { username: string, password: string }): Promise<UserCredential> => {
        const request = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.FIREBASE_API_KEY, { method: 'POST', body: JSON.stringify({ email: obj.username, password: obj.password, returnSecureToken: true }) });
        return await request.json();
    }



    public static getUserFromToken = async (token: string): Promise<User | null> => {
        const c = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=" + process.env.FIREBASE_API_KEY, { method: 'POST', body: JSON.stringify({ idToken: token }) })
        const response = await c.json();
        if (response.users?.length == 0) {
            return null;
        } else {
            return { token, ...response.users[0] };
        }
    }

    /* public static getCurrentUser(): User | null {
         return AuthService.auth.currentUser;
     }*/

    public static signout = async () => {
        return await AuthService.auth.signOut();
    }

    public static sendActivationEmail = async (token: string) => {
        await fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=" + process.env.FIREBASE_API_KEY, { method: 'POST', body: JSON.stringify({ requestType: "VERIFY_EMAIL", idToken: token }) })
    }

    public static verifyToken = async (token: string) => {
        const secrets = await (await fetch("https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com")).json();
        const decodedToken = decode(token, { complete: true });
        if (decodedToken != undefined) {
            const kId = decodedToken.header.kid;
            if (kId != null) {
                verify(token, secrets[kId], {
                    algorithms: ["RS256"]
                });
                return true;
            }
        }
        return false;
    }
}