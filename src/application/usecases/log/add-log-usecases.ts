import { AddLogRepository } from '@/application/ports'
import { AddLog } from '@/application/ports/contracts'
import { LogData } from '@/domain/data'
import { Log } from '@/domain/entities/log'

export class AddLogUseCases implements AddLog {
  constructor (private readonly addLogRepository: AddLogRepository) {}

  async add (logData: LogData): Promise<void> {
    const data: LogData = Log.add(logData)
    await this.addLogRepository.add(data)
  }
}
