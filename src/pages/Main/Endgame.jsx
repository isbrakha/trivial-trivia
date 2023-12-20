import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Endgame = (props) => {
    const location = useLocation();
    const score = location.state?.score;

    let endgameMessage;

    if (score === 1000) {
        endgameMessage = "Perfect score! You are a trivia master!";
    } else if (score >= 700) {
        endgameMessage = "Great job! You scored very high!";
    } else if (score >= 500) {
        endgameMessage = "Nice effort! You have a good grasp of trivia.";
    } else {
        endgameMessage = "You suck!";
    }

    return (
        <div>
            <h1>Game Over</h1>
            <h2>Your Score: {score}</h2>
            <p>{endgameMessage}</p>
            <Link to ='/category'>Play again</Link>
        </div>
    );
};

export default Endgame;
