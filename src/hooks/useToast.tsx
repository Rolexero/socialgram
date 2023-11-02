import { toast, ToastOptions } from "react-toastify";

const useToast = () => {
  const options: ToastOptions = {
    position: "top-right",
    closeOnClick: true,
    pauseOnHover: true,
    hideProgressBar: false,
  };
  const toastSuccess = (message: string) => {
    toast.success(message, options);
  };
  const toastError = (message: string) => {
    toast.error(message, options);
  };
  const toastInfo = (message: string) => {
    toast.info(message, options);
  };
  const toastWarning = (message: string) => {
    toast.warning(message, options);
  };

  return { toastSuccess, toastError, toastInfo, toastWarning };
};

export default useToast;
