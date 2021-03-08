import Head from "next/head";
import {StyledBGContainer} from '../styles/StyledBGContainer';
import {StyledMainContainer} from '../styles/StyledMainContainer';
import Clock from '../components/Clock';
import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";


function usePosts() {
  return useQuery("posts", async () => {
    let data  = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getData`
    ).then((res) => res.json());
    return data;
  });
}

function arrangeImage(array) {
  let imageEle = array.map(item => <img key={item.id} src={item.urls.regular}></img>)
  return imageEle
}

export default function Home() {
  const response = usePosts();
  const [imageArray, setImageArray] = useState(false);

  useEffect(() => {
    if (response.isSuccess) {
      setImageArray(arrangeImage(response.data.unsplashData))
    }
    console.log(response.data)
  }, [response.status]);

  if (response.isSuccess && imageArray ) {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <StyledBGContainer viewTime={5} delay={5} imageArray={response.data.unsplashData} numOfImg={response.data.unsplashData.length}>
            {imageArray}
          </StyledBGContainer>
          <StyledMainContainer>
          <Clock/>
          </StyledMainContainer>
        </main>
        <footer></footer>
      </div>
    );
  } else {
    return <div>sd</div>;
  }
}

