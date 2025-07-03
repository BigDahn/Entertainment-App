import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import MiniModal from "../ui/MiniModal";
import { useDispatch, useSelector } from "react-redux";
import { openMiniModal } from "../feature/EntertainmentSlice/EntertainmentSlice";
import EditBox from "./EditBox";
import CreateNewMovie from "./CreateNewMovie";

function MovieTable({ movies }) {
  const { optionsId, isEdit, optionsModal, newMovie } = useSelector(
    (store) => store.Entertainment
  );
  const dispatch = useDispatch();

  return (
    <main>
      <section className="w-full  rounded-lg  " role="table">
        <header
          className=" grid grid-cols-[0.3fr_0.7fr_0.8fr_0.7fr_0.3fr_0.4fr_0.4fr_4rem]   gap-x-[2rem] text-center text-[14px]    pb-2 uppercase "
          role="row"
        >
          <div className="">Id</div>
          <div className="">Title</div>
          <div className="">Poster</div>
          <div className="">Category</div>
          <div className="">Rating</div>
          <div className="">Year</div>
          <div className="">MPA_Rating</div>
          <div></div>
        </header>
        <div>
          {movies.map((s) => {
            const {
              id,
              title,
              description,
              image,
              year,
              rating,
              trending,
              stars,
              director,
              category,
              mpa_ratings,
            } = s;

            return (
              <main key={id} className="flex flex-col">
                <section className="grid grid-cols-[0.3fr_0.7fr_0.8fr_0.7fr_0.3fr_0.4fr_0.4fr_4rem]  grid-rows-[70px]  gap-x-[2rem]  text-[14px]   items-center  w-full  text-center border-b border-b-gray-200 cursor-pointer pb-1 relative">
                  <h2>{id}</h2>
                  <h2 className="text-[14px]">{title}</h2>
                  <img src={image} className="w-[70px] h-[80%] m-auto" />
                  <h3 className="text-[10px] grid">
                    {category?.map((s) => {
                      return <p>{s.category}</p>;
                    })}
                  </h3>
                  <h6 className="">{rating}</h6>
                  <h3 className="">{year}</h3>
                  <h3 className="">{mpa_ratings}</h3>
                  <EllipsisVerticalIcon
                    className="size-4 text-gray-400 ml-9"
                    role="button"
                    onClick={() => {
                      dispatch(openMiniModal({ id }));
                    }}
                  />
                </section>
                {optionsId === id && optionsModal && (
                  <div className="absolute flex items-end justify-end w-full mt-12 left-[-16px] z-[90]">
                    <MiniModal />
                  </div>
                )}
                <div>
                  {optionsId === id && isEdit ? (
                    <EditBox
                      movies={{
                        id: id,
                        title: title,
                        description: description,
                        image: image,
                        year: year,
                        rating: rating,
                        trending: trending,
                        stars: stars,
                        director: director,
                        category: category,
                        mpa_ratings: mpa_ratings,
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </main>
            );
          })}
        </div>
      </section>
      {newMovie && <CreateNewMovie />}
    </main>
  );
}

export default MovieTable;
