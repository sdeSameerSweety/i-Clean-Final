// import { useState} from "react";
import { getDatabase, ref, child, get } from "firebase/database";

export function fetchid ()
{
    let id;
    const dbRef = ref(getDatabase());
    get(child(dbRef, "History/userhistorylastid")).then((snapshot) => {
    if (snapshot.exists()) {
    console.log(snapshot.val());
    id = snapshot.val();
    } 
    else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
    console.log(id)
    return id;
}