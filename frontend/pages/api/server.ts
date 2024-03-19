import { ServiceAccount, applicationDefault, cert, getApp, getApps, initializeApp } from "firebase-admin/app";

var app = null;

if (getApps().length > 0) {
    app = getApp();
} else {
    app = initializeApp({
        credential: applicationDefault()
    });
}

const FIREBASE_APP = app;

export default FIREBASE_APP;