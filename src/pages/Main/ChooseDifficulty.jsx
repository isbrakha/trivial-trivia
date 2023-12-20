import { useNavigate } from "react-router-dom";

const Difficulty = () => {
    const navigate = useNavigate()
    const handleClick = (difficulty) => {
        navigate('/category', {state: {difficulty}})
    }

    return (
        <section className="diff-grandpa">
            <div className="diff-wrapper" onClick={() => handleClick("easy")}>
                <h2 className= "diff">Easy</h2>
            </div>
            <div className="diff-wrapper" onClick={() => handleClick("medium")}>
                <h2 className= "diff">Medium</h2>
            </div>
            <div className="diff-wrapper" onClick={() => handleClick("Hard")}>
                <h2 className= "diff">Hard</h2>
            </div>
        </section>
    )

}

export default Difficulty