# Status

現在の開発状況を確認します。

## チェック項目

### Git状態
```bash
!echo "=== Current Branch ==="
!git branch --show-current

!echo -e "\n=== Git Status ==="
!git status --short

!echo -e "\n=== Recent Commits ==="
!git log --oneline -5
```

### PR状態
```bash
!echo -e "\n=== Open PRs ==="
!gh pr list --author "@me" --state open

!echo -e "\n=== Draft PRs ==="
!gh pr list --author "@me" --draft
```

### Issue状態
```bash
!echo -e "\n=== Assigned Issues ==="
!gh issue list --assignee "@me" --state open
```

### 変更ファイル
```bash
!echo -e "\n=== Modified Files ==="
!git diff --name-only
```

## 推奨アクション
```bash
!echo -e "\n=== 推奨アクション ==="
!
!# 変更の有無をチェック
!if ! git diff --quiet || ! git diff --cached --quiet; then
!  echo "📝 未コミットの変更があります"
!  echo "   → git add . && git commit -m '[Issue #N] 変更内容'"
!elif [ -n "$(git log origin/$(git branch --show-current)..HEAD 2>/dev/null)" ]; then
!  echo "📤 プッシュしていないコミットがあります"
!  echo "   → git push"
!else
!  # PR状態を確認
!  PR_STATE=$(gh pr view --json state -q '.state' 2>/dev/null || echo "none")
!  if [ "$PR_STATE" = "OPEN" ]; then
!    if gh pr view --json isDraft -q '.isDraft' 2>/dev/null | grep -q true; then
!      echo "🔧 Draft PRを作成済みです"
!      echo "   → 実装を続けるか、完成したら /project:review"
!    else
!      echo "✅ PRはレビュー待ちです"
!      echo "   → レビュアーからのフィードバックを待ちましょう"
!    fi
!  else
!    echo "🚀 新しい作業を開始できます"
!    echo "   → /project:plan または /project:issue"
!  fi
!fi
```

## 次のステップ
- 実装中の場合: コードを書いてコミット
- レビュー準備ができたら: `/project:review`
- 新しいタスクを始める場合: `/project:plan` または `/project:issue`