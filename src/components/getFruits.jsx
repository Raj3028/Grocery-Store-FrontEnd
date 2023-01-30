import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import BaseURL from '../BaseURL/baseURL'
import "./getFruits.css"


const GetFruits = () => {

    let [fruitsData, setData] = useState([])
    useEffect(() => { getFruits() }, [])

    const getFruits = async () => {

        let result = await fetch(`${BaseURL}/getFruitData`)

        result = await result.json()

        if (result.status === false) {
            alert(result.message)
        } else {
            setData(result.data)
        }
    }

    return (
        <div className="link">

            <ul className="abc">
                <li id="a"><Link to='/'>Go to Home</Link></li>
            </ul>

            <table className="table">
                <thead>
                    <tr>
                        <th className="b">Fruits Name</th>
                        <th className="b">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {fruitsData.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td className="c">{val.fruitName}</td>
                                <td className="c">{val.price}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}



export default GetFruits