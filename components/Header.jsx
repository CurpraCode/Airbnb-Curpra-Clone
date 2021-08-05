import airbnblogo from "../public/images/airbnblogo.png"

function Header() {
    return (
        <div>
            <h1>Tailwind with next.js</h1>
            <img src={airbnblogo} alt="picture"/>
        </div>
    )
}

export default Header
