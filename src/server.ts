import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorlogger, logger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', () => {
  errorlogger.error('Uncaught expectation is detectd...........')
  process.exit(1)
})

async function dbConnect() {
  let server: Server

  try {
    await mongoose.connect(config.database_url as string)
    // logger.info(config.database_url)
    logger.info('database connect successfully')
    server = app.listen(config.port, () => {
      logger.info(`app listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('database connect failed', err)
  }

  process.on('unhandledRejection', err => {
    errorlogger.error('server is stoping.......')
    if (server) {
      server.close(() => {
        errorlogger.error(err)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

dbConnect()
