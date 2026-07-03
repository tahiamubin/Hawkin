import { Suspense } from "react";
import PetCard from "../components/PetCard";
import SearchBar from "../components/SearchBar";

const allPetsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pet`, {
    cache: "no-store",
  });
  const pets = await res.json();

  //console.log(pets)
  return (
    <div className="container mx-auto mt-5 mb-5">
      <h1 className="text-5xl font-bold">Find Your Perfect Pet</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <SearchBar /> */}
      </Suspense>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 mb-20">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet}></PetCard>
        ))}
      </div>
    </div>
  );
};

export default allPetsPage;
