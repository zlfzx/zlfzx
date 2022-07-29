import admin from 'firebase-admin'
import serviceAccount from './../firebase-adminsdk.json'

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: 'https://zlfzx-xyz-default-rtdb.asia-southeast1.firebasedatabase.app'
        });
    } catch (e) {
        console.log('Firebase admin initialization error', e)
    }
}

export default admin