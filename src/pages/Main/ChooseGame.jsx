import { Link } from "react-router-dom"
const ChooseGame = () => {

    return (
      <section>
        <div className="game-container">
          <Link to = '/difficulty' className="gamelink"><h1 className="game">Start Game</h1></Link>
        </div>
      </section>
    )
}

export default ChooseGame