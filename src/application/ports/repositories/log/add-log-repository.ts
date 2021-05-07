import { LogDataRequest } from '@/application/data'

export interface AddLogRepository {
  add: (dataLog: LogDataRequest) => Promise<void>
}
