import { LogData } from '@/domain/data'

export interface AddLog {
  add: (logData: LogData) => Promise<void>
}
