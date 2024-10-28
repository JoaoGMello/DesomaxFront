import { appToast } from '@/main'

type ToastObj = {
  severity: ETypeToast
  summary: string
  detail: string
  life?: number
}

enum ETypeToast {
  Error = 'error',
  Warn = 'warn',
  Info = 'info',
  Success = 'success'
}

export default ETypeToast

export const toast = (
  type: ETypeToast = ETypeToast.Info,
  title: string,
  text: string,
  time: number = 2500
): void => {
  const toastObj: ToastObj = {
    severity: type,
    summary: title,
    detail: text,
    life: time
  }

  if (time === -1) delete toastObj['life']
  appToast.add(toastObj)
}
