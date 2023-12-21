import { useNavigate, useLocation } from "react-router-dom";


const Category = () => {
    const location = useLocation()
    const difficulty = location.state?.difficulty
    const navigate = useNavigate()
    const handleClick = (category) => {
        navigate('/play', {state: {category, difficulty}})
    }

    return (
        <section className="button-grandpa">
            <div className="buttons-wrapper-left" onClick={() => handleClick("history")}>
                <h2 className= "buttons">History</h2>
            </div>
            <div className="buttons-wrapper" onClick={() => handleClick("sports_and_leisure")}>
                <h2 className= "buttons">Sports and Leisure</h2>
            </div>
            <div className="buttons-wrapper-left" onClick={() => handleClick("music")}>
                <h2 className= "buttons">Music</h2>
            </div>
            <div className="buttons-wrapper" onClick={() => handleClick("film_and_tv")}>
                <h2 className= "buttons">Film and TV</h2>
            </div>
            <div className="buttons-wrapper-left" onClick={() => handleClick("arts_and_literature")}>
                <h2 className= "buttons">Arts and Literature</h2>
            </div>
            <div className="buttons-wrapper" onClick={() => handleClick("society_and_culture")}>
                <h2 className= "buttons">Society and Culture</h2>
            </div>
            <div className="buttons-wrapper-left" onClick={() => handleClick("science")}>
                <h2 className= "buttons">Science</h2>
            </div>
            <div className="buttons-wrapper" onClick={() => handleClick("geography")}>
                <h2 className= "buttons">Geography</h2>
            </div>
            <div className="buttons-wrapper-left" onClick={() => handleClick("food_and_drink")}>
                <h2 className= "buttons">Food and Drink</h2>
            </div>
            <div className="buttons-wrapper" onClick={() => handleClick("general_knowledge")}>
                <h2 className= "buttons">General Knowledge</h2>
            </div>
        </section>
    )

}

export default Category