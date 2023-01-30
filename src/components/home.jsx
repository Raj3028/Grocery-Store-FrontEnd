import { Link } from "react-router-dom"
import "./home.css"


const HomePage = () => {

    return (
        <div className="link">

            <ul className="abc">
                <li id="a"><Link to="/getFruits" >Available Fruits</Link></li>
                <li id="a"><Link to='/BuyFruits'>I want to Buy</Link></li>
                <li id="a"><Link to='/MyOrders'>My Orders</Link></li>
            </ul>
        </div>
    )
}

export default HomePage