import './WeatherCard.scss';

const WeatherCard = ({data}) => {
  const weatherCardJsx = (<div className='weather-card'>
    <h3>{data.location.name},{data.location.country}</h3>
    <img src={data.current.condition.icon} alt={data.current.condition.text} /> 
    <h2>{data.current.temp_c} °C</h2>
    <h3>{data.current.condition.text}</h3>
    <h4>Max: {data.forecast.forecastday[0].day.maxtemp_c} °C</h4>
    <h4>Min: {data.forecast.forecastday[0].day.mintemp_c} °C</h4>
    {/* <h5>{data.forecast.forecastday[0].day.condition.text}</h5> */}
  </div>);


  return(
    <>
    {weatherCardJsx}
    </>
  );
}

export default WeatherCard;