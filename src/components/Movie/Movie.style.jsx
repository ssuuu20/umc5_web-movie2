import styled from 'styled-components';
// styled-components기능 활성화
import { createGlobalStyle } from 'styled-components';
// html, body 태그를 styled-components로 생성하기위한 기능 활성화

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #22254b;
        font-family: 'Gothic A1', sans-serif;
    }
`;
export default GlobalStyle;
// index.js에 위치

export const App_container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #22254b;
`;
// App.js에 위치

// 아래 코드는 모두 Movie.jsx에 위치
export const Movie_container = styled.div`
    position: relative;
    width: 130px;
    height: 235px;
    margin: 16px 16px 5px 16px;
    background-color: #373b69;
    color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.1);
`;

export const IMG = styled.img`
    max-width: 100%;
`;

export const Movie_info = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 9px;
`;
export const Movie_title = styled.h4`
    margin: -15px 5px 0 -12px; 
    font-weight: 400;

`;
export const Movie_vote = styled.span`
    font-weight: 400;
    margin: -15px -12px 0 0;
`;

export const Movie_detail = styled.div`
    position: relative;
    z-index: 1; 
    width: 130px;
    height: 235px;
    margin: -240px 0px 0px 16px;
    background-color: rgba(0,0,0,0.7);
    color: white;
    font-size: 9px;
    overflow: auto;
    &::-webkit-scrollbar{
        display: none; 
    }
`;
//styled component에서 webkit 기능을 사용하는 방법

export const Movie_story = styled.div`
    margin: 10px 10px 10px 10px;
`;