 import Image from "next/image";
import MenuItem from "./menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
    return (
        <section className="">
           <div classname="absolute left-0 right-0 w-full justify-start overflow-x-hidden">
                <div className=" absolute text-left">
                  <Image src={'/sallad1.jpg'} width={200} height={250} 
                   alt={'sallad'} /> 
                </div>
                <div className=" absolute right-[310px] z-10">
                  <Image src={'/sallad1.jpg'} width={200} height={250} 
                  alt={'sallad'} /> 
                </div>
           </div>
            <div className="text-center">
             <SectionHeaders subHeader={'Check out'}
                  mainHeader={'Menu'} />
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