"use client"

import { useAuthContext } from "./contexts/AuthContext"

export default function Home() {
  const user = useAuthContext()
  return <p>{user?.displayName ?? user?.email}　としてログイン中</p>
}
