# Clientフォルダ

このフォルダは、クライアント側（フロントエンド）のソースコードを書いていくフォルダです。

## フォルダ構成

```txt
client
├── README.md
├── package.json
├── package-lock.json
├── dist (初期状態では存在しない)
├── node_modules (初期状態では存在しない)
├── public
├── src
|   ├── App.css
|   ├── App.jsx
|   ├── index.css
|   ├── main.jsx
├── .eslintrc.json
├── .gitignore
├── index.html
└── vite.config.js
```

## ファイル説明

### index.html

クライアントのエントリーポイントです。
ここの、`<div id="root"></div>`にReactがマウントされますが、気にしなくても大丈夫です。

サイトのタイトルや、外部のCSSやJavaScriptの読み込みなどを行うときは`<head>`か`<body>`の末尾だけ編集してください。

### package.jsonとpackage-lock.json

npmのパッケージファイルです。npmのパッケージを使うために必要なファイルです。
他人の書いたプログラムを使う設定が書かれています。

基本的には、このファイルは変更しません。

ライブラリを追加するときは、`npm install`コマンドを使って追加してください。

### dist (初期状態では存在しない)

ビルド後のファイルが入っているフォルダです。
ビルドしたファイルは.gitignoreに追加されているので、Gitの管理対象外になっています。
(というのも、変更が多くその度にコミットすると、Gitの履歴が汚くなってしまうためです)

### node_modules (初期状態では存在しない)

package.json等に記述されているnpmのパッケージが入っているフォルダです。
npm installコマンドを実行すると、このフォルダが作成されます。

こちらのフォルダも.gitignoreに追加されているので、Gitの管理対象外になっています。

### public

このフォルダに入れたファイルは、サイトを立ち上げたときに、そのまま配信されます。

例えばpublicフォルダに`favicon.ico`を入れると、サイトを立ち上げたときに、`<URL>/favicon.ico`でアクセスできるようになります。

### src

ここにReactのソースコードを書いていきます。

#### App.css

App.jsxにかけるCSSを書くファイルです。App.jsxに書いたコンポーネントにだけ適用されます。
（ただし子コンポーネントがある場合は、子コンポーネントにも適用されます）

#### App.jsx

Reactのルートコンポーネントです。ここに、他のコンポーネントを組み合わせていきます。

#### index.css

index.htmlに読み込まれるCSSファイルです。ここに書いたCSSは、全てのページで適用されます。
bodyやCSS変数のスタイルを書くとき、ここが便利です。

#### main.jsx

Reactのエントリーポイントです。ここで、App.jsxを読み込んで、index.htmlの`<div id="root"></div>`にマウントしています。

### .eslintrc.json

ESLintの設定ファイルです。「静的解析」と調べると、何をしているかわかると思います。
コードの品質をプログラムでチェックしてくれるツールです。
（ここをいじるのは結構知識がいるので、放置で大丈夫です）

### .gitignore

Gitの管理対象外にするファイルを指定するファイルです。

### vite.config.js

Viteの設定ファイルです。Viteの設定を書いていきます。
Viteに関しては、[Viteのドキュメント](https://vitejs.dev/guide/)を参照してください。
（ここもフロントエンド開発に慣れてからいじるといいと思います）
