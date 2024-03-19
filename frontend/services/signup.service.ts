import { UserDetail } from "~/models/UserDetails";
import { createUserWithEmailAndPassword, sendEmailVerification, AuthErrorCodes, UserCredential, updateProfile, getAuth } from "firebase/auth";
import { collection, CollectionReference, setDoc, DocumentReference, doc, getFirestore } from "firebase/firestore"
import { omitBy, isUndefined } from 'lodash';
import { FIREBASE_APP } from "~/services/firebase.service";
import axios from "axios";


type UserDbModel = {
    _id: string,
    name: string,
    email: string,
    address: string
}

export class SignupService {
    public async signup(user: UserDetail) {
        axios('/api/auth/signup')
       /* const firestore = getFirestore(FIREBASE_APP);
        const auth = getAuth(FIREBASE_APP);
        const userCollection: CollectionReference = collection(firestore, "users");
        const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
        user._id = userCredential.user.uid;
        await sendEmailVerification(userCredential.user);
        let userDbModel: UserDbModel = omitBy({ _id: user._id, name: user.name, email: user.email, address: user.address }, isUndefined) as UserDbModel;
        const id: DocumentReference = doc(userCollection, user._id);
        await setDoc(id, userDbModel);
        await updateProfile(userCredential.user, { displayName: user.name }); */
    }
}