import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <div className="bg-[url(assets/Valorant_Launch_KV_424_designpass_F.jpg)] bg-cover bg-center bg-no-repeat brightness-50 mt-8 flex justify-around py-48">
        <div className="w-full">
        </div>
        <div className="w-full">
          <h1 className="bg-gradient-to-b from-red-500 to-red-950 text-transparent font-VALORANT bg-clip-text text-7xl font-bold flex justify-center align-middle flex-col py-5">Search Up Your Opponent</h1>
          <form action="">
            <Input className="w-2/4 mx-auto mb-2" type="text" id="text" placeholder="Username" />
            <Link to={"/result"}>
              <Button type="submit" variant="destructive">Search</Button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
