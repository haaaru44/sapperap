import admin from 'firebase-admin'
import serviceAccount from './../../sapper-blog-6b5c2-firebase-adminsdk-cuvii-a0fb4a7367.json'
import posts from './blog/_posts'

export async function get(req, res, next) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://sapper-blog-6b5c2.firebaseio.com/',
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
