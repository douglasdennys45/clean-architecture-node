import { AddLogController } from '@/adapters/controllers/usecases'
import { Controller } from '@/adapters/controllers/usecases/controller'
import { makeDbAddLogRepositoryFactory } from '../../usecases/log/db-add-log-factory'

export const makeAddLogControllerFactory = (): Controller => {
  return new AddLogController(makeDbAddLogRepositoryFactory())
}
