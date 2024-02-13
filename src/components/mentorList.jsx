import React from 'react'
import { useNavigate } from 'react-router-dom'

const MentorList = ({mentor}) => {
    const navigate=useNavigate()
  return (
    <>
        <div className='card m-2' 
        style={{cursor:"pointer"}}
        onClick={()=>navigate(`/mentor/appointment/${mentor._id}`)}
        >
        <div className="card-header">Mr.{mentor.firstName} {mentor.lastName}</div>
        
        <div className="card-body"><p>
            <b>Area </b>{mentor.area}
           
        </p>
        <p> <b>Industry </b>{mentor.industry  }</p>
        <p> <b>Timings </b>{mentor.timings[0]}- {mentor.timings[1]}</p>
        
        
        </div>
</div>
    </>
  )
}

export default MentorList