import admin from 'firebase-admin';
import serviceAccount from './../../firebaseKey.json' assert { type: 'json' };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();

export { auth };
