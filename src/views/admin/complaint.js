import React, { useState} from "react";
import "./app.css";
import { useHistory } from "react-router";
// import { dataRef } from "../../firebase";
// import { db } from "../../firebase";
// import useGeoLocation from "./usegeolocation";
import { getDatabase, ref, set } from "firebase/database";


const MakeComplain = () => {
    const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
  const [complain, setComplain] = useState("");
  const [address,setAddress] = useState("");
//   const [lat,setLat] = useState("");
//   const [status,setStatus] = useState(false);

//   const [loader, setLoader] = useState(false);
function writeUserData(str, name, email, complain,address) {
    const db = getDatabase();
    set(ref(db, 'registered_complaints/' + str), {
      name: name,
      email: email,
      address: address,
      complain: complain,
    });
  }

  function Writecomplain()
  {
    console.log({name,email,complain,address})
    let str = email;
    str = str.replace(".com","");
    writeUserData(str, name, email,complain,address);
    alert("Your Complaint is Successfully Posted. Thank you for your Cooperation.");
    history.push("/admin2/dashboard2");
  }
const handleSubmit = () =>{
  if(name.length===0 || email.length===0 || address.length===0 || complain.length===0)
  {
    alert("Please Fill All The Mandatory Fields !!");
  }
  else{
    Writecomplain();
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


  return (
    <form className="form">
      <h1>MAKE A COMPLAIN 🤳</h1>

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
      <label>Address <span className="zero">&#42;</span></label>
      <input
      type="text"
      placeholder="Your Address"
        // value={number}
        onChange={(e) => setAddress(e.target.value)}
        
      />
      <label>Complaint <span className="zero">&#42;</span></label>
      <textarea name="Complain" rows="4" cols="50" placeholder="Describe Your Complain" onChange={(e) => setComplain(e.target.value)}>
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
            <i className="fas fa-arrow-alt-circle-down"></i> Post Complain
        </button>
    </form>
  );
};

export default MakeComplain;