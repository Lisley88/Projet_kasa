import React from "react";
import ratingStar from "../images/rating-star.svg";
import greyStar from "../images/rating-greystar.svg";

function Rating({ rating }) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<img src={ratingStar} alt="" key={i} />);
    }
    for (let i = rating; i < 5; i++) {
        stars.push(<img src={greyStar} alt="" key={i} />);
    }
    return <div>{stars}</div>;
}


export default Rating;