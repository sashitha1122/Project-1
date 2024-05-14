 import Image from "next/image";

export default function HomeMenu() {
    return (
        <section className="">
           <div classname="absolute left-0 right-0 w-full justify-start overflow-x-hidden">
                <div className=" absolute text-left">
                  <Image src={'/sallad1.jpg'} width={109} height={189} 
                   alt={'sallad'} /> 
                </div>
                <div className=" absolute right-[180px] z-10">
                  <Image src={'/sallad1.jpg'} width={107} height={195} 
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
        </section>
    );
}