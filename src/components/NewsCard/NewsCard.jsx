import './NewsCard.scss';

const NewsCard = ({allNews}) => {
  const filteredAllNews = allNews.filter(elem => elem.image_url)
  const newsJsx = filteredAllNews.map((elem, i) => (
      <div key={i + 1} className="news-card">
      <img src={elem.image_url} alt="" />
      <a href={elem.link} target="_blank"><h4>{elem.title}</h4></a>
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
