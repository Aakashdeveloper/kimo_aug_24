import React,{useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const order = "http://localhost:6120/orders"

const PlaceOrder = () => {

    let params = useParams()
    let navigate = useNavigate()

    const initialValue = {
        id:Math.floor(Math.random()*1000),
        rest_name:params.restName,
        orderId:`SIO${Math.floor(Math.random()*(767783-232324)+232324)}`,
        name:"Nikita",
        email:"nikki@gmail.com",
        cost:Math.floor(Math.random()*(2000-500)+500),
        phone:"",
        address:'Hno 239 Nodia'
    }

    const [values,setValue] = useState(initialValue)

    const checkout = () => {
        fetch(order,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate('/viewOrder'))

    }

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setValue({
            ...values,[name]:value
        })
    }

    return(
        <>
            <div className='container'>
                <div className='panel panel-primary'>
                    <div className="panel panel-heading">
                        <h3>Order for Restaurant {values.rest_name} </h3>
                    </div>
                    <div className='panel panel-body'>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label htmlFor="email">OrderId</label>
                                    <input className="form-control" id="oid"
                                    name="orderId" value={values.orderId} readOnly/>
                                </div>
                                
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input class="form-control" id="name"
                                     name="name" value={values.name}
                                     onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input class="form-control" id="email"
                                     name="email" value={values.email}
                                     onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input class="form-control" id="phone"
                                     name="phone" value={values.phone}
                                     onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input class="form-control" id="address"
                                     name="address" value={values.address}
                                     onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h2>Total Price is Rs.{values.cost}</h2>
                            </div>
                        </div>
                        <button className='btn btn-success' onClick={checkout}>
                            PlaceOrder
                        </button>
                        
                    </div>

                    
                </div>
            </div>
        </>
    )

}

export default PlaceOrder