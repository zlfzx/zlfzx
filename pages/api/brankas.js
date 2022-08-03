import firebase from '../../firebase'

export default function handler(req, res) {
    const firestore = firebase.firestore()

    firestore.collection('brankas').add({
        type: req.method,
        body: req.body ?? null,
        params: req.params ?? null,
        query: req.query ?? null,
        created_at: new Date().toString()
    })

    res.status(200).json({
        status: 'success',
        message: 'Successfully stored in database',
        data: req.body
    })
}