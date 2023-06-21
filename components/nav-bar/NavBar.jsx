import Image from "next/image";
import logo1 from "../../public/logo1.svg";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [newLogo] = useState(logo1);

  return (
    <section className="bg-color-secondary2 flex justify-center fixed top-0 w-full h-20 z-10 font-mono ">
      <div className="flex flex-row space-x-8 w-full mb-3 justify-around items-center text-secondary-300 font-bold">
        <Link className="flex flex-col w-28 items-center gap-2 text-lg cursor-pointer mt-3 ml-1 md:w-40 md:ml-20" href="/homepage">
          <Image src={newLogo} alt="logo" className="w-4/5" />
        
        </Link>
        <Link className="flex flex-col w-20 items-center gap-2 text-sm md:text-lg cursor-pointer mt-3 ml-360 md:w-80" href="/lineup"><p className={newLogo === logo1 ? "text" : ""}>Line-Up</p></Link>
        
        <Link className="flex flex-col w-20 items-center gap-2 text-sm md:text-lg md:w-80  cursor-pointer mt-3 ml-360" href="/schedule">
          <p>Schedule</p>
        </Link>
        <Link className="flex flex-col w-28 md:w-80 items-center gap-2 text-sm md:text-lg  cursor-pointer mt-3 ml-360" href="/tickets">
          <p>Get Tickets</p>
        </Link>
      </div>
    </section>
  );
}

export default NavBar;
