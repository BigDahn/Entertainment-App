import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import MiniModal from "../ui/MiniModal";
import { useDispatch, useSelector } from "react-redux";
import { openMiniModal } from "../feature/EntertainmentSlice/EntertainmentSlice";
import EditBox from "../ui/EditBox";

function MovieTable({ movies }) {
  const { optionsId, isEdit, optionsModal } = useSelector(
    (store) => store.Entertainment
  );

  const dispatch = useDispatch();

  return (
    <main className="  ">
      <section className="w-full  rounded-lg  " role="table">
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
              tv_rating,
            } = s;

            console.log(tv_rating);
            return (
              <main
                key={id}
                className={`${
                  isEdit && optionsId === id
                    ? "grid grid-cols-[0.4fr_2fr_2fr_1.3fr_1fr_2fr_1fr_3rem] grid-rows-[1fr_2fr] bg-red-800    gap-x-[3rem]  text-[14px]   items-center   w-full text-center border-b border-b-gray-200 cursor-pointer pb-1 relative"
                    : "grid grid-cols-[0.4fr_2fr_2fr_1.3fr_1fr_2fr_1fr_3rem] grid-rows-[80px]  gap-x-[3rem]  text-[14px]   items-center  w-full  text-center border-b border-b-gray-200 cursor-pointer pb-1 relative"
                } `}
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
                  onClick={() => dispatch(openMiniModal({ id }))}
                />
                {optionsId === id && optionsModal && (
                  <div className="absolute flex items-end justify-end w-full top-[50px] left-[0px] z-[90]">
                    <MiniModal />
                  </div>
                )}
                <div className="fixed top-[18%]  bg-gray-100 flex w-full items-center m-auto h-fit  ">
                  {optionsId === id && isEdit ? (
                    <EditBox
                      name={title}
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
                        tv_rating: tv_rating,
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </main>
            );
          })}
        </section>
      </section>
    </main>
  );
}

export default MovieTable;
