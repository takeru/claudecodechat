# Quick Issue

素早くIssueを作成します（対話的な確認を最小限に）。

## 使用方法
```
/project:quick-issue タイトル
```

## Issue作成
```bash
!# 引数チェック
!if [ -z "$ARGUMENTS" ]; then
!  echo "エラー: タイトルを指定してください"
!  echo "使用方法: /project:quick-issue タイトル"
!  exit 1
!fi
!
!TITLE="$ARGUMENTS"
!BODY=$(cat <<EOF
## 概要
$ARGUMENTS

## 受け入れ条件
- [ ] 実装完了
- [ ] テスト作成
- [ ] ドキュメント更新

## 技術的詳細
後ほど追記

---
*このIssueは quick-issue コマンドで作成されました*
EOF
)
!
!# Issue作成
!ISSUE_URL=$(gh issue create --title "$TITLE" --body "$BODY" --assignee @me)
!
!if [ $? -eq 0 ]; then
!  echo "✅ Issueを作成しました: $ISSUE_URL"
!  ISSUE_NUMBER=$(echo "$ISSUE_URL" | grep -oE '[0-9]+$')
!  echo ""
!  echo "次のステップ:"
!  echo "  /project:dev $ISSUE_NUMBER"
!else
!  echo "❌ Issue作成に失敗しました"
!fi
```

## 次のステップ
作成されたIssueの番号を使って開発を開始：
```
/project:dev {issue-number}
```

詳細な設計が必要な場合は：
```
/project:plan
```