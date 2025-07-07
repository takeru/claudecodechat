import { Router } from 'express';

const router = Router();

router.post('/execute', async (req, res, next): Promise<void> => {
  try {
    const { command, workingDirectory } = req.body;

    if (!command || typeof command !== 'string') {
      res.status(400).json({
        error: {
          message: 'Command is required and must be a string',
          code: 'INVALID_COMMAND',
        },
      });
      return;
    }

    res.json({
      message: 'Claude Code execution endpoint (stub)',
      receivedCommand: command,
      workingDirectory: workingDirectory || process.cwd(),
      note: 'This is a stub implementation. Actual Claude Code integration will be implemented in Issue #4',
    });
  } catch (error) {
    next(error);
  }
});

export { router as claudeRouter };
