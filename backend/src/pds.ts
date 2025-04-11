import Database from 'better-sqlite3';
import express, { Express, Request, Response } from 'express';
import { BskyAgent } from '@atproto/api';
import * as crypto from '@atproto/crypto';
import * as repo from '@atproto/repo';
import { Lexicons } from '@atproto/lexicon';

// Define our PDS configuration
interface PDSConfig {
  port: number;
  hostname: string;
  dbPath: string;
  serviceDid: string;
}

// Create our PDS class
export class PDS {
  private config: PDSConfig;
  private db: Database.Database;
  private app: Express;
  private agent: BskyAgent;
  private server: ReturnType<Express['listen']> | null = null;

  constructor(config: PDSConfig) {
    this.config = config;
    this.db = new Database(config.dbPath);
    this.app = express();
    this.agent = new BskyAgent({
      service: `http://${config.hostname}:${config.port}`
    });
    this.initialize();
  }

  private initialize() {
    // Parse JSON bodies
    this.app.use(express.json());
    
    // Set up basic routes
    this.setupRoutes();
  }

  private setupRoutes() {
    // Health check endpoint
    this.app.get('/_health', async (req: Request, res: Response) => {
      res.json({ status: 'ok' });
    });

    // Basic record creation endpoint
    this.app.post('/xrpc/com.atproto.repo.createRecord', async (req: Request, res: Response) => {
      try {
        const { collection, record } = req.body;
        
        // Validate the record using lexicon
        const lexicons = new Lexicons();
        const validRecord = lexicons.validate(collection, record);
        if (!validRecord) {
          res.status(400).json({ error: 'Invalid record' });
          return;
        }

        // Create the record using the agent
        const result = await this.agent.api.com.atproto.repo.createRecord({
          collection,
          record,
          repo: req.headers.authorization || '',
        });

        res.json(result);
      } catch (error) {
        console.error('Error creating record:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });
  }

  async start() {
    return new Promise<void>((resolve) => {
      this.server = this.app.listen(this.config.port, () => {
        console.log(`PDS running at ${this.config.hostname}:${this.config.port}`);
        resolve();
      });
    });
  }

  async stop() {
    if (this.server) {
      await new Promise<void>((resolve) => {
        this.server?.close(() => resolve());
      });
    }
    this.db.close();
  }
} 