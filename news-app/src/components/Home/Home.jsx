import { useRef, useState } from "react";
import DisplayNews from "../display-news/DisplayNews";
import "../display-news/DisplayNews.css";
import Header from "../Header/Header";

function Home() {
  let [keyWord, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  useRef(() => {
    document.title = "News App";
  }, []);

  const handleSetKeyword = (value) => {
    setKeyword(value);
  };

  return (
    <div className="home">
      <Header
        keyWord={keyWord}
        handleSetKeyword={handleSetKeyword}
        setPage={setPage}
      ></Header>
      <DisplayNews
        keyWord={keyWord}
        page={page}
        setPage={setPage}
      ></DisplayNews>
    </div>
  );
}

export default Home;
