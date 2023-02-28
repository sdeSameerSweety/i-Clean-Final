import React from "react";

// components

import Add_del_table from "components/Cards/add_del_table";

export default function Table_add_del() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <PickupTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <Add_del_table color="dark" />
        </div>
      </div>
    </>
  );
}
