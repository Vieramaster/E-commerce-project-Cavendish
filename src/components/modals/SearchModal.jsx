import React, { useState, useEffect, useCallback } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useProductFinder } from "../../hooks/useSelectFilters";
import { useSearchValue } from "../../hooks/useZustand";
import { useNavigate } from "react-router-dom";

//icos
import { SearchIco } from "../SVGs/icons/SearchIco";
import { XIco } from "../SVGs/icons/XIco";
//components
import { BasicButton } from "../buttons/BasicButton";
import { InputSearchList } from "../lists/InputSearchList";
import "../../types";

/**@param {{componentRef: React.RefObject<HTMLFieldSetElement>, toggle: () => void, open: boolean}} props*/
export const SearchModal = ({ toggle, componentRef, open }) => {
  const [inputSearch, setInputSearch] = useState("");

  /** @type {[ClothesObject[] | undefined, React.Dispatch<React.SetStateAction<ClothesObject[] | undefined>>]} */
  const [nameList, setNameList] = useState(
    /** @type {ClothesObject[] | undefined} */ ([])
  );

  //Zustand hook
  const { setSearchValue } = useSearchValue();
  //Router hook
  const navigate = useNavigate();

  const { data } = useFetch(
    "/data/clothes_for_e-commerse.json",
    undefined,
    null
  );

  /**@type {React.ChangeEventHandler<HTMLInputElement>} */
  const onSearchValue = useCallback(
    ({ currentTarget: { value } }) => {
      setNameList([]);
      setInputSearch(value);

      if (!data || !Array.isArray(data)) {
        console.error("data is invalid or empty:", data);
        return;
      }

      const result = useProductFinder(data, value);
      result.length > 0 ? setNameList(result) : undefined;
    },
    [data]
  );

  /**
   * @param {React.MouseEvent<HTMLButtonElement>} event
   */
  const handleChosenClothes = (event) => {
    event.preventDefault();

    const {
      currentTarget: {
        dataset: { name: name },
      },
    } = event;

    if (name !== undefined) {
      setNameList([]);
      setInputSearch(name);
    }
  };

  //restart the form if you close it
  useEffect(() => {
    if (!open) {
      setInputSearch("");
      setNameList([]);
    }
  }, [open]);

  const handleKeyDown = (
    /** @type {{ key: string; preventDefault: () => void; }} */ event
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    setSearchValue(inputSearch);
    navigate("/shop/search");
  };

  return (
    <fieldset
      ref={componentRef}
      className={`fixed ${
        open ? "top-28 opacity-100" : "top-5 opacity-0"
      } h-14 w-full duration-500 ease-in-out transition-all flex justify-center items-center bg-white lg:h-20 z-40 gap-5`}
    >
      <form
        onSubmit={handleSubmit}
        className="w-4/6 max-w-[40rem] h-2/3 rounded-md relative lg:w-5/6 flex items-center justify-center"
        autoComplete="off"
      >
        <span className="h-full w-10 grid place-content-center bg-lightGrey lg:w-20 text-lightTextColor">
          <SearchIco />
        </span>
        <span className="h-2/3 w-[0.1rem] bg-customGrey absolute left-10 lg:left-16"></span>
        <input
          className="outline-none bg-lightGrey w-full h-full pl-3"
          type="search"
          name="search"
          aria-label="search bar"
          placeholder="What are you looking for?"
          value={inputSearch}
          onChange={onSearchValue}
          autoComplete="off"
          required
          onKeyDown={handleKeyDown}
        />

        <InputSearchList
          list={nameList}
          value={inputSearch}
          {...{ handleChosenClothes }}
        />
      </form>

      <BasicButton
        onClick={toggle}
        aria-label="close searchbar"
        responsive={false}
      >
        <XIco />
      </BasicButton>
    </fieldset>
  );
};
