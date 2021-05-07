import { MongoShared } from '@/drivers/database/mongodb/shared'

export class LogMongoRepository {
  async add (logData: any): Promise<void> {
    const col = await MongoShared.getCollection('logs')
    await col.insertOne(logData)
  }
}
