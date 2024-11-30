import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Display from './userDisplay';
import { useNavigate } from 'react-router-dom';

const url = "http://127.0.0.1:6001/api/auth/users"

const UserList = () => {

    const [users,setUser] = useState();
    const naviagte = useNavigate();

    useEffect(() => {
        axios.get(url).then((res) => {setUser(res.data)})
    },[])

    if(sessionStorage.getItem('ltk') === null){
        naviagte('/')
    }

    if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== "Admin"){
        naviagte('/profile?message=You are not a Admin')
    }else{
        return(
            <>
                <Display userData={users}/>
            </>
        )
    }


    
}

export default UserList