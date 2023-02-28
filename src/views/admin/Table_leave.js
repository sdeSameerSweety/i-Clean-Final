import React from "react";

// components

import RecievedLeaveRequests from "components/Cards/recieved_leave_requests";

export default function Table_Leave() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <PickupTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <RecievedLeaveRequests color="dark" />
        </div>
      </div>
    </>
  );
}
