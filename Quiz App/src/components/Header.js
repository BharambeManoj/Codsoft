
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
        <Link to = "/" className="title">
        QuizFlare
        </Link>
        <hr className="divider" style={{height:4}} />
    </div>
  )
}

export default Header