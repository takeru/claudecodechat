# Dev

指定されたIssueの開発を開始します。

## 自動実行内容
1. Issueの内容を確認
2. featureブランチを作成
3. Draft PRを作成
4. 開発を開始

## コマンド実行

### 1. Issue情報の確認
```bash
!echo "=== Issue #$ARGUMENTS の詳細 ==="
!gh issue view $ARGUMENTS
```

### 2. ブランチの準備
```bash
!echo -e "\n=== 現在のブランチ ==="
!git branch --show-current

!echo -e "\n=== mainブランチに切り替えて最新化 ==="
!git checkout main && git pull origin main
```

### 3. featureブランチの作成
```bash
!echo -e "\n=== featureブランチを作成 ==="
!# エラーハンドリング付きのブランチ名生成
!ISSUE_TITLE=$(gh issue view $ARGUMENTS --json title -q '.title' 2>/dev/null || echo "untitled")
!CLEAN_TITLE=$(echo "$ISSUE_TITLE" | sed 's/[^a-zA-Z0-9]/-/g' | tr '[:upper:]' '[:lower:]' | cut -c1-20)
!BRANCH_NAME="feature/issue-$ARGUMENTS-${CLEAN_TITLE:-fix}"
!
!# ブランチが既に存在する場合の確認
!if git show-ref --verify --quiet "refs/heads/$BRANCH_NAME"; then
!  echo "警告: ブランチ '$BRANCH_NAME' は既に存在します"
!  BRANCH_NAME="${BRANCH_NAME}-$(date +%s)"
!  echo "新しいブランチ名: '$BRANCH_NAME'"
!fi
!
!git checkout -b "$BRANCH_NAME"
!echo "ブランチ '$BRANCH_NAME' を作成しました"
```

### 4. Draft PRの作成
```bash
!echo -e "\n=== Draft PRを作成 ==="
!ISSUE_TITLE=$(gh issue view $ARGUMENTS --json title -q '.title' 2>/dev/null || echo "Issue #$ARGUMENTS")
!# 最初のpushが必要
!git push -u origin HEAD
!# Draft PR作成
!gh pr create --draft --title "[WIP] Issue #$ARGUMENTS: $ISSUE_TITLE" --body "Resolves #$ARGUMENTS" --assignee @me || echo "PR作成に失敗しました。後で手動で作成してください。"
```

## 開発開始
Issue #$ARGUMENTS の開発環境をセットアップしました。
実装を開始しましょう！

## 次のステップ
1. 必要なファイルを作成/編集
2. こまめにコミット（`git commit -m "[Issue #$ARGUMENTS] 変更内容"`）
3. 定期的にプッシュ（`git push -u origin HEAD`）
4. 完成したら `/project:review` でレビュー準備