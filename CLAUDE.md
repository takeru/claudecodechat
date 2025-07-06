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

### Issue-Driven Development Workflow

#### 1. Interactive Issue Creation
Claude Codeとユーザーが対話しながらIssueを作成:
1. **対話的な要件定義**
   - ユーザーがアイデアや要望を説明
   - Claude Codeが既存コードを分析し、実装方法を提案
   - 技術的な課題や依存関係を事前に特定

2. **Issue Draft作成**
   - タイトル、説明、受け入れ条件を整理
   - 関連するコードやドキュメントを参照
   - 実装の見積もりと優先度を設定

3. **自動Issue登録**
   - Claude Codeが`gh issue create`でIssue作成
   - 適切なラベルとマイルストーンを設定

#### 2. Development Workflow
すべての開発は以下のフローに従う:

1. **Branch作成**
   ```bash
   git checkout -b feature/issue-{number}-{short-description}
   ```

2. **WIP PR作成**
   ```bash
   gh pr create --draft --title "[WIP] Issue #{number}: {title}"
   ```

3. **開発サイクル**
   - こまめなコミット（機能単位）
   - 定期的なプッシュ（最低1日1回）
   - CI/CDの結果を確認

4. **レビューとマージ**
   - Draft PRをReady for reviewに変更
   - ユーザーによるコードレビュー
   - 承認後、squash mergeでmainに統合

### Claude Code Integration

#### Slash Commands
開発効率を上げるためのコマンド:
- `/project:plan` - Issue作成前の設計ディスカッション
- `/project:issue` - Issue作成ワークフローを開始
- `/project:dev {issue-number}` - 指定Issueの開発を開始
- `/project:status` - 現在の作業状態を確認
- `/project:review` - PRレビューの準備
- `/project:quick-issue {title}` - 素早くIssueを作成（最小限の対話）

#### Git Hooks Configuration
`.claude/hooks/`に配置:
- **pre-commit**: TypeScript型チェック、ESLint実行
- **commit-msg**: コミットメッセージ形式の検証
- **post-commit**: 自動的にremoteへプッシュ

#### Best Practices
1. **常に最新のmainから分岐**
2. **1 Issue = 1 PR = 1 Feature**
3. **WIPでも早めにPRを作成**
4. **レビュー前にセルフチェック**

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

### Branch Strategy
- **Branch naming**: `feature/issue-{number}-{short-description}`
- **Always branch from**: latest `main`
- **Merge strategy**: Squash and merge
- **Delete branch**: After merge

### Pull Request Process
1. Create feature branch from Issue
2. Create draft PR immediately after first commit
3. Implement with tests
4. Update documentation
5. Mark PR as ready for review
6. Request review from maintainers
7. Address review feedback
8. Merge after approval (squash merge)

### Commit Messages
Format: `[Issue #N] Brief description`
Example: `[Issue #4] Add Claude Code SDK integration`

Additional guidelines:
- Use present tense ("Add feature" not "Added feature")
- Keep first line under 50 characters
- Reference issue number in every commit
- Group related changes in single commit

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

## Development Tools & Automation

### Claude Code Settings
`.claude/settings.json`で設定:
```json
{
  "auto_commit_push": true,
  "branch_protection": true,
  "issue_templates": true
}
```

### GitHub Actions
- **CI Pipeline**: TypeScript, Lint, Test on every push
- **PR Checks**: Build success required before merge
- **Auto-label**: Based on file changes
- **Issue-PR Link**: Automatic linking

### Development Commands
```bash
# Issue作成前の設計ディスカッション
claude /project:plan "新機能のアイデア"

# 対話的なIssue作成
claude /project:issue

# 素早いIssue作成
claude /project:quick-issue "バグ修正: ログイン画面のエラー"

# 開発開始（Issue番号を指定）
claude /project:dev 5

# 開発状況の確認
claude /project:status

# レビュー準備
claude /project:review
```

---
*Last updated: 2025-01-06*