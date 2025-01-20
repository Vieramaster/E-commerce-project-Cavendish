import { NewsCard } from "../cards/NewsCard";

/** @param {{arrayNews: news[], error:boolean}} props*/

export const News = ({ arrayNews, error }) => {
  return (
    <section
      className=" w-5full lg:w-5/6 mx-auto py-16 text-textColor grid gap-10 "
      aria-labelledby="men-news "
    >
      <h2
        className="text-textColor font-semibold text-4xl text-center lg:text-start lg:text-5xl "
        id="men-news"
      >
        Men news
      </h2>
      <ul className="w-full grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-4 ">
        {!error &&
          arrayNews?.map(
            (
              { description, publishedAt, title, url, urlToImage, author },
              index
            ) => {
              return (
                <li
                  className="w-80 h-[30rem]  mx-auto rounded-md overflow-hidden bg-lightGrey lg:w-full lg:h-[35rem]"
                  key={author + index}
                >
                  <NewsCard
                    image={urlToImage}
                    imageAlt={author + "news"}
                    toPage={url}
                    date={publishedAt.split("T")[0]}
                    title={title}
                    description={description ? description.slice(0, 200) : ""}
                  />
                </li>
              );
            }
          )}
      </ul>
    </section>
  );
};

/**
 *  <div className="w-full h-full lg:w-5/6 m-auto ">
        <h2 className="text-textColor font-semibold text-3xl text-center lg:text-start lg:text-5xl ">
          Men news
        </h2>
        <ul className="w-full h-auto mt-10  grid grid-cols-1 gap-10 lg:grid-cols-2 2xl:grid-cols-4">
          {!error &&
            arrayNews?.map(
              (
                { description, publishedAt, title, url, urlToImage, author },
                index
              ) => {
                return (
                  <li
                    className="w-80 h-[30rem]  mx-auto rounded-md overflow-hidden bg-lightGrey"
                    key={author + index}
                  >
                    <NewsCard
                      image={urlToImage}
                      imageAlt={author + "news"}
                      toPage={url}
                      date={publishedAt.split("T")[0]}
                      title={title}
                      description={description ? description.slice(0, 200) : ""}
                    />
                  </li>
                );
              }
            )}
        </ul>
      </div>
 */
