import styled, { keyframes, css } from "styled-components";

export const StyledWeatherInformation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    background-color: rgba(0,0,0,0.9);
    padding: 1.5vw 7vw;
    .temperature {
        font-size: 5vw;
        height: calc(100% - 20px);
        text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
        margin-bottom: 1vw;
        .superscript {
            font-size: 2vw;
        }
    }
    .description {
        font-size: 18px;
        height: 20px;
    }
`;