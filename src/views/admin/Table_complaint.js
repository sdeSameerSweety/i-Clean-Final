import React from "react";

// components

import Recievedcomplaints from "components/Cards/recieved_complaints";

export default function Tables_Complaint() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <PickupTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <Recievedcomplaints color="dark" />
        </div>
      </div>
    </>
  );
}
