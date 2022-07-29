import firebase from '../../firebase'

export default function handler(req, res) {
    const firestore = firebase.firestore()
    
    firestore.collection('brankas').add({
        type: req.method,
        body: req.body,
    })

    res.status(200).json(req.body)
}