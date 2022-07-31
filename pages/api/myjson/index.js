import firebase from './../../../firebase'
import { v4 as uuid } from 'uuid'

export default function handler(req, res) {

    if (req.method == 'POST' && req.body) {
        const db = firebase.database()
        const ref = db.ref('myjson')

        if (req.body.data) {
            let data = req.body.data

            try {
                data = JSON.parse(data)
            } catch {
                data = JSON.parse(JSON.stringify(data))
            }

            const id = uuid()    
            ref.child(id).set({
                data: JSON.stringify(data),
                created_at: new Date().toString()
            })

            res.status(200).json({
                status: 'success',
                message: 'Successfully stored in database',
                url: '/api/myjson/' + id
            })
        }   
    }

    res.status(200).json({
        status: 'failed',
        message: 'Only POST method will be stored in database'
    })
}