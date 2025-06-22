import { useState, useEffect } from "react"
import './App.css'




const Card = ({title}) =>{
    const [hasLiked, setHasLiked] = useState(false);
    const [count, setCount] = useState(0);

    useEffect( () =>{
        console.log(`${title} has been liked: ${hasLiked}`);
    }, [hasLiked]);


    return(
        <div className="card" onClick={() =>setCount((prevState) =>prevState + 1)}>
            <h2>{title} <br/> {count || null}</h2>

            <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked? 'Liked': 'Like'}
            </button>
        </div>
    )
}
const App = () => {

    return (
        <div className="card-container" >
            <Card title="Star Wars" />
            <Card title="Avata" />
            <Card title ="The Lion King" />
        </div>

    )
}

export default App
