type Props = {
  variant?: 'default' | 'small'
  color?: string
}

const Spinner = ({ variant = 'default', color = 'border-white' }: Props) => {
  return (
    <div
      className={`animate-spin rounded-full border-4 ${color} border-t-transparent mx-auto ${
        variant === 'default' && '!h-16 !w-16 '
      } ${variant === 'small' && 'my-0 !h-4 !w-4'}`}
      role="alert"
      aria-busy="true"
      aria-label="Loading"
      data-testid="spinner"
    />
  )
}

export default Spinner
