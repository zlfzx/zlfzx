import firebase from '../../firebase'

export default function handler(req, res) {
    const firestore = firebase.firestore()

    let message = 'Only POST method will be stored in database'
    
    if (req.method == 'POST' && req.body) {
        firestore.collection('brankas').add({
            type: req.method,
            body: req.body,
            created_at: new Date().toString()
        })
        message = 'Successfully stored in database'
    }

    res.status(200).json({
        status: 'success',
        message: message,
        data: req.body
    })
}