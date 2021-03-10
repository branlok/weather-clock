import Head from "next/head";
import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import Infographics from '../components/Infographics';
import BackgroundSlides from '../components/BackgroundSlides';
import {StyledLoadingScreen} from '../styles/StyledLoadingScreen';
import { connect } from "react-redux";
import { adjustDelayDuration } from "../store/settings/settingsActions";
import Settings from "../components/Settings";

function usePosts(relevance) {
  return useQuery(relevance, async () => {
    let data = await fetch(`/api/popularImg`).then((res) => res.json());
    return data;
  });
}

function Home(props) {
  const response = usePosts(props.relevance, props.keyword);
  const [showSettings, setShowSettings] = useState(false)
  
  if (response.isSuccess) {
    return (
      <div>
        <Head>
          <title>Weather Clock App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="main-wrapper">
          {!showSettings && <BackgroundSlides/>}
          {!props.loadingImages && !props.modified && <Infographics setShowSettings={setShowSettings}/>}
          {showSettings && <Settings showSettings={showSettings} setShowSettings={setShowSettings}/>}
        </main>
      </div>
    );
  } else {
    return <StyledLoadingScreen>Getting Weather and getting Data</StyledLoadingScreen>; 
  }
}

//step 1
const mapStateToProps = (state) => {
  return {
    delay: state.settings.delay,
    relevance: state.settings.relevance,
    keyword: state.settings.keyword,
    loadingImages: state.general.loadingImages,
    modified: state.general.modified,
    
  };
};

//step 2
const mapDispatchToProps = (dispatch) => {
  return {
    adjustDelayDuration: () => dispatch(adjustDelayDuration()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home)