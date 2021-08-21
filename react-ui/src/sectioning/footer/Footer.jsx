import "./footer.css"

const currentYear = new Date().getFullYear()

function Footer() {

    return (
    <footer>
    <p>Copyright {currentYear} </p>
    </footer>
    )
}

export default Footer