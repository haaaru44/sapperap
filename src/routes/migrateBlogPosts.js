import admin from 'firebase-admin'
import serviceAccount from './../../sapperblog-8a647-firebase-adminsdk-p50ki-375e3b4fb8.json'
import posts from './blog/_posts'

export async function get(req, res, next) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://sapperblog-8a647.firebaseio.com/',
  })
  let db = admin.database()
  let dbRef = db.ref()
  await Promise.all(
    posts.map((post) => {
      dbRef.child(post.slug).set(post)
    }),
  )

  res.end('done')
}
