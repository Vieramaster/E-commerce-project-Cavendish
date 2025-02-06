import { PictureContainer } from "../PictureContainer";

/**@param {{imageArray:triadImages[]}} props */
export const TriadImages = ({ imageArray }) => {
  return (
    <ul className="w-full h-auto flex flex-col gap-4 lg:flex-row">
      {imageArray.map(({ smallImage, defaultImage, altImage }, index) => {
        return (
          <li>
            <PictureContainer
            isRounded
              key={index}
              {...{ smallImage, defaultImage, altImage }}
            />
          </li>
        );
      })}
    </ul>
  );
};
