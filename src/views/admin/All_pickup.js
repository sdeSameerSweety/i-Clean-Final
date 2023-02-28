import React from "react";

// components

import AllPickupTable from "components/Cards/all_pickup_schedule";
export default function Tables_Worker() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <PickupTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <AllPickupTable color="dark" />
        </div>
      </div>
    </>
  );
}
