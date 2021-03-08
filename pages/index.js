import Head from "next/head";
import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import Infographics from '../components/Infographics';
import BackgroundSlides from '../components/BackgroundSlides';
import {StyledLoadingScreen} from '../styles/StyledLoadingScreen';
import { connect } from "react-redux";
import { adjustDelayDuration } from "../store/settings/settingsActions";

function usePosts() {
  return useQuery("images", async () => {
    let data = await fetch(`/api/popularImg`).then((res) => res.json());
    return data;
  });
}

function Home(props) {
  const response = usePosts();
  if (response.isSuccess) {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <BackgroundSlides/>
          {!props.loadingImages && <Infographics/>}
        </main>
      </div>
    );
  } else {
    return <StyledLoadingScreen>Getting Weather</StyledLoadingScreen>; 
  }
}

//step 1
const mapStateToProps = (state) => {
  return {
    delay: state.settings.delay,
    loadingImages: state.general.loadingImages,
  };
};

//step 2
const mapDispatchToProps = (dispatch) => {
  return {
    adjustDelayDuration: () => dispatch(adjustDelayDuration()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home)