import axios from "axios";
import { useEffect, useState } from "react";

const Axios = () => {
    const[products , setProduct] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res =>setProduct(res.data))
        .catch(err => console.log(err.message))
    },[])
    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post("https://fakestoreapi.com/products",{
        title:e.target.title.value,
        }).then(res =>console.log(res))

    }
    return (
        <div>
            {
            products&& products.map((item,i)=>{
                return(
                    <div key={i}>
                        <p>{item?.title}</p>
                        <p>${item?.price}</p>
                        <p>{item?.description}</p>
                        <hr />
                    </div>
                )
            })
            }
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Enter Title:
                </label>
                <input type="text" id="name" name="title"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Axios
