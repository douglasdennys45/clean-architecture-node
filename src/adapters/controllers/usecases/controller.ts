import { HttpRequest, HttpResponse } from '@/adapters/controllers/ports/http'

export interface Controller {
  handle: (req: HttpRequest) => Promise<HttpResponse>
}
