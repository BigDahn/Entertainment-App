import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";

import { useState } from "react";
import MiniModal from "../ui/MiniModal";
import { useNavigate } from "react-router-dom";

function MovieTable({ movies }) {
  const [Id, setId] = useState();
  const navigate = useNavigate();
  return (
    <main className="overflow-hidden  ">
      <section className="w-full h-screen rounded-lg  " role="table">
        <header
          className=" grid grid-cols-[0.4fr_2fr_2fr_1.3fr_1fr_2fr_1fr_3rem]   gap-x-[3rem] text-center text-[14px]    pb-2 uppercase "
          role="row"
        >
          <div>Id</div>
          <div>Title</div>
          <div>Poster</div>
          <div>Category</div>
          <div>Rating</div>
          <div>Year</div>
          <div>Tv Rating</div>
          <div></div>
        </header>
        <section>
          {movies.map((s) => {
            const { id, title, tv_rating, image, year, rating, category } = s;
            return (
              <main
                key={id}
                className="grid grid-cols-[0.4fr_2fr_2fr_1.3fr_1fr_2fr_1fr_3rem] grid-rows-[70px]  gap-x-[3rem]  text-[14px]   items-center  text-center border-b border-b-gray-200 cursor-pointer pb-1 relative"
              >
                <h2>{id}</h2>
                <h2 className="text-[14px]">{title}</h2>
                <img src={image} className="w-[70px] h-[80%] m-auto" />
                <h3 className="text-[10px] grid">
                  {category.map((s) => {
                    return <p>{s}</p>;
                  })}
                </h3>
                <h6 className="">{rating}</h6>
                <h3 className="">{year}</h3>
                <h3 className="">{tv_rating}</h3>

                <EllipsisVerticalIcon
                  className="size-4 text-gray-400 ml-9"
                  role="button"
                  onClick={() => setId(id)}
                />
                {Id === id && (
                  <div className="absolute flex items-end justify-end w-full top-[50px] left-[0px] z-[90]">
                    <MiniModal onClick={() => navigate(`/movies/${id}`)} />
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
