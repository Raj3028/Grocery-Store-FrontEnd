import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import BaseURL from '../BaseURL/baseURL'
import "./getAllOrder.css"


const GetOrder = () => {

    let [name, SetName] = useState([])
    let [OrdersData, setOrderData] = useState([])


    const getOrders = async (e) => {
        e.preventDefault();

        let result = await fetch(`${BaseURL}/getOrder`, {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        })

        result = await result.json()

        if (result.status === false) {
            alert(result.message)
        } else {
            setOrderData(result.data)
            console.log(OrdersData)
        }
    }



    return (
        <div className="link">

            <ul className="abc">
                <li id="a"><Link to='/'>Go to Home</Link></li>
            </ul>


            <div>
                <form className="search">
                    <input
                        type='text'
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => SetName(e.target.value)}
                    /><br />

                    <button className="btn" type="submit"
                        onClick={getOrders}
                    >Search</button><br />

                </form>

            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th className="d">Order ID</th>
                        <th className="b">Fruits Name</th>
                        <th className="b">Quantity</th>
                        <th className="b">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {OrdersData.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td className="e">{val._id}</td>
                                <td className="c">{val.fruitName}</td>
                                <td className="c">{val.quantity}</td>
                                <td className="c">{val.totalPrice}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}



export default GetOrder