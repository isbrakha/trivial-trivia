import {useState, useEffect} from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Gameplay = () => {
    const [trivia, setTrivia] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()
    const location = useLocation()
    const category = location.state?.category
    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)
    const fetchTrivia = async () => {
        try {
            const res = await fetch(`https://the-trivia-api.com/v2/questions?categories=${category}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const triviaData = await res.json()
            setTrivia(triviaData)
        } catch (err){
            console.log(err)
        }
        setIsLoading(false)
    }
    function shuffleArray(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

      const handleClick = (event)=> {
        if (event.target.innerText === trivia[count].correctAnswer){
            setScore(score+100)
        }
        if (count >= trivia.length-1){ 
             console.log('finished')
             navigate('/finish', {state: {score}})
             
        } else {
            setCount(count+1)
        }
        
      }
    useEffect(()=> {fetchTrivia()}, [])
    const loaded = () => {
        let answers = []
        answers.push(...trivia[count].incorrectAnswers)
        answers.push(trivia[count].correctAnswer)
        shuffleArray(answers)
        console.log(trivia)
       
        return(
            <section>
                <div className="question-wrapper">
                    <h2 className="question">{trivia[count].question.text}</h2>
                </div>
                <div className="answers-container">
                    <h3 className="answers" onClick={handleClick}>{answers[0]}</h3>
                    <h3 className="answers" onClick={handleClick}>{answers[1]}</h3>
                    <h3 className="answers" onClick={handleClick}>{answers[2]}</h3>
                    <h3 className="answers" onClick={handleClick}>{answers[3]}</h3>
                </div>
                <h2 className="score">Score: {score}</h2>
            </section>
        )
    }

    const loading = () => {
        return isLoading ? <h1>Loading.........</h1> : <h1>Error</h1>;
      };

    return !isLoading ? loaded() : loading()
}

export default Gameplay