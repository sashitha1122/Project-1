 import Image from "next/image";
import MenuItem from "./menu/MenuItem";

export default function HomeMenu() {
    return (
        <section className="">
           <div classname="absolute left-0 right-0 w-full justify-start overflow-x-hidden">
                <div className=" absolute   text-left">
                  <Image src={'/sallad1.jpg'} width={200} height={250} 
                   alt={'sallad'} /> 
                </div>
                <div className=" absolute right-[160px] z-10">
                  <Image src={'/sallad1.jpg'} width={200} height={250} 
                  alt={'sallad'} /> 
                </div>
           </div>
            <div className="text-center">
              <h3 className="uppercase text-gray-500 font-semibold
              leading-4">
                Check out
                </h3>
              <h2 className="text-primary font-bold text-4xl
              italic">Menu</h2>
          </div> 
          <div className=" mt-40 grid grid-cols-3 gap-12">
             <MenuItem />
             <MenuItem />
             <MenuItem />
             <MenuItem />
             <MenuItem />
             <MenuItem />
          </div>
        </section>
    );
}