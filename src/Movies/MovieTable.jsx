import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";

import { useState } from "react";
import MiniModal from "../ui/MiniModal";
import { useNavigate } from "react-router-dom";

function MovieTable({ movies }) {
  const [Id, setId] = useState();
  const navigate = useNavigate();
  return (
    <main className="overflow-hidden m-auto  px-6">
      <section className="grid gap-3   py-2  items-center rounded-lg  w-fit m-auto  ">
        <header className=" grid grid-cols-[40px_2fr_2fr_2fr_2fr_2fr_2fr_70px] gap-4 text-center  border-b border-b-gray-300  pb-2 uppercase ">
          <h3>Id</h3>
          <h3>Title</h3>
          <h3>Poster</h3>
          <h3>Category</h3>
          <h3>Rating</h3>
          <h3>Year Released</h3>
          <h3 className="">Tv Rating</h3>
        </header>
        <section className="flex flex-col gap-2">
          {movies.map((s) => {
            const { id, title, tv_rating, image, year, rating, category } = s;
            return (
              <main
                key={id}
                className=" grid  grid-cols-[40px_2fr_2fr_2fr_2fr_2fr_2fr_70px] gap-4 justify-center grid-rows-[70px]  items-center text-center border-b border-b-gray-200 cursor-pointer pb-1 relative"
                onClick={() => navigate(`/movies/${id}`)}
              >
                <h2>{id}</h2>
                <h2 className="text-[14px]">{title}</h2>
                <img src={image} className="w-[70px] h-[80%] m-auto" />
                <h3 className="text-[10px]">{category}</h3>
                <h6>{rating}</h6>
                <h3 className="0">{year}</h3>
                <h3 className="">{tv_rating}</h3>
                <EllipsisVerticalIcon
                  className="size-4 text-gray-400 ml-9"
                  role="button"
                  onClick={() => setId(id)}
                />
                {Id === id && (
                  <div className="absolute flex items-end justify-end w-full top-[50px] left-5">
                    <MiniModal />
                  </div>
                )}
              </main>
            );
          })}
        </section>
      </section>
    </main>
  );
}

export default MovieTable;
