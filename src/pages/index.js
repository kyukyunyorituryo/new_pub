import React, { useState, useEffect } from "react"
import { graphql, navigate } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/share"
import Search from "../components/search"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Index = ({
  data,
  location,
}) => {
// クエリ文字列を取得
//console.log(location.search)
var getQueryVars = function() {
	// return用の配列
	var vars = [];
	
	// クエリ文字列を取得して「&」で分割
	var query_list = location.search.substring(1).split('&');

	// 値取得用のテンポラリ変数
	var tmp_arr;
	
	// 分割したクエリ文字列の配列から、値を取り出す
	query_list.forEach( function(e, i, a) {
		tmp_arr = e.split('=');
		vars[ tmp_arr[0] ] = tmp_arr[1];
	})

	return vars;
}
  var query_vars = getQueryVars();
  // クエリ文字列dayを取得
  var id = query_vars['day'];

  const catesafe = data.site.siteMetadata.catesafe
  //現在の日付
  var date = new Date();
  var kyou= parseInt(date.toLocaleDateString('sv-SE').replaceAll('-', ''), 10).toString()
    if(id)kyou=id
  var value = kyou.substr( 0, 4 )+"-"+kyou.substr( 4, 2 )+"-"+kyou.substr( 6, 2 )
  var hiduke=kyou.substr( 0, 4 )+"年"+kyou.substr( 4, 2 )+"月"+kyou.substr( 6, 2 )
  var daytitle =hiduke+"日発売"
  const [loading, setLoading] = useState(true);
  const [bookData, setBookData] = useState([])
  const [cateTag, setCateTag] = useState([])
  const [pubTag, setPubtag] = useState([])
useEffect(() => {
  setLoading(true);

  fetch(`https://kyukyunyorituryo.github.io/new_pub/json/${kyou}.json`)
    .then(res => {
      if (!res.ok) return [];     // 404などは空配列扱い
      return res.json();
    })
    .then(resultData => {
      const book = Array.isArray(resultData) ? resultData : [];

      document.title = "「新刊チェック」" + daytitle;

      if (book.length === 0) {
        // 空データでも state を初期化して表示
        setBookData([]);
        setCateTag([]);
        setPubtag([]);
        setLoading(false);
        return;
      }

      const pubtag = [...new Set(book.map(b => b.Publisher))];

      const catetag = [...new Set(
        book.flatMap(b => b.Category.split(","))
      )].filter(x => catesafe.includes(x));

      setBookData(book);
      setCateTag(catetag);
      setPubtag(pubtag);
      setLoading(false);
    })
    .catch(err => {
      console.error("通信に失敗しました", err);
      // ❗ 失敗時もページは表示
      setBookData([]);
      setCateTag([]);
      setPubtag([]);
      setLoading(false);
    });
}, [id]);

  var freetitle = `${daytitle}の新刊一覧`
  //catetag.length=10
  const siteTitle = data.site.siteMetadata?.title || `Title`
  if (loading) {
    return <></>;
  }
  return (
    <>
      <Layout location={location} title={siteTitle}>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline"> {`「新刊チェック」` + freetitle}</h1>
            <p>{daytitle}の一覧ページ</p>
          </header>
          <p>カレンダーの日付をクリックで発売日を変更</p>
          <Calendar
       locale="ja-JP"
       value={value}
        onClickDay={(e) => navigate(`?day=${(parseInt(new Date(e).toLocaleDateString('sv-SE').replaceAll('-', ''), 10))}`)
        }
      />
<Search book={bookData} catetag={cateTag} pubtag={pubTag} />

{bookData.length === 0 && (
  <p>この日の新刊情報はありません。</p>
)}
          <hr />
          <Share
            title={freetitle}
            url={`${data.site.siteMetadata.siteUrl}${location.search}`}
          />
          <footer>
            <Bio />
          </footer>
        </article>
      </Layout>
    </>
  )
}
export const Head = ({ data }) => {
  return (
    <Seo
      title={`今日の新刊一覧`}
      ogpimage={'https://kyukyunyorituryo.github.io/new_pub/twitter.jpg'}
      description={`今日の新刊一覧、今日発売された本を一覧で表示します。`}
    />
  )
}

export default Index

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
//export const Head = () => <Seo title="kindle本セール品を一覧で表示する「kindleセールチェック」" />

export const pageQuery = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
      siteUrl
      catesafe
    }
  }
}
`
