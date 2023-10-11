import Image from 'next/image'
import React from 'react'

const Card = ({
  photoURL,
  title,
  desc,
  author,
}: {
  photoURL: string
  title: string
  desc: string
  author: string
}) => {
  return (
    <div className="bg-black bg-opacity-60 px-6 py-10 rounded-lg relative mx-3">
      <figure className="rounded-lg">
        <div className="flex gap-10 justify-between max-md:flex-col max-md:text-center">
          <figure
            className={`relative max-md:scale-90 max-md:mx-auto`}
            style={{ width: 200 + 'px', height: 200 + 'px' }}
          >
            <Image
              src={photoURL}
              fill
              alt="サムネイル"
              style={{ objectFit: 'cover' }}
              priority
              quality={30}
            />
          </figure>
          <div className="flex-grow">
            <h2 className="text-3xl mb-6 font-extrabold">{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
        <span className="absolute right-4 bottom-4">by {author}</span>
      </figure>
    </div>
  )
}

export default Card
