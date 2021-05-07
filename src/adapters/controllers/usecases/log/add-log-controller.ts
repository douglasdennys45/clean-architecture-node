import { Controller } from '@/adapters/controllers/usecases/controller'
import { AddLogRepository } from '@/application/ports'
import { HttpRequest, HttpResponse } from '@/adapters/controllers/ports/http'
import { noContent, serverError } from '@/adapters/controllers/shared/http-helper'

export class AddLogController implements Controller {
  constructor (private readonly addLogRepository: AddLogRepository) {}

  async handle (req: HttpRequest): Promise<HttpResponse> {
    try {
      await this.addLogRepository.add(req.body)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
