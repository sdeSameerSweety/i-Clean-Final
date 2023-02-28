import React, { useState} from "react";
import "./app.css";
// import "./calendar.css"
import { useHistory } from "react-router";
// import { dataRef } from "../../firebase";
// import { db } from "../../firebase";
// import useGeoLocation from "./usegeolocation";
import { getDatabase, ref, set } from "firebase/database";
// import "https://unpkg.com/flowbite@1.5.5/dist/datepicker.js"
// import DateRangePicker from 'flowbite-datepicker/DateRangePicker';


const Make_leave = () => {
    const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [to,setTo] = useState("");
  const [reason,setReason] = useState("");
//   const [lat,setLat] = useState("");
//   const [status,setStatus] = useState(false);

//   const [loader, setLoader] = useState(false);
function writeUserData(str, name, email, from,to,reason) {
    const db = getDatabase();
    set(ref(db, 'applied_leaves/' + str), {
      name: name,
      email: email,
      from_Date: from,
      to_date: to,
      reason: reason,
    });
  }
  function Make_leave_accepted()
  {
    console.log({name,email,from,to,reason})
    let str = email;
    str = str.replace(".com","");
    writeUserData(str, name, email,from,to,reason);
    alert("Your have Sucessfully Applied for the Leave.");
    history.push("/admin3/dashboard3")
  }
const handleSubmit = () =>{
    if(name.length===0 || email.length===0 || from.length===0 || to.length===0 || reason.length===0)
    {
      alert("Please Fill All Mandatory Fields !!");
    }
    else{
      Make_leave_accepted();
    }
}

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoader(true);

//     db.collection("contacts")
//       .add({
//         name: name,
//         email: email,
//         number: number,
//         lon: lon,
//         lat: lat,
//         status: status,
//       })
//       .then(() => {
//         setLoader(false);
//         alert("Your message has been submitted👍");
//       })
//       .catch((error) => {
//         alert(error.message);
//         setLoader(false);
//       });

//     setName("");
//     setEmail("");
//     // setMessage("");
//     setNumber("");
//     setLon("");
//     setLat("");
//     setStatus(false);
//   };
//   const [currLocation, setCurrLocation] = useState({});
// //   useEffect(() => {
// //     getLocation();
// //   },[]);

//   const getLocation = () => {
//     navigator.geolocation.getCurrentPosition((position) => {
//         console.log(position);
//         const { latitude, longitude} = position.coords;
//         setCurrLocation({latitude,longitude});
//         setLat(currLocation.latitude);
//         setLon(currLocation.longitude);
//     });
//   }
//   const handleSubmit = () =>{
//     if(name!=="" && email!=="" && number!=="" && lat!=="" && lon!==""){
//         dataRef.ref.child("pickup_requests").push({name,email,number,lat,lon,status})
//         setName("");
//         setEmail("");
//         setNumber("");
//         setLat("");
//         setLon("");
//     }
//   }
  
//   const [isValid, setValid] = useState(false);
//   const validate = () => {
//     return name.length & email.length & number.length & lon.length & lat.length
//   };
//   useEffect(() => {
//     const isValid = validate();
//     setValid(isValid);
//   }, [name, email,number,lon,lat]);
// const dateRangePickerEl = document.getElementById('dateRangePickerId');


  return (
    <form className="form">
      <h1>Apply for Leave 🤳</h1>

      <label>Name <span className="zero">&#42;</span></label>
      <input
        type="text"
        placeholder="Name"
        // value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email <span className="zero">&#42;</span></label>
      <input
      type="email"
        placeholder="Eg. example@abc.com"
        // value={email}
        onChange={(e) => setEmail(e.target.value)}
       
      />
      {/* <label>Address</label>
      <input
      type="text"
      placeholder="Your Address"
        // value={number}
        onChange={(e) => setAddress(e.target.value)}
        
      /> */}
      <label>FROM (Date and Time) <span className="zero">&#42;</span></label>
      <input type="dateTIME-LOCAL" id="date" onChange={(e) => setFrom(e.target.value)}/>

      <label>TO (Date and Time) <span className="zero">&#42;</span></label>
      <input type="dateTIME-LOCAL" id="date" onChange={(e) => setTo(e.target.value)}/>


      <label>Reason <span className="zero">&#42;</span></label>
      <textarea name="Complain" rows="4" cols="50" placeholder="Describe Your Reason" onChange={(e) => setReason(e.target.value)}>
       {/* <input */}
    {/* //   type="text"
    //     // placeholder="Your Complain"
    //     // value={number}
    //     }
        
    //   /> */}
      </textarea>
      {/* <button
            className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            type="button"
            onClick={getLocation}
            >
            <i className="fas fa-arrow-alt-circle-down"></i> Fetch My Location (Click 2 times)
        </button>
      <label>Latitude</label>
      <input
        disabled="disabled"
        value={lat}
        
      />
      <label>Longitude</label> */}
      {/* <input
        disabled="disabled"
        value={lon}
      />
      
      {/* <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea> */} 

        <button
            className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            type="button"
            onClick={handleSubmit}
            >
            <i className="fas fa-arrow-alt-circle-down"></i> Submit Application
        </button>
    </form>
  );
};

export default Make_leave;