import { Link, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react"
import BaseURL from '../BaseURL/baseURL'
import "./getFruits.css"


const BuyFruits = () => {

    // const navigate = useNavigate();

    const [fruitName, setFName] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    // const [BookData, setBookData] = useState();

    const createOrder = async (e) => {
        e.preventDefault();
        console.log(fruitName, name, quantity);

        let result = await fetch(`${BaseURL}/createOrder`, {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fruitName, name, quantity })
        });

        result = await result.json()

        if (result.status === false) {
            alert(result.message)
        } else {
            // console.log(result.data, "**");
            // setBookData(result.data)
            // navigate('/getBook')
            alert(result.message)

        }
    }




    return (
        <div className="link">

            <ul className="abc">
                <li id="a"><Link to='/'>Go to Home</Link></li>
            </ul>

            <form>
                <label>Fruits Name: </label>
                <input
                    type='text'
                    placeholder="Fruit Name"
                    value={fruitName}
                    onChange={(e) => setFName(e.target.value)}
                /><br />

                <label>Name: </label>
                <input
                    type='text'
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br />

                <label>Quantity: </label>
                <input
                    type='text'
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                /><br /><br />

                <button className="btn" type="submit"
                    onClick={createOrder}
                >Buy</button><br />

            </form>
        </div>


    )

}



export default BuyFruits