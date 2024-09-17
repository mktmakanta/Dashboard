import React from "react";
import { Button } from "@/components/ui/button";
import TeamData from "@/components/comp/TeamData";

export default function Main() {
  return (
    <main>
      {/* Team Header  */}
      <div className="space-y-2 px-3 pt-6">
        <div className="">
          <h1 className="font-bold">Team</h1>
          <p className="font-normal">
            The team that consist of admin and staffs{" "}
          </p>
        </div>
        <div>
          <Button className="bg-violet-700 hover:bg-violet-800 rounded-sm text-white">
            Add
          </Button>
        </div>
      </div>

      {/* Team Data  */}

      <TeamData />
    </main>
  );
}
