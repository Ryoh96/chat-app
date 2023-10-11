import create from 'zustand'

type State = {
  name: string
  setName: (payload: string) => void
}

const useRoomNameStore = create<State>((set, _) => ({
  name: '野良',
  setName: (payload) => set({ name: payload }),
}))

export default useRoomNameStore
