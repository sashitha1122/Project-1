import Image from "next/image";

export default function HomeMenu() {
    return (
        <section className="">
            <div>
                <div className="h-48 relative">
                  <Image src={'/sallad1.jpg'} layout={'fill'}
                   objectFit={'contain'} alt={'sallad'} /> 
                </div>
                <div className="h-48 relative">
                  <Image src={'/sallad1.jpg'} layout={'fill'} 
                  objectFit={'contain'} alt={'sallad'} /> 
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