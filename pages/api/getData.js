// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {unsplash as placeholderJSON} from '../../jsonplaceholder/placeholder';

export default async (req, res) => {

  // Fetch data from weather API 
  const weather = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=toronto&appid=${process.env.WEATHER_KEY}`
  );
  const weatherData = await weather.json();


  //Fetch data from Unsplash API 

  const unsplashData = placeholderJSON;

  res.status(200).json({ weatherData, unsplashData })
  
}
