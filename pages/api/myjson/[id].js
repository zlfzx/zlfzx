import firebase from './../../../firebase'

export default async function handler(req, res) {
    const id = req.query.id
    const db = firebase.database()
    const ref = db.ref('myjson/' + id)

    let data = null
    await ref.once('value', snapshot => {
        data = snapshot.val()
    })

    if (data) {
        return res.status(200).json(JSON.parse(data.data))
    }

    return res.status(404).json({})
}