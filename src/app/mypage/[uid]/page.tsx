'use client'
import { format } from 'date-fns'

import RoundedImage from '../../components/atoms/RoundedImage'
import { AuthGuard } from '../../components/utils/AuthGuard'
import { useAuthContext } from '../../contexts/AuthContext'

const MyPage = () => {
  const { user } = useAuthContext()

  return (
    <AuthGuard>
      <div className="text-center mx-auto text-white my-10">
        <div className="mb-10">
          <RoundedImage
            src={user?.photoURL ?? ''}
            width={200}
            height={200}
            alt="アバター1"
          />
        </div>
        <div className="space-y-3">
          <p className="text-lg">ユーザ名: {user?.displayName}</p>
          {user?.metadata.lastSignInTime && (
            <p>
              最終ログイン:{' '}
              {format(
                new Date(user?.metadata.lastSignInTime),
                'yyyy年MM月dd日',
              )}
            </p>
          )}
          {user?.metadata.creationTime! && (
            <p>
              作成日:{' '}
              {format(new Date(user?.metadata.creationTime!), 'yyyy年MM月dd日')}
            </p>
          )}
        </div>
      </div>
    </AuthGuard>
  )
}

export default MyPage
