import firebase from '../../firebase'

export default async function handler(req, res) {
    const firestore = firebase.firestore()

    const sort = req.query.sort || 'desc'
    
    const log = await firestore.collection('brankas').orderBy('created_at', sort).get()
    console.log(log)

    res.status(200).json(log.docs.map(doc => doc.data()))
}