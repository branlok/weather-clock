export default async (req, res) => {

  const { id } = req.query
  const unsplash = await fetch(
    `https://api.unsplash.com/search/photos?query=${id}&page=2&client_id=${process.env.UNSPLASH_KEY}`
  );
  const unsplashData = await unsplash.json();
  
  res.status(200).json({ unsplashData: unsplashData.results })
  
}
