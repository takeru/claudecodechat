# Claude Code Chat Backend

Node.js backend service for Claude Code Chat that provides API endpoints to interact with Claude Code CLI.

## Prerequisites

- Node.js v18 or higher
- pnpm package manager
- Claude Code CLI installed and accessible

## Installation

```bash
pnpm install
```

## Configuration

Create a `.env` file in the backend directory:

```env
PORT=3001
NODE_ENV=development
CLAUDE_CODE_PATH=/usr/local/bin/claude
```

## Development

Start the development server with hot reload:

```bash
pnpm dev
```

## Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build TypeScript to JavaScript
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm typecheck` - Run TypeScript type checking

## API Endpoints

### Health Check
```
GET /api/health
```
Returns service health status and Claude Code availability.

### Execute Claude Code (Stub)
```
POST /api/claude/execute
Content-Type: application/json

{
  "command": "string",
  "workingDirectory": "string (optional)"
}
```
Currently returns a stub response. Actual implementation pending Issue #4.

## Project Structure

```
backend/
├── src/
│   ├── index.ts          # Application entry point
│   ├── config.ts         # Configuration management
│   ├── routes/           # API route handlers
│   │   ├── health.ts     # Health check endpoints
│   │   └── claude.ts     # Claude Code endpoints
│   ├── services/         # Business logic
│   │   └── claudeCode.ts # Claude Code integration
│   ├── middleware/       # Express middleware
│   │   ├── errorHandler.ts
│   │   └── requestLogger.ts
│   └── types/            # TypeScript type definitions
├── tests/                # Test files
├── package.json
├── tsconfig.json
├── .eslintrc.js
├── .prettierrc
└── nodemon.json
```

## Next Steps

- Issue #4: Implement actual Claude Code SDK integration
- Issue #5: Add WebSocket/SSE support for streaming responses
- Issue #6: Implement authentication and authorization