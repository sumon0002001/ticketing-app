import React from "react";
import TicketCrad from "./(components)/TicketCrad";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div>
        <div className="mb-4">
          <h2>Category</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
            <TicketCrad />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
