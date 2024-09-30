import GoToPageButton from "../buttons/GoToPageButton";

export default function News({ arrayNews, mainTitle }) {
  return (
    <section className="w-full bg-lightGrey py-16 text-carbon">
      <div className="w-full h-full lg:w-5/6 m-auto ">
        <h2 className="font-semibold text-3xl text-center lg:text-start lg:text-5xl ">
          {mainTitle}
        </h2>
        <div className="w-full h-auto  mt-10 flex flex-col gap-10 items-center justify-center lg:flex-row lg:gap-20 ">
          {arrayNews?.map((item) => {
            return (
              <div
                className="w-80 h-96  rounded-xl flex flex-col gap-1 lg:w-1/3 lg:h-auto"
                key={item.id}
              >
                <div className="h-2/3 w-full relative">
                  <img
                    src={item.image}
                    alt={item.imageName}
                    className="h-full w-full bg-cover rounded-xl"
                  />
                  <div className="absolute bg-yellow bottom-3 left-3 px-3 py-2 rounded-xl ">
                    <p className=" font-semibold">17/05/2022</p>
                  </div>
                  <GoToPageButton />
                </div>
                <div className="  w-full h-1/3 flex flex-col gap-2 text-center lg:text-left text-wrap overflow-hidden truncate">
                  <h3 className="font-semibold text-xl ">{item.newsTitle}</h3>
                  <p>{item.introduction}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
