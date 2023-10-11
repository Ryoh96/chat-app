import * as z from 'zod'

export const logInSchema = z.object({
  email: z
    .string({
      required_error: '入力してください',
      invalid_type_error: '文字を入力してください',
    })
    .email('Emailの形式で入力してください'),
  password: z
    .string({
      required_error: '入力してください',
      invalid_type_error: '文字を入力してください',
    })
    .min(8, '8文字以上入力してください')
    .regex(
      /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
      '半角英数字混合で入力してください',
    ),
})

export type LogIn = z.infer<typeof logInSchema>
