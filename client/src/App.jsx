import { useState, useEffect } from "react";
import "./App.css";
import { SendIcon } from "./components/SendIcon";

const BACKEND_ENDPOINT = "http://localhost:8080";

function App() {
  const [posts, setPosts] = useState([]);

  // APIから投稿データを取得する関数
  const getPosts = async () => {
    // APIからデータを取得
    const res = await fetch(`${BACKEND_ENDPOINT}/api/posts`);
    // レスポンスをJSONとして解釈
    const data = await res.json();
    // postsステートを更新
    setPosts(data);
  };

  // 投稿を作成する関数
  const createPost = async (text) => {
    // APIに送るデータを作成
    const payload = {
      content: text,
    };
    // APIにデータを送信
    const res = await fetch(`${BACKEND_ENDPOINT}/api/posts`, {
      // POSTメソッドで送信
      method: "POST",
      headers: {
        // JSON形式でデータを送ることを指定
        "Content-Type": "application/json",
      },
      // JSON.stringifyでJSON文字列に変換
      // (文字列じゃないと送れないので、オブジェクトをJSON文字列に変換しています)
      body: JSON.stringify(payload),
    });
    // レスポンスをJSONとして解釈
    // （作成した投稿データが返ってくる）
    const data = await res.json();
    // postsステートを更新
    setPosts([...posts, data]);
  };

  // フォームの送信ボタンが押された時の処理
  const handleSubmit = (e) => {
    // ページ遷移を防ぐ（デフォルトでは、フォーム送信ボタンを押すとページが遷移してしまう）
    e.preventDefault();
    // フォームの内容を取得
    const content = e.target.elements.content.value;
    // 投稿を作成
    createPost(content);
    // フォームを空にする
    e.target.reset();
  };

  // useEffectを使って、このコンポーネントが描画された時に実行される処理を書く
  useEffect(() => {
    // APIから投稿データを取得
    getPosts();
  }, []);

  return (
    <main className="app-container">
      <h1>匿名掲示板（仮アプリ）</h1>
      <h2>新規投稿</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <textarea name="content" rows="5" className="post-form__textarea" />
        <button type="submit" className="post-form__submit-button">
          <SendIcon />
        </button>
      </form>
      <h2>投稿一覧</h2>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-list__item">
            <span className="post-list__item__content">{post.content}</span>
            <span className="post-list__item__date">
              {new Date(post.created_at).toLocaleString('ja-JP')}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
