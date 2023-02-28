import React, { useState} from "react";
import QrReader from "modern-react-qr-reader";
import { getDatabase, ref, child, get,update } from "firebase/database";
// import ReactDom from "react-dom";
import "./qrcss.css";

const QrCode = () => {
  // let [details,setdetails] = useState({});
  // let [result, setResult] = useState("");
  // const [name,setName] = useState("");

  //Function to update The data into the database after the qrcode is scanned
  function writeUserData(str, name, email, number,lat,lon,status) {
    const db = getDatabase();
    update(ref(db, "pickup_schedule/" + str), {
      username: name,
      email: email,
      number: number,
      lat: lat,
      lon: lon,
      status: status
    });
    console.log("Data Updated Successfully");
  }

  //Function to Fetch All the Data From the Database
  function Fetch(res)
  {
    // console.log(res);
    const db = ref(getDatabase());
    get(child(db, `pickup_schedule/${res}`)).then((snapshot) => {
      if (snapshot.exists()) {
      // console.log(snapshot.val());
      let name = JSON.stringify(snapshot.val().username)
      name = name.replace(/"/g,"")
      // console.log(name);
      let email = JSON.stringify(snapshot.val().email)
      email = email.replace(/"/g,"")
      // console.log(email);
      let number = JSON.stringify(snapshot.val().number)
      number = number.replace(/"/g,"")
      // console.log(number);
      let lat = JSON.stringify(snapshot.val().lat)
      lat = lat.replace(/"/g,"")
      // console.log(lat);
      let lon = JSON.stringify(snapshot.val().lon)
      lon = lon.replace(/"/g,"")
      // console.log(lon);
      writeUserData(res, name,email,number,lat,lon,"completed");
      setSuccess(true);
      } 
      else {
        console.log("No data available");
        alert("ALERT: No Pickup Scheduled For Given User.");
    }
      
    }).catch((error) => {
      console.error(error);
    });
  }
  //Function to update data
 

  
  const [success, setSuccess] = useState(false);

  const handleScan = (data) => {
    if (data) {
      // setSuccess(true);
      let value = data;
      // console.log(value);
      Fetch(value);

    }
  };
  // console.log(result);

  const handleError = (err) => {
    console.error(err);
  };
  

  const successContainer = <div className="successwrapper"><div className="successContainer"><img src="/completed.gif" alt=" "/><p>Pickup Completed</p><button onClick={()=>{setSuccess(false)}}>OK</button></div></div>
  return (
    <div>
        {success?successContainer:<QrReader
          delay={300}
          facingMode={"environment"}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "30rem" }}
        />}
      </div>
  );
};

export default QrCode;