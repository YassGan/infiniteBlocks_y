import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthService } from '../../../services/auth.service';
import Cookies from 'cookies';

export default async function auth(req, res) {
  const providers = [
    CredentialsProvider({
      name: "Firebase Auth",
      authorize: async (credentials) => {
        const user = await AuthService.signin(credentials);
        console.log(user);
        const cookies = new Cookies(req, res);
        cookies.set('next-auth.refresh-token',  user.refreshToken);
        return user;
      }
    })
  ];

  return await NextAuth(req, res, {
    providers,
    skipCSRFCheck: true,
    jwt: {
      maxAge: 60 * 60,
      encode: async ({ token }) => {
        return token;
      },
      decode: async ({ token }) => {
        const isValid = await AuthService.verifyToken(token);
        if (isValid) {
          return token;
        } else {
          return null;
        }
      }
    },
    callbacks: {
      async jwt({ token, user, trigger }) {
        if (trigger === "signIn") {
          return user.idToken;
        } else {
          // WHEN Token Expire how to get a new one ?
          //return await AuthService.refreshToken(token);
          return token;
        }
      },

      async session({ session, token }) {
        const user = await AuthService.getUserFromToken(token);
        session.user = user;
        return session;
      }
    },
    pages: {
      error: '/auth/signin' // Changing the error redirect page to our custom login page
    }
  });
}
