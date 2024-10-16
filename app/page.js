import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
  <>
     <Hero />
     <HomeMenu />
     <section className="text-center my-16">
      <SectionHeaders 
          subHeader={'Our story'}
          mainHeader={'About us'}
      />
      <div className="text-gray-500 max-w-md mx-auto mt-8 flex flex-col gap-4">
        <p>
          Neapolitan Pizza: Originating from Naples, Italy, it has a thin, soft 
          crust and is traditionally topped with tomatoes, mozzarella cheese,
          fresh basil, salt, and olive oil.
        </p>
        <p>
          Chicago Deep-Dish Pizza: Characterized by its thick crust and deep,
          pie-like structure. It is heavily layered with cheese, toppings, and chunky tomato sauce.
        </p>
        <p>
          Sicilian Pizza: Thick, rectangular, and often topped with a robust tomato sauce, onions, anchovies, and herbs.
        </p>
      </div>
     </section>
     <section className="text-center my-8">
       <SectionHeaders 
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
       />
       <div className="mt-8 underline text-gray-500">
          <a className="text-4xl" href="tel:+94 715 678 999">+94 715 678 999</a>
       </div>
     </section>
  </>
  )
}
