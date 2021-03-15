export default async (req, res) => {

  const { id } = req.query
  


  const unsplash = await fetch(
    `https://api.unsplash.com/search/photos?query=${id}&per_page=20&client_id=${process.env.UNSPLASH_KEY}`
  );
  const unsplashData = await unsplash.json();

  const weather = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=toronto&appid=${process.env.WEATHER_KEY}`
  );
  const weatherData = await weather.json();
  console.log(unsplashData.results);
  res.status(200).json({weatherData, unsplashData: unsplashData.results })
  
}
