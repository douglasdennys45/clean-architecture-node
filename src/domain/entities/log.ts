import { LogData } from '@/domain/data'

export class Log {
  constructor (private readonly data: LogData) {}

  static add (logData: LogData): any {
    return new Log(logData)
  }
}
