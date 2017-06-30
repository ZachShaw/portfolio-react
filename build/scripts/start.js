const logger = require('../lib/logger')

logger.info('Starting server...')
require('../../server/main').listen(process.env.PORT, () => {
  logger.success('Server is running at http://localhost:' + process.env.PORT)
})
