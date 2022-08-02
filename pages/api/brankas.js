import firebase from '../../firebase'

export default function handler(req, res) {
    const firestore = firebase.firestore()

    firestore.collection('brankas').add({
        type: req.method,
        body: req.body,
        params: req.params,
        query: req.query,
        created_at: new Date().toString()
    })

    res.status(200).json({
        status: 'success',
        message: 'Successfully stored in database',
        data: req.body
    })
}