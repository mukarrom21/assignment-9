import { useEffect, useState } from "react";

const useLaptop = () => {
    const [laptops, setLaptops] = useState([])
    useEffect(()=>{
        fetch('productReview.json')
        .then(res=>res.json())
        .then(data=>setLaptops(data))
    },[])
    return [laptops, setLaptops]
};

export default useLaptop;