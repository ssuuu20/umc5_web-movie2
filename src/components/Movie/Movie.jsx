import React from "react";
import {useState} from "react";
import * as A from './Movie.style';
// Movie.style 파일을 A라는 별칭으로 간단하게 호출하기 위한 코드

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({title, poster_path, vote_average, overview}){
    const [_style, setStyle] = useState({display: 'none'})
    return (
        <div 
        onMouseEnter={e => {
            setStyle({display: 'block'})
        }}
        onMouseLeave={e => {
            setStyle({display: 'none'})
        }}
        >
            <A.Movie_container>
                <A.IMG src={IMG_BASE_URL + poster_path} alt="영화포스터"/>
                <A.Movie_info>
                    <A.Movie_title>{title}</A.Movie_title>
                    <A.Movie_vote>{vote_average}</A.Movie_vote>
                </A.Movie_info>
            </A.Movie_container>
            <A.Movie_detail style={_style}>
                <A.Movie_story>
                    <h4>{title}</h4>
                    <span>{overview}</span>
                </A.Movie_story>
            </A.Movie_detail>
        </div>
    ) 
}