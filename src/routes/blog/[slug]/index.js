import admin from 'firebase-admin'
import serviceAccount from './../../../../sapperblog-8a647-firebase-adminsdk-p50ki-375e3b4fb8.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sapperblog-8a647.firebaseio.com/',
})

export async function put(req, res, next) {
  const { slug } = req.params
  let { title, content, password } = req.body
  if (password === 'haru') {
    let db = admin.database()
    let ref = db.ref().child(slug)
    await ref.update({ html: content, title: title })
    res.json({ state: 'ok' })
  } else {
    res.json({ state: 'password wrong' })
  }
}

export async function post(req, res, next) {
  const { slug } = req.params
  let { title, content, password } = req.body
  if (password === 'haru') {
    let db = admin.database()
    let ref = db.ref().child(slug)
    await ref.set({ html: content, title: title, slug: slug })
    res.json({ state: 'ok' })
  } else {
    res.json({ state: 'password wrong' })
  }
}
