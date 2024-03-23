import React from "react";
import Link from "next/link";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCrad = () => {
  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <Link href="/" style={{ display: "contents" }}>
        <h4 className="mb-1">Title</h4>
        <hr className="h-px  border-0 bg-page mb-2 "></hr>
        <p className="whitespace-pre-wrap">Description</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">Assigned to</p>
            <ProgressDisplay />
          </div>
          <div className="ml-auto  flex items-end">
            <StatusDisplay />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCrad;
