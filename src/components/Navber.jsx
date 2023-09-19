import { useState } from "react"
const Navber = ({})=>{
        const [text,setText] = useState('hello')

    return(
    <>
        <div>navbar
            <button onClick={()=>setText()}>Click</button>
            
            {text}
            
        </div>
        
    </>
    )
}

export default Navber