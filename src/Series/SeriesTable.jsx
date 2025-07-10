import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import Pagination from "../ui/Pagination";
import { openMiniModal } from "../feature/EntertainmentSlice/EntertainmentSlice";
import { useDispatch, useSelector } from "react-redux";
import MiniModal from "../ui/MiniModal";

function SeriesTable({ series, count }) {
  const { optionsId, isEdit, optionsModal, newMovie } = useSelector(
    (store) => store.Entertainment
  );
  const dispatch = useDispatch();

  return (
    <section
      className="w-full  rounded-lg border-1 border-gray-100  "
      role="table"
    >
      <header
        className=" grid grid-cols-[0.2fr_0.4fr_0.4fr_0.4fr_0.3fr_0.4fr_0.4fr_0.5fr_4rem]   gap-x-[1rem] text-center text-[14px] bg-gray-400 py-4 text-white font-normal rounded-tr-md rounded-tl-md uppercase "
        role="row"
      >
        <div className="">Id</div>
        <div className="">Title</div>
        <div className="">Poster</div>
        <div className="">Category</div>
        <div className="">Rating</div>
        <div className="">Year</div>
        <div className="">Seasons</div>
        <div className=""> TV_PG</div>
        <div></div>
      </header>
      <div>
        {series.map((s) => {
          const {
            id,
            title,
            description,
            poster,
            year,
            ratings,
            trending,
            number_of_season,
            stars,
            director,
            category,
            tv_pg,
          } = s;

          return (
            <main key={id} className="flex flex-col">
              <section className="grid   grid-rows-[70px]  grid-cols-[0.2fr_0.4fr_0.4fr_0.4fr_0.3fr_0.4fr_0.4fr_0.5fr_4rem]   gap-x-[1rem]  text-[14px]   items-center  w-full  text-center border-b border-b-gray-200 cursor-pointer pb-1 relative">
                <h2 className="">{id}</h2>
                <h2 className="text-[14px] ">{title}</h2>
                <img src={poster} className="w-[60px] h-[80%] m-auto" />
                <h3 className="text-[9px] grid mt-1  ">
                  {" "}
                  {category?.map((s, i) => {
                    return (
                      <p key={i} className="text-center">
                        {s.category}
                      </p>
                    );
                  })}
                </h3>
                <h6 className="">{ratings}</h6>
                <h3 className="">{year}</h3>
                <h3 className=" text-center">{number_of_season}</h3>
                <h3 className="">{tv_pg}</h3>
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
            </main>
          );
        })}
      </div>
      <div>
        <Pagination count={count} />
      </div>
    </section>
  );
}

export default SeriesTable;
{
  /*   {optionsId === id && optionsModal && (
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
 */
}
