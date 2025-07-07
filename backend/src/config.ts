export const config = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3001,
  nodeEnv: process.env.NODE_ENV || 'development',
  claudeCodePath: process.env.CLAUDE_CODE_PATH || '/usr/local/bin/claude',
} as const;

export type Config = typeof config;
