// import { emit } from "process"
import { useState } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate} from "react-router-dom";

const Registration = () => {
    const [id, idchange] = useState('')
    const [name, namechange] = useState('')
    const [role, rolechange] = useState('')
    const [email, emailchange] = useState('')
    const [password, pwchange] = useState('')
    const [mobile, mobilechange] = useState('')
    const [address, addresschange] = useState('')
    // const [contact, contactchange] = useState('')
    const [isActive, isActivechange] = useState(false)


    const regobj = { id, name, role, email, password, mobile, address, isActive }

    let validate = true;

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        functionvalidate();
        if (validate) {
            fetch("http://localhost:8000/register", {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(regobj)
            }).then(resp => {
                toast.success("Registered succesfully")
                navigate('/login')
            }).catch((err) => {
                console.log(err.message);
            })
        }
        else {
            toast.warning("Please fill out all fields")
        }
    }

    const functionvalidate = () => {
        if (id.length === 0) {
            validate = false;
        }if (name.length === 0) {
            validate = false;
        } if (email.length === 0) {
            validate = false;
        } if (password.length === 0) {
            validate = false;
        }
    }

    const validateemail=(emailvalue)=>{
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailvalue)){
            
        }else{
        toast.warning("Please enter valid email")
        }
    }
    
    return (
        <div>
            <div>
                <form className="container" onSubmit={handlesubmit}>
                    <div className="row">
                        <div className="offset-lg-3 col-lg-8">
                            <div className="card">
                                <div className="card header">
                                    <h2>Registration</h2>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>UserName<span className="text-danger">*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Name<span className="text-danger">*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Email<span className="text-danger">*</span></label>
                                        <input value={email} onBlur={e=>{validateemail(e.target.value)}}onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Password<span className="text-danger">*</span></label>
                                        <input value={password} type="password" onChange={e => pwchange(e.target.value)} className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile<span className="text-danger">*</span></label>
                                        <input value={mobile} onChange={e => mobilechange(e.target.value)} className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Address<span className="text-danger">*</span></label>
                                        <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
                                    </div>


                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success" type="submit" >Register</button>
                                    <Link className="btn btn-primary" to="/login">Already Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;