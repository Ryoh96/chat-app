import { getAuth, signOut as _signOut } from 'firebase/auth'

import firebase_app from '../../firebase/config'

const auth = getAuth(firebase_app)

export default async function signOut() {
  let error = null
  try {
    await _signOut(auth)
  } catch (e) {
    error = e
  }

  return { error }
}
