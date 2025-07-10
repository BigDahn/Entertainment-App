import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import MiniModal from "../ui/MiniModal";
import { useDispatch, useSelector } from "react-redux";
import { openMiniModal } from "../feature/EntertainmentSlice/EntertainmentSlice";
import EditBox from "./EditBox";
import CreateNewMovie from "./CreateNewMovie";
import Pagination from "../ui/Pagination";
import { useGetPathName } from "../hooks/useGetPathName";

function MovieTable({ movies, count }) {
  const { path } = useGetPathName();
  const { options, isEdit, optionsModal, addNew } = useSelector(
    (store) => store.Entertainment
  );
  const dispatch = useDispatch();

  console.log(options);
  return (
    <main>
      <section
        className="w-full  rounded-lg border-1 border-gray-100  "
        role="table"
      >
        <header
          className=" grid grid-cols-[0.3fr_0.7fr_0.8fr_0.7fr_0.3fr_0.4fr_0.4fr_4rem]   gap-x-[2rem] text-center text-[14px] bg-gray-400 py-4 text-white font-normal rounded-tr-md rounded-tl-md uppercase "
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
                  <h3 className="text-[10px] grid  grid-cols-3">
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
                      dispatch(openMiniModal({ id, path }));
                    }}
                  />
                </section>
                {options.id === id && options.name === path && optionsModal && (
                  <div className="absolute flex items-end justify-end w-full mt-12 left-[-16px] z-[90]">
                    <MiniModal />
                  </div>
                )}
                <div>
                  {options.id === id && options.name === path && isEdit ? (
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
        <div>
          <Pagination count={count} />
        </div>
      </section>
    </main>
  );
}

export default MovieTable;
