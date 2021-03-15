import Head from "next/head";
import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import Infographics from "../components/Infographics";
import BackgroundSlides from "../components/BackgroundSlides";
import { StyledButtonFS } from "../styles/StyledButtonFS";
import { connect } from "react-redux";
import { adjustDelayDuration } from "../store/settings/settingsActions";
import Settings from "../components/Settings";
import { useQueryClient, QueryObserver } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function usePosts(relevance, keyword) {
  const param = relevance !== "topic" ? relevance : keyword;
  return useQuery(
    param,
    async () => {
      let data = await fetch(`/api/custom/${param}`).then((res) => res.json());
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

function Home(props) {
  const handle = useFullScreenHandle();

  const response = usePosts(props.relevance, props.keyword);
  console.log(props.relevance);

  const [showSettings, setShowSettings] = useState(false);
  //console.log(response.data, response.status);

  return (
    <div>
      <Head>
        <title>Weather Clock App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
      </Head>

      <main className="main-wrapper">
        <FullScreen handle={handle}>
          {<BackgroundSlides showSettings={showSettings} />}
          {<Infographics setShowSettings={setShowSettings} handle={handle} />}
          {showSettings && (
            <Settings
              showSettings={showSettings}
              setShowSettings={setShowSettings}
            />
          )}
        </FullScreen>
      </main>

      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
