# Claude Code Chat - Project Guidelines

## Project Overview
This project enables remote access to Claude Code from iPhone devices through a secure web interface.

### Core Technologies
- **Frontend**: Next.js + Vercel AI SDK
- **Backend**: Node.js + Claude Code SDK
- **Communication**: Tailscale VPN
- **Development**: GitHub Issue-driven development

## Architecture

### System Components
1. **Server Side (Linux/Mac)**
   - Claude Code CLI installed
   - Node.js backend service
   - Tailscale for secure networking

2. **Client Side (iPhone)**
   - Web-based interface optimized for mobile
   - Real-time streaming responses
   - Touch-friendly UI

### Security
- All communication via Tailscale VPN
- No public internet exposure
- Authentication tokens for API access

## Development Guidelines

### Issue-Driven Development
All features and changes must:
1. Start with a GitHub Issue
2. Have clear acceptance criteria
3. Be linked to commits/PRs

### Code Standards
- TypeScript for type safety
- ESLint + Prettier for code formatting
- Comprehensive error handling
- Mobile-first responsive design

### Testing Requirements
- Unit tests for core functionality
- Integration tests for API endpoints
- Manual testing on actual iPhone devices

## Initial Issues Roadmap

### Phase 1: Infrastructure
- Issue #1: Backend environment setup
- Issue #2: Frontend environment setup
- Issue #3: Tailscale integration guide

### Phase 2: Core Features
- Issue #4: Claude Code SDK integration
- Issue #5: Vercel AI SDK streaming
- Issue #6: Authentication system

### Phase 3: UI/UX
- Issue #7: Mobile-optimized interface
- Issue #8: Command history
- Issue #9: File browser

## Technical Specifications

### API Endpoints
- `POST /api/claude/execute` - Execute Claude Code commands
- `GET /api/claude/status` - Check service health
- `WebSocket /api/claude/stream` - Real-time streaming

### Environment Variables
```
CLAUDE_CODE_PATH=/usr/local/bin/claude
TAILSCALE_AUTH_KEY=<your-key>
API_TOKEN=<generate-secure-token>
```

### Performance Targets
- Command execution: < 500ms latency
- Streaming start: < 1s
- Mobile page load: < 3s

## Security Considerations

### Network Security
- Tailscale-only access (no public endpoints)
- HTTPS within Tailscale network
- IP allowlisting

### Application Security
- Token-based authentication
- Request rate limiting
- Input sanitization
- No sensitive data in logs

## Contribution Guidelines

### Pull Request Process
1. Create feature branch from Issue
2. Implement with tests
3. Update documentation
4. Request review
5. Merge after approval

### Commit Messages
Format: `[Issue #N] Brief description`
Example: `[Issue #4] Add Claude Code SDK integration`

## Project Structure
```
claudecodechat/
├── backend/           # Node.js server
│   ├── src/
│   ├── tests/
│   └── package.json
├── frontend/          # Next.js app
│   ├── app/
│   ├── components/
│   └── package.json
├── docs/             # Documentation
├── scripts/          # Utility scripts
└── CLAUDE.md         # This file
```

## Getting Started
See individual Issues for setup instructions:
- Backend setup: Issue #1
- Frontend setup: Issue #2
- First deployment: Issue #3

---
*Last updated: 2025-01-06*