import { Router } from 'express';
import { config } from '../config';
import { checkClaudeCodeAvailability } from '../services/claudeCode';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const claudeCodeAvailable = await checkClaudeCodeAvailability();

    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'claude-code-chat-backend',
      version: '1.0.0',
      environment: config.nodeEnv,
      checks: {
        claudeCode: {
          available: claudeCodeAvailable,
          path: config.claudeCodePath,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      timestamp: new Date().toISOString(),
      service: 'claude-code-chat-backend',
      version: '1.0.0',
      environment: config.nodeEnv,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

export { router as healthRouter };
