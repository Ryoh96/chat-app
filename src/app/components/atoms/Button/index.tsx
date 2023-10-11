import Spinner from '../Spinner'

type Props = {
  children: React.ReactNode
  loading?: boolean
  variant?: 'default' | 'large'
  color?: string
} & React.ComponentPropsWithoutRef<'button'>

const Button = ({
  children,
  loading,
  variant,
  disabled,
  color = 'bg-black',
  ...props
}: Props) => {
  return (
    <button
      disabled={loading || disabled}
      className={`${color} py-3 px-4 rounded shadow bg-opacity-80 hover:bg-opacity-30 text-white ${
        variant === 'large' && 'w-4/5'
      }`}
      {...props}
    >
      {loading ? <Spinner color="white" variant="small" /> : children}
    </button>
  )
}

export default Button
