# Claude Code Custom Commands

このディレクトリには、プロジェクト専用のカスタムスラッシュコマンドが含まれています。

## 使用方法

プロジェクト内でClaude Codeを使用する際、以下のコマンドが利用可能です：

- `/project:plan` - Issue作成前の設計ディスカッション
- `/project:issue` - GitHub Issue作成ワークフロー
- `/project:dev {issue-number}` - 指定Issueの開発開始
- `/project:status` - 現在の開発状況確認
- `/project:review` - PRレビュー準備

## コマンド作成ガイド

新しいコマンドを作成する場合：

1. このディレクトリに `{command-name}.md` ファイルを作成
2. `$ARGUMENTS` プレースホルダーで引数を受け取る
3. `!command` でbashコマンドを実行
4. `@file` でファイルを参照

## 例

```markdown
# MyCommand

カスタムコマンドの説明

## 実行内容
!echo "Arguments: $ARGUMENTS"

@../CLAUDE.md
```