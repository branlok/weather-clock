import React, {useState} from 'react'
import {StyledSettings, StyledConfigContainer} from '../../styles/StyledSettings';
import BackgroundSettings from './BackgroundSettings';
import InterfaceSettings from './InterfaceSettings';
import Misc from './Misc';
import Close from "../../styles/svg/close-svgrepo-com(1).svg"
import {setModified} from "../../store/general/generalActions";
import { connect } from "react-redux";
function Settings(props) {

    const [tab, setTab] = useState("background-tab");
    const [fetchReq, setFetchreq] = useState(false);

    return (
        <StyledSettings>
        <div className="title">
            <h1>Settings</h1>
        </div>
        <StyledConfigContainer tab={tab} modified={props.modified}>
            <nav>
               <ul>
                   <li className="background-tab" onClick={() => {setTab("background-tab")}}>Background</li>
                   <li className="photos-tab" onClick={() => {setTab("photos-tab")}}>Interface</li>
                   <li className="misc-tab" onClick={() => {setTab("misc-tab")}}>Misc</li>
                </ul> 
            </nav>
            <div className="container">
               {tab === "background-tab" && <BackgroundSettings setFetchreq={setFetchreq}/>}
               {tab === "photos-tab" && <InterfaceSettings setFetchreq={setFetchreq}/>}
                {tab === "misc-tab" && <Misc/>}
            </div>
        </StyledConfigContainer>
            <button className="reset-button">Reset All</button>
           <Close className="settings-button" onClick={() => {props.setShowSettings(false); fetchReq && props.setModified(true)}}></Close>
        </StyledSettings>
    )
}

const mapStateToProps = (state) => {
    return {
      modified: state.general.modified,
    };
  };
  
  //step 2
  const mapDispatchToProps = (dispatch) => {
    return {
      setModified: (val) => dispatch(setModified(val)),

    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Settings);