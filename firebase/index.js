import admin from 'firebase-admin'

const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT
)

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: process.env.FIREBASE_DATABASE_URL
        });
    } catch (e) {
        console.log('Firebase admin initialization error', e)
    }
}

export default admin