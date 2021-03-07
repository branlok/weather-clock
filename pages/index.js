import Head from "next/head";
import styled from "styled-components";
import {unsplash} from "../jsonplaceholder/placeholder";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: ${props => props.bg ? `url(${props.bg})` : null};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;

`;

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=toronto&appid=8d1743747c31891715f9630797254e86`
  );
  const weatherData = await res.json();
  const unsplashData = unsplash;


  // Pass data to the page via props
  return { props: { weatherData, unsplashData } };
}

export default function Home({ weatherData, unsplashData }) {
  
  
  // console.log(unsplashData);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <StyledContainer bg={unsplashData[2].urls.full}>{weatherData.weather[0].main}</StyledContainer>
      </main>

      <footer></footer>
    </div>
  );
}
