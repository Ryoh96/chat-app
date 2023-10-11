import { useEffect } from 'react'

import type { Chat } from '../types'

const useScrollDown = (chats: Chat[]) => {
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }, [chats])
}

export default useScrollDown
