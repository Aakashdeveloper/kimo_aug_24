import React,{useEffect,useState} from 'react';

const Login = () => {
    return(
<>
       <div className='container'>
           <div className='panel panel-success'>
               <div className='panel-heading'>
                   <h3>Login</h3>
               </div>
               <div className="panel-body">
                   <h2 style={{color:'red'}}>{message}</h2>
                   <div className='row'>
                       <div className='col-md-6 form-group'>
                           <label>Email</label>
                           <input className='form-control' name="email"
                           value={formData.email}
                           onChange={handleChange}/>
                       </div>
                       <div className='col-md-6 form-group'>
                           <label>Password</label>
                           <input className='form-control' name="password"
                           value={formData.password}
                           onChange={handleChange}/>
                       </div>
                       <button className="btn btn-danger"
                       onClick={handleSubmit}>
                           Login
                        </button>
                   </div>
               </div>
           </div>
       </div>
       </>
    )
}

export default Login