import React from "react";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";

export const Navbar = () => {
 const a = () =>{
    console.log("Pantek")
 }
  return (
    <div className="flex justify-between w-full">
        <Logo/>
        <div className="flex justify-center">
            <Button variant="destructive" className="font-bold" onClick={a}>Home</Button>  
        </div>
    </div>
  );
};
