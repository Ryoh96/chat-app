import { format } from 'date-fns'

import Balloon from '../../atoms/Balloon'
import IconWithText from '../../molecules/IconWithText'

const Chat = ({
  name,
  photoURL,
  children,
  createdAt,
  direction = 'left',
}: {
  name: string
  photoURL: string
  children: React.ReactNode
  createdAt: string
  direction?: 'left' | 'right'
}) => {
  return (
    <div
      className={`flex items-start max-w-xs md:max-w-lg ${
        direction === 'right' && 'flex-row-reverse ml-auto'
      }`}
    >
      <IconWithText photoURL={photoURL} name={name} />
      <div
        className={`flex items-end gap-2 ${
          direction === 'left' && 'flex-row-reverse'
        }`}
      >
        <p className="text-xs text-white">{createdAt}</p>
        <div className="flex-grow-0 pt-1">
          <Balloon direction={direction}>{children}</Balloon>
        </div>
      </div>
    </div>
  )
}

export default Chat
