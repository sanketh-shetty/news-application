/** Header Component */
import { useRef } from "react";
import "./Header.css";

export default function Header({ keyWord, handleSetKeyword, setPage }) {
  const myRef = useRef(null);

  const handleOnSearchClick = (e, value) => {
    if (value) {
      setPage(1);
      handleSetKeyword(value);
    } else {
      alert("Please enter the search keyword.");
      myRef.current.focus();
    }
  };

  const searchKeywords = ["Crypto", "Olympics", "Afghanistan"];

  return (
    <div className="header">
      <div className="brand">News App</div>
      <span className="seperator"></span>
      <span className="link">
        <span
          onClick={(e) => handleOnSearchClick(e, "")}
          title="Click here to view the latest news from the UK"
        >
          View latest news from the UK
        </span>
      </span>
      <span style={{ padding: "0 20px", fontSize: "20px" }}>OR</span>
      <span>
        <input
          defaultValue={keyWord}
          ref={myRef}
          placeholder="What do you want to search ? (Ex: Bitcoin)"
          title="Search here for topics"
        ></input>{" "}
        <button
          onClick={(e) => handleOnSearchClick(e, myRef.current?.value || "")}
        >
          Search for news
        </button>
      </span>

      <div className="keywords">
        Trending Topics :
        {searchKeywords.map((item, idx) => {
          return (
            <span key={idx} onClick={(e) => handleOnSearchClick(e, item)}>{item}</span>
          );
        })}
      </div>
    </div>
  );
}
