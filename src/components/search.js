import React, { useState } from 'react';

import Paginate from "../components/paginate"

const Search = ({ book, catetag, pubtag }) => {

  const [adult, setAdult] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selCate, setSelCate] = useState("");
  const [selPub, setSelPub] = useState("");
  // カテゴリーリスト
  const categories = catetag || ``;//["コミック","小説","少年コミック"]
  //アダルト除去


  //console.log(book)
  //console.log(removeadult)
  //出版社一覧
  const publishers = pubtag || ``;

const filteredList = book.filter(post => {
  let a = true, c = true, p = true, w = true;

  // アダルト除外
  if (!adult) {
    a = !post.Category.includes('アダルト') &&
        !post.Category.includes('HOTW_Test_アダルト');
  }

  // カテゴリー
  if (selCate !== "") {
    const cate = post.Category.split(',');
    c = cate.includes(selCate);
  }

  // 出版社
  if (selPub !== "") {
    const pub = post.Publisher.split(',');
    p = pub.includes(selPub);
  }

  // フリーキーワード
  if (inputValue !== "") {
    w = Object.values(post).some(
      item =>
        item &&
        item.toString().toUpperCase().includes(
          inputValue.toUpperCase()
        )
    );
  }

  return a && c && p && w;
});

  const selectCategory = (category) => {
    setSelCate(category)
  }
  const selectPublisher = (publisher) => {
    setSelPub(publisher)
  }
  const reset = (e) => {
    setSelPub("")
    setSelCate("")
    setInputValue("")
  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  //console.log(filteredList)

  return (
    <>
      {/* カテゴリー選択ボタン */}
      <div>
        <h4>クリックしてカテゴリーと出版社で絞り込みが可能</h4>
        {/*<details> <summary><strong>クリックしてカテゴリー選択ボタンの表示</strong></summary>*/}
        <p>カテゴリー：アダルト許可 <input type="checkbox" id="switch" checked={adult}onChange={() => setAdult(prev => !prev)} /><button className="categorybutton" onClick={() => reset()}>全て</button>
          {categories.map((category) => (
            <button className="categorybutton" onClick={() => selectCategory(category)}>{category}</button>
          ))}</p>{/*</details>*/}
        {/* 出版社選択ボタン */}
        <details> <summary><strong>クリックして出版社選択ボタンの表示</strong></summary>
          <p>出版社：
            <button className="categorybutton" onClick={() => reset()}>全て</button>
            {publishers.map((publisher) => (
              <button className="categorybutton" onClick={() => selectPublisher(publisher)}>{publisher}</button>
            ))}</p></details>
      </div>

      {/* フリーキーワード検索フォーム */}
      <div>
        <h4>フリーキーワード検索</h4>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>

      <Paginate itemsPerPage={20} items={filteredList} />
    </>
  );
}

export default Search
