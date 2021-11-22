import "../Pagination/Pagination.css";

function Pagination({ page, setPage, totalPages, news, itemsPerPage }) {
  if (!news || news.length === 0) {
    return <div></div>;
  }

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    if (page * itemsPerPage >= 100)
      alert(
        "Unable to goto next page. Newsapi developer accounts are limited to a max of 100 results"
      );
    else if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="pagination-container">
      {
        <span
          className={page > 1 ? "page" : "page disabled"}
          onClick={(e) => prevPage()}
        >
          &lt; Prev. Page
        </span>
      }
      {
        <span className="current-page">
          Current Page: {`${page}/${totalPages}`}
        </span>
      }
      {
        <span
          className={page < totalPages ? "page" : "page disabled"}
          onClick={(e) => nextPage()}
        >
          Next Page &gt;
        </span>
      }
    </div>
  );
}

export default Pagination;
