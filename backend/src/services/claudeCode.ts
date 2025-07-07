import { access } from 'fs/promises';
import { config } from '../config';

export async function checkClaudeCodeAvailability(): Promise<boolean> {
  try {
    await access(config.claudeCodePath);
    return true;
  } catch {
    return false;
  }
}

export interface ClaudeExecuteOptions {
  command: string;
  workingDirectory?: string;
}

export interface ClaudeExecuteResult {
  output: string;
  exitCode: number;
  error?: string;
}

export async function executeClaudeCommand(
  _options: ClaudeExecuteOptions
): Promise<ClaudeExecuteResult> {
  throw new Error('Not implemented. This will be implemented in Issue #4');
}
