import Spinner from '../Spinner'

type Props = {
  children: React.ReactNode
  loading?: boolean
  variant?: 'default'
} & React.ComponentPropsWithoutRef<'button'>

const Button = ({ children, loading, variant, disabled, ...props }: Props) => {
  return (
    <button
      disabled={loading || disabled}
      className="bg-black py-3 px-4 rounded shadow bg-opacity-40 hover:bg-opacity-30"
      {...props}
    >
      {loading ? <Spinner color="white" variant="small" /> : children}
    </button>
  )
}

export default Button
