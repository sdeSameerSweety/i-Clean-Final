import React, { useEffect, useState} from "react";
import "./app.css";
import { useHistory } from "react-router";
// import { dataRef } from "../../firebase";
// import { db } from "../../firebase";
// import useGeoLocation from "./usegeolocation";
import { getDatabase, ref, set,get,child } from "firebase/database";


const Pickup_request = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [getlat,setgetlat] = useState("");
  const [getlon,setgetlon] = useState("");
  let lat,lon;
  // const [userid,setUserid] = useState("");
//   const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  // const [lon,setLon] = useState("");
  // const [lat,setLat] = useState("");
  const [status,setStatus] = useState("pending");

  function Catch(){
  const dbRef = ref(getDatabase());
    get(child(dbRef, "History/userhistorylastid")).then((snapshot) => {
      let str;
    if (snapshot.exists()) {
      str = snapshot.val();
      // str = number.replace(/"/g,"")
      console.log(str);
      let str2 = str+".com";
      setEmail(str2);
    } 
    else {
        console.log("No data available");
    }

    }).catch((error) => {
    console.error(error);
    });
    
  }

  useEffect(() =>{
    Catch();
  },[]);

//   const [loader, setLoader] = useState(false);
function writeUserData(str, name, email, number,lat,lon,status) {
    const db = getDatabase();
    set(ref(db, 'pickup_schedule/' + str), {
      username: name,
      email: email,
      number: number,
      lat: lat,
      lon: lon,
      status: status
    });
  }

  function WriteExist()
  {
    console.log({name,email,number,getlat,getlon,status})
    let str = email;
    setStatus("pending");
    str = str.replace(".com","");
    writeUserData(str, name, email, number,getlat,getlon,status);
    alert("Your Request is Successfully Placed. Thank you.");
    history.push("/admin2/pickup");
  }
const handleSubmit = () =>{
   if(name.length===0 || number.length===0 || getlat.length===0 || getlon.length===0)
   {
    alert("Please Fill All The Required Fields.")
   }
   else{
    WriteExist();
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
  const [currLocation, setCurrLocation] = useState({});
//   useEffect(() => {
//     getLocation();
//   },[]);

function locate()
{
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    const { latitude, longitude} = position.coords;
    setCurrLocation({latitude,longitude});
    lat = currLocation.latitude;
    lon = currLocation.longitude;
    setgetlat(lat);
    setgetlon(lon);
  });
}

useEffect(() => {
  locate();
},[])

  const getLocation = () => {
    // navigator.geolocation.getCurrentPosition((position) => {
    //     console.log(position);
    //     const { latitude, longitude} = position.coords;
    //     setCurrLocation({latitude,longitude});
    //     lat = currLocation.latitude;
    //     lon = currLocation.longitude;
    //     setgetlat(lat);
    //     setgetlon(lon);
    locate();
    };
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
      <h1>SCHEDULE YOUR PICKUP REQUEST 🤳</h1>

      <label>Name <span className="zero">&#42;</span></label>
      <input
        placeholder="Name"
        // value={name}
        required="true"
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value = {email}
        disabled = "true"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
       
      />
      <label>Phone Number <span className="zero">&#42;</span></label>
      <input
        placeholder="788******7"
        // value={number}
        onChange={(e) => setNumber(e.target.value)}
        required="true"
      />
      <button
            className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            type="button"
            onClick={getLocation}
            >
            <i className="fas fa-arrow-alt-circle-down"></i> Fetch My Live Location
        </button>
      <label>Latitude  <span className="zero">&#42;</span></label>
      <input
        disabled="disabled"
        value={getlat}
        required="true"
        
      />
      <label>Longitude  <span className="zero">&#42;</span></label>
      <input
        disabled="disabled"
        value={getlon}
        required = "true"
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
            <i className="fas fa-arrow-alt-circle-down"></i> Submit
        </button>
    </form>
  );
};

export default Pickup_request;