# Review

PRをレビューに出す準備をします。

## レビュー前チェックリスト

### 1. コード品質
```bash
!echo "=== TypeScript Check ==="
!npm run typecheck 2>/dev/null || echo "TypeScript not configured yet"

!echo -e "\n=== Lint Check ==="
!npm run lint 2>/dev/null || echo "Linter not configured yet"
```

### 2. テスト
```bash
!echo -e "\n=== Test Results ==="
!npm test 2>/dev/null || echo "Tests not configured yet"
```

### 3. 差分確認
```bash
!echo -e "\n=== Changed Files ==="
!git diff --stat origin/main...HEAD

!echo -e "\n=== Commit History ==="
!git log --oneline origin/main...HEAD
```

### 4. PR更新
現在のDraft PRをReady for Reviewに変更:
```bash
!gh pr ready
```

### 5. レビュー依頼
レビュアーを指定してレビューを依頼できます。

## 次のステップ
1. 上記のチェックがすべてパスしていることを確認
2. PRの説明を更新
3. レビュアーに連絡

### レビュー後のフロー
- **承認された場合**: マージを実行
- **修正が必要な場合**: フィードバックに対応して再度 `/project:review`
- **新しいタスク**: `/project:plan` または `/project:issue`