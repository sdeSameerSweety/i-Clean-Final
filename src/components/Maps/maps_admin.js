// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import "./card.css"
// mapboxgl.accessToken = 'pk.eyJ1IjoiYWRkeW1pc3RyZWwiLCJhIjoiY2xjM2ZvaW5oMDY3YzNwbWg2cno4OXozdCJ9.RahQsX1edPVuFHkf0AT06g';

// export default function App() {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(85.835821);
//   const [lat, setLat] = useState(20.258107);
//   const [zoom, setZoom] = useState(9);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v12',
//       center: [lng, lat],
//       zoom: zoom
//     });
//   });

//   useEffect(() => {
//     if (!map.current) return; // wait for map to initialize
//     map.current.on('move', () => {
//       setLng(map.current.getCenter().lng.toFixed(4));
//       setLat(map.current.getCenter().lat.toFixed(4));
//       setZoom(map.current.getZoom().toFixed(2));
//     });
//   });

//   return (
//     <div>
//       <div className="sidebar">
//         Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//       </div>
//       <div ref={mapContainer} className="map-container" />
//     </div>
//   );
// }


import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
// import { useHistory } from "react-router";
import "./group.css";
import "./card_admin.css"
import geoJson from "./chicago-parks.json";
// import { saveAs } from "file-saver";
import editjson from "./chicago-parks.json";
import "./qradmin.css"
import Table_add_del from "views/admin/Table_add_del";
// import { writeJsonFile } from "write-json-file";
import { getDatabase, ref, set,get,child } from "firebase/database";
import Add_del_table from "components/Cards/add_del_table";



mapboxgl.accessToken =
  "pk.eyJ1IjoiYWRkeW1pc3RyZWwiLCJhIjoiY2xjM2ZvaW5oMDY3YzNwbWg2cno4OXozdCJ9.RahQsX1edPVuFHkf0AT06g";
  const Marker = ({ onClick, children, feature }) => {
    const _onClick = () => {
      onClick(feature.properties.description);
    };

    return (
      <button onClick={_onClick} className="marker">
        {children}
      </button>
    );
  };

const Editable_Map = () => {
  const mapContainerRef = useRef(null);
  const [lngg, setLng] = useState(-70.9);
  const [latt, setLat] = useState(42.35);
  const [finallat,setfinallat] = useState("");
  const [finallon,setfinallon] = useState("");
  const [success, setSuccess] = useState(false);
  const [successdeal,setSuccessdeal] = useState(false);
  const [successdelete,setSuccessdelete] = useState(false);
  const [finalsucess,setfinalsucess] = useState(false);
  // const hist = useHistory();
  // const [geoJson2,setgeoJson] = useState({def});
  // const [editjson2,setEditJson] = useState({def});


  // const geoJson = det;
  // const editjson = det;

  // useEffect(()=>{
  //   Fetch();
  //   console.log("somya");
  // },[success]);

  // const geoJson = det;
  // const editjson = det;
  //Adding Bin
  const [det,setDet] = useState({});
  function Fetch()
  {
    const dbRef = ref(getDatabase());
      get(child(dbRef, "mapData/")).then((snapshot) => {
      if (snapshot.exists()) {
      setDet(snapshot.val());
      console.log(det);
      } 
      else {
          console.log("No data available");
      }
      }).catch((error) => {
      console.error(error);
      });
    }

  useEffect(()=>{
    Fetch();
  },[success,successdeal,finalsucess,successdelete]);
  const addBinClick = () => {
    console.log("Aditya");
    setgetlat22(" ");
    setgetlon22(" ");
    setSuccess(true);
  }

  //Deleting Bin
  const remBinClick = () => {
    console.log("Aditya");
    setSuccessdelete(true);
  }

  //Adding Dealer
  const addDealClick = () => {
    console.log("Aditya");
    setgetlat22(" ");
    setgetlon22(" ");
    setSuccessdeal(true);
  }

  //Removing Dealer
  const remDealClick = () => {
    console.log("Aditya");
  }
  // const [settinglat,setSettinglat] = useState("");
  // const [settinglon,setSettinglon] = useState("");
  // const [zoom, setZoom] = useState(9);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [85.835821, 20.258107],
      zoom: 10,
    });
    function getload()
    {
      if(Object.keys(det).length===0)
        return geoJson;
      else 
        return det;
    }
    const load = getload();

    map.on("load", function () {
      // Add an image to use as a custom marker
      map.loadImage(
        "/bin.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          // Add a GeoJSON source with multiple points
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: load.features,
            },
          });
          // Add a symbol layer
          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              // get the title name from the source's "title" property
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
  }));

  // Example of a MapMouseEvent of type "click"
map.on('click', (e) => {
  const mx = e.lngLat;
  let llat=mx.lat;
  let llong = mx.lng;
  setfinallat(llat);
  setfinallon(llong);
  console.log({llat,llong});

  // {
  //     lngLat: {
  //         lng: 40.203,
  //         lat: -74.451
  //     },
  //     originalEvent: {...},
  //     point: {
  //         x: 266,
  //         y: 464
  //     },
  //      target: {...},
  //      type: "click"
  // }
});
// map.current.on('move', () => {
//   setLng(map.current.getCenter().lng.toFixed(4));
//   setLat(map.current.getCenter().lat.toFixed(4));
//   setZoom(map.current.getZoom().toFixed(2));
//   });

map.on('mousemove', (e) => {
  // document.getElementById('info').innerHTML =
  // // `e.point` is the x, y coordinates of the `mousemove` event
  // // relative to the top-left corner of the map.
  // JSON.stringify(e.point) +
  // '<br />' +
  // // `e.lngLat` is the longitude, latitude geographical position of the event.
  const mx =  e.lngLat;
  setLat(mx.lat);
  setLng(mx.lng);
  // console.log(latt);
  // console.log(lngg);
});


// map.current.on('move', () => {
// setLng(map.current.getCenter().lng.toFixed(4));
// setLat(map.current.getCenter().lat.toFixed(4));
// setZoom(map.current.getZoom().toFixed(2));
// });

map.on('mouseover', () => {
    console.log('A mouseover event has occurred.');
});
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

    // Clean up on unmount
    return () => map.remove();
  }, [success,finalsucess,successdeal,successdelete]);



const [getlat,setgetlat] = useState("");
const [getlon,setgetlon] = useState("");
const [getlat22,setgetlat22] = useState("");
const [getlon22,setgetlon22] = useState("");
const [currLocation, setCurrLocation] = useState({});
let lat,lon;

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

const [name,setName] = useState("");
const [updatelat,setUpdatelat] = useState("");
const [updatelon,setUpdatelon] = useState("");

const getLocation = (e) => {
  e.preventDefault();
  locate();
  setgetlat22(getlat);
  setgetlon22(getlon);
  setUpdatelat(getlat22);
  setUpdatelon(getlon22);
}

function getdatasomya()
{
  if(Object.keys(det).length===0)
  {
    return (JSON.stringify(editjson.features));
  }
  else
  {
    return (JSON.stringify(det.features));
  }
}

const data = getdatasomya();
const strtoaddData = `{"type":"Feature","properties":{"title":"${name}","description":"Recycle Bin"},"geometry":{"coordinates":[${getlon},${getlat}],"type":"Point"}}`;
const final = data.substring(0, data.length - 1)+","+strtoaddData+"]";
const alldata = '{"features":'+final+',"type":"FeatureCollection"}'


//function to post data to data base
function writeUserData(data) {
  const db = getDatabase();
  set(ref(db, 'mapData/'), data);
}
function getfinaldata () 
{
  // const getdata = JSON.stringify(alldata)
  const findata = JSON.parse(alldata);
  console.log(findata);
  writeUserData(findata);
  console.log("Success");
} 

//Export
// async function exportjson()
// {
//   let res = await writeJsonFile('./temp.json',findata);
//   let msg = res.json();
//   console.log(msg);
// }

// function exp()
// {
//   var fileName = 'myData.json';

//   // Create a blob of the data
//   var fileToSave = new Blob([alldata], {
//       type: 'application/json'
//   });

//   // Save the file
//   saveAs(fileToSave, fileName);
//   console.log("finallydone");
// }

const handleAdd = () =>
{
  if(name.length===0)
  {
    alert("Please Fill The Name Field !!");
  }
  else
  {
    getfinaldata();
    setSuccessdeal(false);
    // exportjson();
    // exp();
    setSuccess(false);
    alert("Successfully Added !!")
    setName("");
  }
}

const handleclose = () =>
{
  setSuccess(false);
}

const handleclosedeal = () =>
{
  setSuccessdeal(false);
}
const handleclosedel = () =>
{
  setSuccessdelete(false);
}

const setrefresh = () =>
{
  if(finalsucess===false)
    setfinalsucess(true);
  else
    setfinalsucess(false);
  // hist.push('/admin/maps');
}

useEffect(() => {
  locate();
},[])

const value = <div> </div>;

const successContainer = 
  <div className="successwrappermap">
    <div className="successContainermap">
      {/* <img src="/completed.gif" alt=" "/> */}
        <p>
          <form>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Location Name
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                // onChange={event=>
                //   setValues((prev)=>({...prev,email:event.target.value}))
                // }
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Location (Longitude)
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={getlon}
                disabled="disabled"
                // onChange={event=>
                //   setValues((prev)=>({...prev,pass:event.target.value}))
                // }
              />
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Location (Latitude)
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={getlat}
                disabled="disabled"
                // onChange={event=>
                //   setValues((prev)=>({...prev,pass:event.target.value}))
                // }
              />
            </div>

            {/* <div className="text-center mt-6">
              <b className="error">{errormsg}</b>
              <button
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmission}
                disabled={submitButtonDisabled}
              >
                Sign In
              </button>
            </div> */}
            
              
          </form>
          
        </p>
        <button className="button235" onClick={getLocation}>
                Fetch Bin Location
        </button>
        
        <button className="successContainermapbutton22" onClick={handleAdd}>
          ADD
        </button>
        <button className="button235" onClick={handleclose}>
                X
        </button>
          
    </div>
  </div>

const dealercontainer = 
  <div className="successwrappermap">
    <div className="successContainermap">
      {/* <img src="/completed.gif" alt=" "/> */}
        <p>
          <form>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Dealer Name
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                // onChange={event=>
                //   setValues((prev)=>({...prev,email:event.target.value}))
                // }
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Location (Longitude)
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={getlon}
                disabled="disabled"
                // onChange={event=>
                //   setValues((prev)=>({...prev,pass:event.target.value}))
                // }
              />
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Location (Latitude)
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={getlat}
                disabled="disabled"
                // onChange={event=>
                //   setValues((prev)=>({...prev,pass:event.target.value}))
                // }
              />
            </div>

            {/* <div className="text-center mt-6">
              <b className="error">{errormsg}</b>
              <button
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmission}
                disabled={submitButtonDisabled}
              >
                Sign In
              </button>
            </div> */}
            
              
          </form>
          
        </p>
        <button className="button235" onClick={getLocation}>
                Fetch Dealer Location
        </button>
        
        <button className="successContainermapbutton22" onClick={handleAdd}>
          ADD
        </button>
        <button className="button235" onClick={handleclosedeal}>
                X
        </button>
          
    </div>
  </div>
const add_del = <Add_del_table/>;
const deleteContainer = 
  <div className="successwrappermap2">
    <button className="button2352" onClick={handleclosedel}>
                X
        </button> 
    <div className="successContainermap2">
      {/* <img src="/completed.gif" alt=" "/> */}
        <p>
          {/* <form>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Location Name
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                // onChange={event=>
                //   setValues((prev)=>({...prev,email:event.target.value}))
                // }
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Location (Longitude)
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={getlon}
                disabled="disabled"
                // onChange={event=> */}
                {/* //   setValues((prev)=>({...prev,pass:event.target.value}))
                // }
              /> */}
            {/* </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Location (Latitude)
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={getlat}
                disabled="disabled"
                // onChange={event=>
                //   setValues((prev)=>({...prev,pass:event.target.value}))
                // }
              />
            </div> */}

            {/* <div className="text-center mt-6">
              <b className="error">{errormsg}</b>
              <button
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmission}
                disabled={submitButtonDisabled}
              >
                Sign In
              </button>
            </div> */}
            
              
          {/* </form>
          
        </p>
        <button className="button235" onClick={getLocation}>
                Fetch Bin Location
        </button>
        
        <button className="successContainermapbutton22" onClick={handleAdd}>
          ADD
          </button>*/}
        {add_del}
      </p> 
    </div>
  </div>
  return (
    <div className="map-container" ref={mapContainerRef}>
      <div className="sidebar">
          Longitude: {lngg} | Latitude: {latt}
      </div> 
      <div className="sidebar2">
        <div class="multi-button">
          <button class="btn-primary" onClick={addBinClick}>Add Bins</button>
          <button class="btn-secondary-custom" onClick={addDealClick}>Add Dealers</button>
          <button class="btn-secondary" onClick={remBinClick}>Delete Bin/Dealer</button>
          
        </div>
      </div>
      <div className="sidebar3">
      <button className="refresh" onClick={setrefresh}>
                  Refresh
            </button>
      </div>
      <div>
      {success?successContainer:value}
      </div>
      <div>
      {successdeal?dealercontainer:value}
      </div>
      <div>
      {successdelete?deleteContainer:value}
      </div>
    </div>
    
  )
};

export default Editable_Map;

// import mapboxgl from "mapbox-gl";
// import React, { useEffect, useRef } from "react";
// import ReactDOM from "react-dom";
// import geoJson from "./chicago-parks.json";
// import "./card.css";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiYWRkeW1pc3RyZWwiLCJhIjoiY2xjM2ZvaW5oMDY3YzNwbWg2cno4OXozdCJ9.RahQsX1edPVuFHkf0AT06g";

// const Marker = ({ onClick, children, feature }) => {
//   const _onClick = () => {
//     onClick(feature.properties.description);
//   };

//   return (
//     <button onClick={_onClick} className="marker">
//       {children}
//     </button>
//   );
// };

// const App = () => {
//   const mapContainerRef = useRef(null);

//   // Initialize map when component mounts
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: "mapbox://styles/mapbox/streets-v12",
//       center: [-87.65, 41.84],
//       zoom: 10,
//     });

//     // Render custom marker components
//     geoJson.features.forEach((feature) => {
//       // Create a React ref
//       const ref = React.createRef();
//       // Create a new DOM node and save it to the React ref
//       ref.current = document.createElement("div");
//       // Render a Marker Component on our new DOM node
//       ReactDOM.render(
//         <Marker onClick={markerClicked} feature={feature} />,
//         ref.current
//       );

//       // Create a Mapbox Marker at our new DOM node
//       new mapboxgl.Marker(ref.current)
//         .setLngLat(feature.geometry.coordinates)
//         .addTo(map);
//     });

//     // Add navigation control (the +/- zoom buttons)
//     map.addControl(new mapboxgl.NavigationControl(), "top-right");

//     // Clean up on unmount
//     return () => map.remove();
//   }, []);

//   const markerClicked = (title) => {
//     window.alert(title);
//   };

//   return <div className="map-container" ref={mapContainerRef} />;
// };

// export default App;