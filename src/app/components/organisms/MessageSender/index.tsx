import useSendMessage from '../../../hooks/useSendMessage'

const MessageSender = ({
  room
}: {
  room: string
}) => {
  const { message, setMessage, handleSendMessage } = useSendMessage(room)
  return (
    <div className="bg-black bg-opacity-70 py-4 text-white">
      <form onSubmit={handleSendMessage}>
        <div className="flex gap-3 justify-center items-center">
          <label>
            <span className="sr-only">つぶやき</span>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-2 py-2 rounded-lg text-sm min-w-[220px] text-black md:w-[500px]"
              placeholder="つぶやきを入力"
            />
          </label>
          <button
            className="bg-black py-2 px-3 rounded-full text-sm ring-1 ring-white hover:opacity-40 disabled:hover:opacity-100 disabled:ring-gray-400 disabled:text-gray-400"
            disabled={message.length === 0}
          >
            つぶやく
          </button>
        </div>
      </form>
    </div>
  )
}

export default MessageSender
