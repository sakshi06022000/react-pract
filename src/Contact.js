import { useState } from "react";
import ContactList from "./ContactList";

const Contact = () => {
    // debugg er;
    let email="Abc@gmail.com"
    let addressobj = {address1:'new street',address2 : 'chennai'} 

    const [techlist,listupdate]=useState([ {id:1 , name:'ABC',age:25},
    {id:2, name:'ABC',age:75},
    {id:3 , name:'ABC',age:95}])

    const removetech=(id)=>{
        console.log(id);
        const newlist = techlist.filter(item=>item.id!=id)
        listupdate(newlist);
    }
    return (
        <div>
            
           <ContactList title= "Welcome to Contact Page" email={email} addobj= {addressobj} telist= {techlist} removetech={removetech}></ContactList>
        </div>

    );
}

export default Contact;