import React from "react";
import ratingStar from "../images/rating-star.svg";
import greyStar from "../images/rating-greystar.svg";
import '../styles/rating.scss';

function Rating({ rating }) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<img className='rating__img' src={ratingStar} alt="Rating star" key={i} />);
    }
    for (let i = rating; i < 5; i++) {
        stars.push(<img className='rating__img' src={greyStar} alt="Grey star" key={i} />);
    }
    return <div className='rating'>{stars}</div>;
}


export default Rating;