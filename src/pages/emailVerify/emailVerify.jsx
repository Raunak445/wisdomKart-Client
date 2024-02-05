import { useEffect, useState } from 'react'
import styles from './styles.modules.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import success from "./successImg.png";


const EmailVerify = () => {
    const [validUrl,setValidUrl]= useState(false)
    const params=useParams()
    useEffect(()=>{
     const verifyEmailUrl=async()=>{
             try{
                 const url=`http://localhost:8080/api/users/${params.id}/verify/${params.token}`
                 const {data}=await axios.get(url)
                 console.log("axios part done")
                 console.log(data)
                 setValidUrl(true)
 
             }
             catch(error){
                 console.log(error)
                 setValidUrl(false)
 
             }
     }
 
     verifyEmailUrl()
 
    },[params])
    
     return (
 
 <>
         {
             validUrl ?(
                 <div className={styles.container}>
                 <img alt={success} className={styles.success_img}/>
                 <h1>Email verified sucessfully</h1>
                 <Link to ='/login'>
                     <button className={styles.green_btn}></button>
                 </Link>
 
                 </div>
             ):(<h1>
 
                 404 Not found
             </h1>)
         }
 
 
 
 </>
 
     )  
}

export default EmailVerify