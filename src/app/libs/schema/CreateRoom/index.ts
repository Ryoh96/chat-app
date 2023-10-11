import * as z from 'zod'

export const createRoomSchema = z.object({
  title: z
    .string({
      required_error: '入力してください',
      invalid_type_error: '文字を入力してください',
    })
    .max(20, '入力でいる文字数は20文字までです'),
  content: z
    .string({
      required_error: '入力してください',
      invalid_type_error: '文字を入力してください',
    })
    .max(100, '入力できる文字数は100文字までです'),
  file: z.custom<FileList>().transform((file) => file[0]),
})

export type CreateRoom = z.infer<typeof createRoomSchema>
