type Props = {
  variant?: 'default' | 'small'
  color?: string
}

const Spinner = ({ variant = 'default', color = 'border-pink-500' }: Props) => {
  return (
    <div
      className={`animate-spin rounded-full border-2 ${color} border-t-transparent mx-auto ${
        variant === 'default' && '!h-8 !w-8 '
      } ${variant === 'small' && 'my-0 !h-4 !w-4'}`}
      role="alert"
      aria-busy="true"
      aria-label="Loading"
      data-testid="spinner"
    />
  )
}

export default Spinner
