import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Pagination from "../Pagination/Pagination";
import "./DisplayNews.css";
import { getApiPath } from "../../config/config";

const API_PATH = getApiPath();

function DisplayNews({ keyWord, page, setPage }) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let itemsPerPage = 10;
  let totalPages = Math.ceil(news?.totalResults / itemsPerPage);

  useEffect(() => {
    fetchNews(setNews, keyWord, setIsLoading, itemsPerPage, page);
  }, [keyWord, page, itemsPerPage]);

  const pageProps = { page, setPage, totalPages, news, itemsPerPage };

  return (
    <div className="result-container">
      <h2 className="search-result-status">{`Latest News ${
        keyWord ? "for '" + keyWord + "'" : " from UK"
      }: ${news?.totalResults || "0"} Result(s)`}</h2>
      <div className="result" style={{ display: "flex" }}>
        {news?.articles?.length === 0 && !isLoading && (
          <div className="no-result">
            Sorry. We couldn't find any news for your search.
          </div>
        )}

        <div className="news-items" id="news-items">
          {news?.articles?.length > 0 &&
            news?.articles?.map((item, idx) => {
              return <NewsItem news={item} key={`news_${idx + 1}`}></NewsItem>;
            })}
        </div>
      </div>

      {isLoading && <Loading></Loading>}

      <Pagination {...pageProps}></Pagination>
    </div>
  );
}

const Loading = () => {
  return (
    <div className="loading-div">
      <div className="loading"></div>
    </div>
  );
};

/*** This will fetch news either by Country or Keyword */
const fetchNews = (setNews, keyWord, setIsLoading, itemsPerPage, page) => {
  setIsLoading(true);
  let country = "gb";

  axios
    .get(
      `${API_PATH}/news/list_news?country=${country}&keyWord=${keyWord}&pageSize=${itemsPerPage}&page=${page}`
    )
    .then((response) => {
      setNews(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      setIsLoading(false);
    });
};

export default DisplayNews;
