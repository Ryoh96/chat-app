import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

import firebase_app from '../../firebase/config'

const auth = getAuth(firebase_app)
const storage = getStorage(firebase_app)

export default async function signUp(
  email: string,
  password: string,
  displayName: string,
  photoFile: File | null,
) {
  let result = null,
    error = null
  try {
    // ユーザ登録
    result = await createUserWithEmailAndPassword(auth, email, password)

    // アバター画像をFirebase Storageにアップロード
    if (result.user && photoFile) {
      const storageRef = ref(storage, `avatars/${result.user.uid}/avatar.jpg`)
      await uploadBytes(storageRef, photoFile)

      // アップロードした画像のURLを取得
      const photoURL = await getDownloadURL(storageRef)
      console.log(904028, photoURL)

      // ユーザープロフィール情報を設定
      if (result.user) {
        await updateProfile(result.user, {
          displayName: displayName,
          photoURL,
        })
      }
      if (photoFile) {
        const storageRef = ref(storage, `avatars/${result.user.uid}/avatar.jpg`)
        await uploadBytes(storageRef, photoFile)
      }
    }
  } catch (e) {
    error = e
  }

  return { result, error }
}
