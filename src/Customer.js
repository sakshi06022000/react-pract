import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
// const Customer = () => {
//     const {name,code} =useParams();
//     useEffect(()=>{
//         console.log(name + 'code : ' +code);
//     }, []);
//     const navigate = useNavigate();

//     const clickevent =(()=>{
//         navigate(-1);
//     })
//     return ( 
//         <>
//         <h2>Customer Listing</h2>
//       <button onClick={clickevent}> Back </button>
//       </>
//      );
// }


// export default Customer;


const Customer = () => {

    const [custlist, cusupdate] = useState([])
    const navigate=useNavigate()

    const handleremove = (code) => {
        if (window.confirm(`Do you want to remove customer?`)) {
            fetch(`http://localhost:8000/customer/` + code, {
                method: "DELETE"
            }).then(res => {
                toast.success(`Removed Succesfully`)
                navigate(0)
            }).catch((err) => {
                console.log(err.message);
            });
        }
    }

    useEffect(() => {
        fetch(`http://localhost:8000/customer`).then(res => {
            return res.json();
        }).then(resp => {
            console.log(resp);
            cusupdate(resp);
        }).catch((err) => {
            console.log(err.message);
        });
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2>Customer Listing</h2>
                </div>
                <div className="card-body">
                    <div>
                        <Link classname="btn btn-success" to="/customer/create">AddCustomer (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Area</td>
                                <td>Contact</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                custlist.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.area}</td>
                                        <td>{item.contact}</td>
                                        <td>
                                            <Link to={"/customer/edit/" + item.id} className="btn btn-primary">Edit</Link>
                                            <a onClick={() => { handleremove(item.id) }} className="btn btn-danger">Remove</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
}

export default Customer;

