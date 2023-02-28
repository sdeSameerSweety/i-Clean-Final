import React from "react";

// components

import TotRegisteredWorker from "components/Cards/total_registered_worker";

export default function Tables_Worker() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <PickupTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <TotRegisteredWorker color="dark" />
        </div>
      </div>
    </>
  );
}
