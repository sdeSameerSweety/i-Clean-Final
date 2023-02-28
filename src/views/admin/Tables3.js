import React from "react";

// components

import PickupTable from "components/Cards/pickup_table";

export default function Tables3() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <PickupTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <PickupTable color="dark" />
        </div>
      </div>
    </>
  );
}
