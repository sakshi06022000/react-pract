// const ContactList = (blog) => {
//     return (  
//         <div>
//             {/* <h1>Welcome to Contact Page</h1> */}
//             <h1>{blog.title}</h1>
//             <h2>Email:{blog.email}</h2>
//             <h3>Address:{blog.addobj.address1}</h3>
//             <h3>Address:{blog.addobj.address2}</h3>
//         </div>
//     );
// }

// export default ContactList;
//another way to send data
const ContactList = ({ title, email, addobj, telist,removetech }) => {
    
    return (
        <div>
            {/* <h1>Welcome to Contact Page</h1> */}
            <h1>{title}</h1>
            <h2>Email:{email}</h2>
            <h3>Address:{addobj.address1}</h3>
            <h3>Address:{addobj.address2}</h3>
            <div>
                <h4>TechList</h4>
                {
                    telist.map((item) => (
                        <div key={item.id}>
                            <h5>Tech Id : {item.id}</h5>
                            <h6>Tech Name : {item.name}</h6>
                            <h6>tech age : {item.age}</h6>
                            <button onClick={()=>removetech(item.id)} className="btn btn-danger">Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ContactList;