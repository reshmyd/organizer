import './NewsCard.scss';

const NewsCard = ({allNews}) => {
  const newsJsx = allNews.map((elem, i) => (
      <div key={i + 1} className="news-card">
      <img src={elem.urlToImage} alt="" />
      <a href={elem.url} target="_blank"><h4>{elem.title}</h4></a>
      {/* <p>{elem.description}</p> */}
      </div>
   ))
  return (
  <div className="news-container">
   {newsJsx}
  </div>
  );
};

export default NewsCard;
