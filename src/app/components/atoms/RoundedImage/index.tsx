import Image from 'next/image'

type Props = React.ComponentPropsWithoutRef<typeof Image>

const RoundedImage = (props: Props) => {
  return (
    <figure
      className={`relative text-center mx-auto`}
      style={{ width: props.width + 'px', height: props.height + 'px' }}
    >
      <Image
        src={props.src ?? ''}
        alt={props.alt ?? ''}
        fill
        className="rounded-[50%] border-white border"
        style={{ objectFit: 'cover' }}
        priority
        quality={30}
      />
    </figure>
  )
}

export default RoundedImage
