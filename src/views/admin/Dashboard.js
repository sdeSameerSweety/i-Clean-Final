import React, { useState} from "react";
import { useHistory } from "react-router";
import Card from "@material-ui/core/Card";
// import * as React from 'react';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { getDatabase, ref, child, get, set } from "firebase/database";
// import {fetchid} from "components/Sidebar/history"
// import { fetchid } from "components/Sidebar/history.js";
// import { dest } from "gulp";
import QRCode from "react-qr-code";
import "./app.css"
// import CardStats from "components/Cards/CardStats.js";



// components

// import CardLineChart from "components/Cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Dashboard() {
  // const location = useLocation();
  // const getdata = location.state;
  // const params = useParams();
  const history = useHistory();
  // const [params,setParams] = useState({})
  // setParams(fetchid());
  // console.log(params.id);
  //Reading Database and storing
  const [details,setdetails] = useState({});
  // useEffect(() => 
  // {
  //   getid();
  // },[]);
  // const [num,setNum] = useState(0);
  const [userid,setUserid] = useState("");
  const dbRef = ref(getDatabase());
    get(child(dbRef, "History/userhistorylastid")).then((snapshot) => {
    if (snapshot.exists()) {
    setUserid(snapshot.val());
    } 
    else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
  function Fetch()
  {
    
    const db = ref(getDatabase());
    get(child(db, `registered_user/${userid}`)).then((snapshot) => {
      if (snapshot.exists()) {
      console.log(snapshot.val());
      setdetails(snapshot.val());
      } 
      else {
        console.log("No data available");
        alert("No Data Available for Current User. Please Edit the Details.");
    }
    }).catch((error) => {
      console.error(error);
    });
  }
  const getDetails = () =>
  {
    Fetch();
  }
  //Function to update Details
  function writeUserData(str, name, email, number,address) {
    const db = getDatabase();
    set(ref(db, 'registered_user/' + str), {
      username: str,
      name: name,
      email: email,
      number: number,
      address: address,
    });
  }
  const [email,setEmail] = useState(details.email);
  const [name,setName] = useState(details.name);
  const [number,setNumber] = useState(details.number);
  const [address,setAddress] = useState(details.address);
  const [button_display,setButtonValue] = useState("Edit Details");
  const [button_state,setButtonState] = useState("edit");
  const [input_field,setInputField] = useState("disabled");
  const handleSubmit = () =>
  {
    if(button_state==="edit"){
      setButtonState("submit");
      setInputField("");
      setButtonValue("Submit Changes");
      // setNum(1);
      return;
    }
    console.log("before");
    writeUserData(userid, name, email, number,address);
    console.log("after");
    alert("Your Profile Updated Successfully");
    history.push(`/admin2/dashboard2`);
    setButtonState("edit");
    setButtonValue("Edit Details");
    setEmail(email);
    setAddress(address);
    setNumber(number);
    setName(name);  
    setInputField("disabled");
  }
  // const [unique,setUnique] = useState("");
  // setUnique("aditya");

     // if(name==="") name=details.name;
      // if(email==="") email=details.email;
      // if(number==="") number=details.number;
      // if(address==="") address=details.address;
  const [True] = useState(true);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardLineChart /> */}
          <Card sx={{ maxWidth:10}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="10"
                width="5"
                image="/card.jpg"
                alt="green iguana"
              />
              <CardContent>
                {/* <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  hello
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  hello
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  hello
                </Typography> */}
                <form>
                <div className="text-center mt-6">
                    {/* <b className="error">{errormsg}</b> */}
                     <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={getDetails}
                    //disabled={submitButtonDisabled}
                    >Get Profile Details</button>
                  </div>
                <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      <p> </p>
                      Username
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={details.username}
                      disabled = "disabled"
                      // onChange={(event)=>setName(event.target.value)}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder={details.name}
                      disabled = {input_field}
                      required = {True}
                      onChange={(event)=>setName(event.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder={details.email}
                      disabled = {input_field}
                      required = {True}
                      onChange={(event)=>setEmail(event.target.value)}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder={details.number}
                      disabled = {input_field}
                      required = {True}
                      onChange={(event)=>setNumber(event.target.value)}
                      
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder={details.address}
                      required = {True}
                      disabled = {input_field}
                      onChange={(event)=>setAddress(event.target.value)}
                      
                    />
                  </div>
                  <div className="text-center mt-6">
                    {/* <b className="error">{errormsg}</b> */}
                     <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                    //disabled={submitButtonDisabled}
                    >{button_display}</button>
                  </div>
                </form>
              </CardContent>
            </CardActionArea>
          </Card>
          
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardBarChart /> */}
          <div className="relative t-500px h-350-px">
            <QRCode
            size={300}
            style={{ top: "50%",height: "50%", maxWidth: "100%", width: "100%" }}
            value={userid}
            viewBox={`0 0 256 256`}
            />
            <button className="button-71"  role="button">
              Unique QR ID
          </button>
          </div>
          
          {/* <div class=button">
          </div> */}
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/*  */}
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardSocialTraffic /> */}
        </div>
      </div>
    </>
  );
}
