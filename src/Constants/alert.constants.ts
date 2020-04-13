  export enum AlertType {
  SUCCESS = 'ALERT_SUCCESS',
  ERROR = 'ALERT_ERROR',
  CLEAR = 'ALERT_CLEAR'
}

export interface AlertMessage {
  type: AlertType,
  message: string
}



