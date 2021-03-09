import React, {useState} from 'react'
import {StyledSettings, StyledConfigContainer} from '../../styles/StyledSettings';
import BackgroundSettings from './BackgroundSettings';
function Settings(props) {

    const [tab, setTab] = useState("background-tab");

    return (
        <StyledSettings>
        <div className="title">
            <h1>Settings</h1>
        </div>
        <StyledConfigContainer tab={tab}>
            <nav>
               <ul>
                   <li className="background-tab" onClick={() => {setTab("background-tab")}}>Background</li>
                   <li className="photos-tab" onClick={() => {setTab("photos-tab")}}>Photos</li>
                   <li className="misc-tab" onClick={() => {setTab("misc-tab")}}>Misc</li>
                </ul> 
            </nav>
            <div className="container">
                <BackgroundSettings/>
            </div>
        </StyledConfigContainer>

           <img className="settings-button" src="/settings-svgrepo-com-2.svg" onClick={() => props.setShowSettings(false)}></img>
        </StyledSettings>
    )
}

export default Settings
