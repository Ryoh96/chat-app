import * as z from 'zod'

export const signUpSchema = z.object({
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
    displayName: z
     .string({
      required_error: '入力してください',
      invalid_type_error: '文字を入力してください',
    })
    .min(1, "1文字以上入力してください"),
    file: z.custom<FileList>().transform((file) => file[0]),
})

export type SignUp = z.infer<typeof signUpSchema>
