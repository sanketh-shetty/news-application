import "./NewsItem.css";
import defaultImg from '../../assets/img/Untitled.png'; 

function NewsItem({ news }) {
  let description = news?.description?.toString();

  //const defaultImg = '../../../assets/img/untitled.png'; //https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:720/p:16x9/news_1920x1080.png

  return (
    <a href={news.url} target="_blank" rel="noreferrer" className="a">
      <div className="news-item">
        <img src={news.urlToImage || defaultImg } width="200" height="100" alt={news.title}/>
        <span className="news-source-name">{`${news.source.name}`}</span>
        <span className="btn-read-article">Read Full Article</span>
        <h4 className="news-link">{`${news.title}`}</h4>
        
        <p className="news-description">
           {description}
        </p>
      </div>
    </a>
  );
}

export default NewsItem;
