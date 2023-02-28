import React from "react";

// components

import TotRegisteredUser from "components/Cards/total_registered_user";

export default function Table_User() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <PickupTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <TotRegisteredUser color="dark" />
        </div>
      </div>
    </>
  );
}
