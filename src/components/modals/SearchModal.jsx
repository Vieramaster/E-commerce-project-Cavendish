import React, { useState, useEffect, useCallback } from "react";
import { useFetch } from "../../hooks/useFetch";

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

  /**@type {SearchList[] | null} */
  const [nameList, setNameList] = useState([]);

  const [dataChoise, setDataChoise] = useState({
    name: "",
    product: 0,
  });
  const { data: searchData } = useFetch("");

  /**@type {React.ChangeEventHandler<HTMLInputElement>} */
  const onSearchValue = useCallback(
    ({ currentTarget: { value } }) => {
      setNameList([]);
      setInputSearch(value);

      if (!searchData || !Array.isArray(searchData)) {
        console.error("searchData is invalid or empty:", searchData);
        return;
      }

      const result = searchData.filter((product) =>
        product.name?.toLowerCase().includes(value.toLowerCase())
      );

      if (result && value.length > 0) {
        const names = result.flatMap((item) => ({
          name: item.name,
          idProduct: item.idProduct,
        }));
        setNameList(names);
      } else setNameList([]);
    },
    [searchData]
  );

  //restart the form if you close it
  useEffect(() => {
    if (!open) {
      setInputSearch("");
      setNameList([]);
    }
  }, [open]);

  /** @type {React.ChangeEventHandler<HTMLSelectElement>} */
  const handleChosenClothes = ({ currentTarget }) => {
    const {
      dataset: { id: idProduct, name: name },
    } = currentTarget;

    console.log(idProduct, name);
  };
  return (
    <fieldset
      ref={componentRef}
      className={`fixed ${
        open ? "top-28 opacity-100" : "top-5 opacity-0"
      } h-14 w-full duration-500 ease-in-out transition-all flex justify-center items-center bg-white lg:h-20 z-40 gap-5`}
    >
      <form
        className="w-4/6 max-w-[40rem] h-2/3 rounded-md relative lg:w-5/6 flex items-center justify-center"
        autoComplete="off"
      >
        <span className="h-full w-10 grid place-content-center bg-lightGrey lg:w-20 text-lightTextColor">
          <SearchIco />
        </span>
        <span className="h-2/3 w-[0.1rem] bg-customGrey absolute left-10 lg:left-16"></span>
        <input
          className="outline-none bg-lightGrey w-full h-full pl-3 "
          type="search"
          name="search"
          aria-label="search bar"
          placeholder="What are you looking for?"
          value={inputSearch}
          onChange={onSearchValue}
          required
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
