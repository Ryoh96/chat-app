# このアプリについて
リアルタイムでチャットが出来るWebアプリである。
PWAにも対応済み。インストールして使える。

## 基本機能
次の要件は満たした
1. 画像とユーザーネームを用いて会員登録を行う
2. リアルタイムの会話を複数人で行うことのできるチャットアプリケーションを実装

## 追加機能
少し時間があったため、次の追加機能を実装した
- 好きな話題のチャットルームを作成し、そこで会話する機能。いわば、SNSのコミュニティ機能。
- PWA化

## 技術スタック
技術スタックは以下の通りである。
- フロントエンド: React/ Next.js
- バックエンド: Firebase

その他主要なライブラリ
- zod
- react-hook-form
- Headless UI
- Tailwind CSS
- zustand

## 展望
- ファンの熱量を還元したい。一番直近で開発できそうな機能だと、つぶやき数に応じたポイントをゲットし、何かと交換できる機能など

# 改善点
- ソーシャルログイン対応
- 呟く際のinput要素に改行があった場合、自動で高さを調整して読みやすくする
- ルームにタグ機能をつけ、なんの話題か分かりやすくする
- ブロックやミュート機能をつける
- DMの実装
- いいね、よくないね、機能の実装
