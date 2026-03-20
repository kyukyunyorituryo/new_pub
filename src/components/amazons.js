import * as React from "react";

const Amazons = ({ book = [] }) => {
  // 正規化＋重複削除
  const books = React.useMemo(() => {
    if (!Array.isArray(book)) return [];

    // 画像URLを補完した新しい配列を作る（propsは変更しない）
    const normalized = book.map((b) => {
      const image_m =
        b.ImageURL_m || b.ImageURL?.replace(/_SL500_/, "_SL160_") || "";
      const image_s =
        b.ImageURL_s || b.ImageURL?.replace(/_SL500_/, "_SL75_") || "";

      return {
        ...b,
        image_m,
        image_s,
      };
    });

    // ASINで重複削除
    return Array.from(
      new Map(normalized.map((b) => [b.Asin, b])).values()
    );
  }, [book]);

  if (books.length === 0) {
    return <div id="book">表示する商品がありません</div>;
  }

  return (
    <div id="book">
      {books.map((e) => {
        const releaseDate = e.ReleaseDate
          ? `${e.ReleaseDate.slice(0, 4)}/${e.ReleaseDate.slice(
              4,
              6
            )}/${e.ReleaseDate.slice(6, 8)}`
          : "不明";

        return (
          <div key={e.Asin}>
            <a
              className="amazon-card-container"
              target="_blank"
              rel="noopener noreferrer"
              href={e.URL}
            >
              <div className="amazon-card-body">
                <div className="amazon-card-title">{e.Title}</div>
                <div className="amazon-card-domain">
                  価格：{e.Price ?? "なし"}円、
                  ポイント：{e.Points ?? 0}、
                  {e.Contributor}、
                  出版社：{e.Publisher}、
                  カテゴリー：{e.Category}、
                  発売日：{releaseDate}
                </div>
              </div>

              {e.image_s && (
                <div className="amazon-card-image-container">
                  <img
                    className="amazon-card-image"
                    srcSet={`${e.image_s} 320w, ${e.image_m} 640w, ${e.ImageURL}`}
                    src={e.image_s}
                    sizes="(max-width:1280px) 50vw, 1280px"
                    loading="lazy"
                    alt={e.Title}
                  />
                </div>
              )}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Amazons;
