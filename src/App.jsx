import './App.scss';
import { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard/WeatherCard';
import ToDoList from './components/ToDoList/ToDoList';
import NewsCard from './components/NewsCard/NewsCard';

const App = () => {
  const [lat, setLat] = useState(51.6203);
  const [long, setLong] = useState(-0.2868);
  const [data, setData] = useState({});
  const [allNews, setAllNews] = useState({});
  
  const date = new Date();
  const currentHour = date.getHours();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;

  const greeting = currentHour >= 0 && currentHour < 12 ? "Good Morning!" 
                  : currentHour >= 12 && currentHour < 17 ? "Good Afternoon!" : "Good Evening!";

useEffect(() => {
  navigator.geolocation.getCurrentPosition(position => {
    setLat(position.coords.latitude); 
    setLong(position.coords.longitude);
  }) }, [])
                
useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${long}&days=1`)
    .then(response => response.json())
      .then(jsonResponse => setData(jsonResponse))
      .catch(err => console.log(err))
  }, [lat, long])
        

  useEffect(() => {
      fetch("https://newsapi.org/v2/everything?domains=bbc.co.uk&pageSize=6&apiKey=181f1a96f5aa436faddfda5e5ebbd7e9")
      .then(response => response.json())
      .then(jsonResponse => setAllNews(jsonResponse))
      .catch(err => console.log(err))
  }, [])  
    
  
  return (
    <div className='app'>
      <header>
        <h2>{currentDay}</h2>
        <h1>{greeting}</h1>
      </header> 
      
      <main>
        <section className="section-1">
          {data.location && <WeatherCard data={data} />}
          <ToDoList />
        </section> 
        
        <section className="news-section">
          <h2>What's happening around the world?</h2>
          {allNews.articles && <NewsCard allNews={allNews.articles} />}
        </section>
      
      </main>
  </div>
  );
}

export default App;








