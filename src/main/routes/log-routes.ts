import { adaptRoute } from '@/main/adapters/node-route-adapter'
import { makeAddLogControllerFactory } from '../factories/controllers/log/add-log-controller-factory'

export default (router): void => {
  router.post('/logs', adaptRoute(makeAddLogControllerFactory()))
}
