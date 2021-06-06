import { AddLogUseCases } from '@/application/usecases'
import { AddLogRepository } from '@/application/ports'
import { LogMongoRepository } from '@/drivers/database/mongodb/repositories'

export const makeDbAddLogRepositoryFactory = (): AddLogRepository => {
  const repo = new LogMongoRepository()
  return new AddLogUseCases(repo)
}
