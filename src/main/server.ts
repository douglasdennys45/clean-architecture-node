import 'module-alias/register'
import { MongoShared } from '@/drivers/database/mongodb/shared'

MongoShared.connect('mongodb://localhost:27017/apps')
  .then(async () => {
    const app = (await import('./config/app')).default
    await app.start(8080)
    console.log('started server')
  })
  .catch(console.error)
