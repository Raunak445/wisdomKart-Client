import { Table, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from 'moment'

const AdminAppointments = () => {
  const { user } = useSelector((state) => state.user);
  const [appointments,setAppointments]=useState([])


  const fetchAppointments=async()=>{
      const res=await axios.get('https://wisdomkart-server.onrender.com/api/v1/admin/getAllAppointments')

      if(res.data.success){
        setAppointments(res.data.data)
      }
      else{
        message.error(res.data.message)
      }
  }

  useEffect(()=>{
    fetchAppointments()
  },[])
  const columns = [
    {
      title: "S.No.",
      dataIndex: "serialNumber",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Mentee Name",
      dataIndex: "menteeName",
    },
    {
      title:"Mentor Name",
      dataIndex:'mentorName'
    },
    {
      title: "Appointment Date & Time",
      dataIndex: "date",
      render: (text, record) => (
        <>
          <span>Date:{moment(record.date).format("DD-MM-YYYY")}</span>
          <br />
          <span>Time: {moment(record.time).format("hh:mm A")}</span>
        </>
      ),
      sorter: (a, b) => moment(b.date).valueOf() - moment(a.date).valueOf(),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
   
   
  ];

  return (<div>{user?.isAdmin && (<div>
    <Table columns={columns} dataSource={appointments} />
  
  
  
  </div>)}</div>);
};

export default AdminAppointments;
