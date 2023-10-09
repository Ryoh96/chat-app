const Balloon = ({
  children,
  direction = 'left',
}: {
  children: React.ReactNode
  direction?: 'right' | 'left'
}) => {
  console.log(direction)
  return (
    <div className="overflow-visible">
      <div
        className={`bg-white px-3 py-2 grid content-center rounded-lg shadow relative
      before:content-[''] before:absolute before:border-[10px]  before:w-5 before:h-5  before:translate-y-[50%]  before:border-transparent ${
        direction === 'left' && 'before:-left-4 before:border-r-white'
      }  ${direction === 'right' && 'before:-right-4 before:border-l-white'}
      text-sm
    `}
      >
        {children}
      </div>
    </div>
  )
}

export default Balloon
