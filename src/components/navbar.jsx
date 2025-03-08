import { Button } from "./ui/button";
import { Logo } from "./ui/logo";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-between w-full">
        <Logo/>
        <div className="flex justify-center">
          <NavLink to={"/"}>
            {({ isActive }) =>
              <Button variant={isActive? "destructiveclick" :  "destructive"} className="font-bold">Home</Button>  
            }
          </NavLink>
        </div>
    </div>
  );
};
