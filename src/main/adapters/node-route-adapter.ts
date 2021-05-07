import { HttpRequest } from '@/adapters/controllers/ports'
import { Controller } from '@/adapters/controllers/usecases/controller'

export const adaptRoute = (controller: Controller) => {
  return async (req, res) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return res.send(httpResponse.body, httpResponse.statusCode)
    } else {
      return res.send({ error: httpResponse.body.message }, httpResponse.statusCode)
    }
  }
}
