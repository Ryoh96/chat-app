import { ToastContainer } from 'react-toastify'
// import type { ToastProps } from 'react-toastify/dist/types'

const defaultProps: Partial<any> = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
  type: 'error',
}

const Toast = (props: Partial<any>) => (
  <ToastContainer
    {...defaultProps}
    {...props}
    style={{ zIndex: 99999 }}
    data-testid="toast"
  />
)

export default Toast
