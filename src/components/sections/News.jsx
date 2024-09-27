export default function News({ arrayNews, mainTitle }) {
  return (
    <section className="w-full bg-lightGrey flex justify-center">
      <div className="w-full h-auto py-10  flex flex-col gap-10 items-center justify-center ">
        <h2 className="text-carbon font-semibold text-3xl text-center lg:text-start lg:text-5xl ">
          {mainTitle}
        </h2>
        {arrayNews?.map((item) => {
          return (
            <div
              className="w-80 h-96  rounded-xl flex flex-col gap-1"
              key={item.id}
            >
              <div className="h-2/3 w-full ">
                <img
                  src={item.image}
                  alt={item.imageName}
                  className="h-full w-full bg-cover rounded-xl"
                />
              </div>
              <div className="  w-full h-1/3 flex flex-col gap-2 text-center lg:text-left text-wrap overflow-hidden truncate">
                <h3 className="font-semibold text-xl ">{item.newsTitle}</h3>
                <p>{item.introduction}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
