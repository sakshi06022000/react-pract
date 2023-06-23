import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify'

const EditCustomer = () => {

    const [id, idchange] = useState(0);
    const [name, namechange] = useState('')
    const [area, areachange] = useState('')
    const [contact, contactchange] = useState('')
    const{code} =useParams();

    const navigate = useNavigate();

useEffect(()=>{
    console.log(code)

    fetch(`http://localhost:8000/customer/` + code).then(res=>{
        return res.json();
    }).then(res=>{
        idchange(res.id);
        namechange(res.name);
        areachange(res.area);
        contactchange(res.contact);
    }).catch((err)=>{
        console.log(err.message)
    })
},[])

    const handlesubmit = (e) => {
        e.preventDefault();
        // debugger
        const custobj = { id,name, area, contact }
        console.log(custobj)

        fetch(`http://localhost:8000/customer/`+id, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(custobj)
        }).then(res => {
            toast.success(`Updated Succesfully`)
            navigate('/customer')

        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>
            <form className="container" onSubmit={(e) => {
                // e.preventdefault();
                handlesubmit(e)
            }}>
                <div className="row">
                    <div className="offset-lg-3 col-lg-8">
                        <div className="card">
                            <div className="card header">
                                <h2>Edit Customer</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>CODE</label>
                                    <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Area</label>
                                    <select value={area} onChange={e => areachange(e.target.value)} className="form-control">
                                        <option value="/">Select</option>
                                        <option value="Chennai">Chennai</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Bangalore">Bangalore</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Delhi">Delhi</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Contact</label>
                                    <input value={contact} onChange={e => contactchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditCustomer;