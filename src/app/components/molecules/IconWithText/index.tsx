import React from 'react'

import RoundedImage from '../../atoms/RoundedImage'

const IconWithText = ({
  name,
  photoURL,
}: {
  name: string
  photoURL: string
}) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center w-fit">
      <RoundedImage
        src={photoURL}
        width={50}
        height={50}
        alt="アイコン"
        priority
      />
      <p className="text-xs text-white w-20 text-center">{name}</p>
    </div>
  )
}

export default IconWithText
