import { PDS } from './pds'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// Create and start PDS
const pds = new PDS({
  port: parseInt(process.env.PORT || '3000'),
  hostname: process.env.HOSTNAME || 'localhost',
  dbPath: process.env.DB_PATH || ':memory:',
  serviceDid: process.env.SERVICE_DID || 'did:web:localhost'
})

pds.start().catch(err => {
  console.error('Failed to start PDS:', err)
  process.exit(1)
}) 