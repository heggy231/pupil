import "./footer.css"
import { NavLink } from "react-router-dom"

const currentYear = new Date().getFullYear()

function Footer() {

    return (
    <footer>
      <div>
        <NavLink to="/become">Become a Mentor </NavLink>
        <p>Copyright {currentYear} </p>
      </div>
    </footer>
    )
}

export default Footer