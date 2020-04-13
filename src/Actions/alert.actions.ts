import { AlertType, AlertMessage } from '../Constants';

export class AlertActions {

  public static success (message: string) : AlertMessage {
    return { type: AlertType.SUCCESS, message}
  }

  public static error (message: string) : AlertMessage {
    return { type: AlertType.ERROR, message}
  }

  public static clear () : AlertMessage {
    return { type: AlertType.CLEAR, message: ''}
  }
}