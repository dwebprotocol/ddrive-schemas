const p = require('path')

const API_VERSION = 0

module.exports = {
  ddriveSchemaPath: p.join(__dirname, 'schemas', 'ddrive.proto'),
  messages: require('./lib/messages'),
  Stat: require('./lib/stat'),
  version: API_VERSION
}
