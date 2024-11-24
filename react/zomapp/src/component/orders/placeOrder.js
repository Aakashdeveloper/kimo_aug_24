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
        phone:"88488322",
        address:'Hno 239 Nodia'
    }

    const [value,setValue] = useState(initialValue)

    const checkout = () => {
        fetch(order,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(value)
        })
        .then(navigate('/viewOrder'))

    }

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setValue({
            ...value,[name]:value
        })
    }

    return(
        <>
            <div className='container'>
                <div className='panel panel-primary'>
                    <div className="panel panel-heading">
                        <h3>Order for Restaurant {value.rest_name} </h3>
                    </div>
                    <div className='panel panel-body'>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label htmlFor="email">OrderId</label>
                                    <input className="form-control" id="oid"
                                    name="orderId" value={value.orderId} readOnly/>
                                </div>
                                
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input class="form-control" id="name"
                                     name="name" value={value.name}
                                     onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">Email</label>
                                    <input class="form-control" id="name"
                                     name="email" value={value.email}
                                     onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">Phone</label>
                                    <input class="form-control" id="name"
                                     name="phone" value={value.phone}
                                     onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">Address</label>
                                    <input class="form-control" id="name"
                                     name="address" value={value.address}
                                     onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h2>Total Price is Rs.{value.cost}</h2>
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