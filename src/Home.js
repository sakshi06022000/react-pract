import { useEffect, useState } from "react"

const Home = () => {
    const HandleClick=(name)=>{
        titlechange("React")
        console.log(pagetitle)
    }
    // let pagetitle = 'hi'
    const[pagetitle,titlechange] =useState('hi')
    const[pageheader,headerchange] =useState('hi')
    const obj = {name :'abc' }
    useEffect(()=>{
        console.log('use Effect hooks');
    },
    [pagetitle,pageheader]
    )
    return ( 
        <div>
           <h1>{pagetitle}</h1>
           <h2>{obj.name}</h2>
           <button className="btn btn-primary" onClick={()=>HandleClick()}>Click here</button>
        </div>
     );
}
 
export default Home;