import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
    const navigate = useNavigate()
    const handleClick = (category) => {
        navigate('/play', {state: {category}})
    }

    return (
        <section>
            <div onClick={() => handleClick("history")}>
                <h2>History</h2>
            </div>
            <div onClick={() => handleClick("sports_and_leisure")}>
                <h2>Sports and Leisure</h2>
            </div>
            <div onClick={() => handleClick("music")}>
                <h2>Music</h2>
            </div>
            <div onClick={() => handleClick("film_and_tv")}>
                <h2>Film and TV</h2>
            </div>
            <div onClick={() => handleClick("arts_and_literature")}>
                <h2>Arts and Literature</h2>
            </div>
            <div onClick={() => handleClick("society_and_culture")}>
                <h2>Society and Culture</h2>
            </div>
            <div onClick={() => handleClick("science")}>
                <h2>Science</h2>
            </div>
            <div onClick={() => handleClick("geography")}>
                <h2>Geography</h2>
            </div>
            <div onClick={() => handleClick("food_and_drink")}>
                <h2>Food and Drink</h2>
            </div>
            <div onClick={() => handleClick("general_knowledge")}>
                <h2>General Knowledge</h2>
            </div>
        </section>
    )

}

export default Category