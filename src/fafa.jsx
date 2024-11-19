  //add strings to filter the data
  /** @param {React.MouseEvent<HTMLButtonElement>} event  */
  const handleExtendFilter = ({ target }) => {
    const {
      dataset: { id: buttonData },
      id: ID,
    } = /** @type {HTMLButtonElement} */ (target);
    const index = { sizeButton: 0, colorButton: 1, typeButton: 2 }[buttonData];

    if (index !== undefined && !selectionFilter[index].includes(ID)) {
      setSelectionFilter((prev) => {
        const newFilter = [...prev[index], ID];
        return [
          index === 0 ? newFilter : prev[0],
          index === 1 ? newFilter : prev[1],
          index === 2 ? newFilter : prev[2],
        ];
      });
    }
  };
  //delete strings to filter the data
  /** @param {React.MouseEvent<HTMLButtonElement>} event  */
  const deleteFilterTag = ({ target }) => {
    const {
      dataset: { id: ID },
    } =  /** @type {HTMLButtonElement} */ (target);

    setSelectionFilter((prev) => {
      return prev.map((element) => {
        return element.includes(ID)
          ? element.filter((item) => item !== ID)
          : [...element];
      });
    });
  };

  //Clean actual filters
  const cleanFilters = () => {
    setSelectionFilter([[], [], []]);
  };

  const searchFilter = () => {
    let filteredResults = data;

    if (selectionFilter[0].length > 0) {
      // size filter
      filteredResults = filteredResults.filter((product) =>
        product.colors.some((color) =>
          selectionFilter[0].some((productSize) => color.sizes[productSize] > 0)
        )
      );
    }

    if (selectionFilter[1].length > 0) {
      // color filter
      filteredResults = filteredResults.filter((product) =>
        product.colors.some((color) =>
          selectionFilter[1].some((name) => color.colorName === name)
        )
      );
    }

    if (selectionFilter[2].length > 0) {
      // type filter
      filteredResults = filteredResults.filter((product) =>
        selectionFilter[2].some(
          (productName) => product.category === productName
        )
      );
    }
    setProgressiveArray(filteredResults);
  };



    //generate more cards for the screen
    const handleMoreData = () => {
        if (progressiveArray.length < data.length) {
          const newNumbers = [numberArray[0] + 8, numberArray[1] + 8];
          setNumberArray(newNumbers);
          const newCards = nextCards(newNumbers[0], newNumbers[1], data);
          setProgressiveArray((prev) => [...prev, ...newCards]);
        } else {
          setDataButton(false);
        }
      };
    
      /** @param {React.ChangeEvent<HTMLSelectElement>} event*/
      const handleSelect = (event) => {
        setSelectedOption(event.target.value);
      };
    
      const filters = {
        "title-ascending": () => alphabeticFilter(data, setProgressiveArray, true),
        "title-descending": () =>
          alphabeticFilter(data, setProgressiveArray, false),
        "price-ascending": () => priceFilter(data, setProgressiveArray, true),
        "price-descending": () => priceFilter(data, setProgressiveArray, false),
        default: () => setProgressiveArray(data),
      };
    
      useEffect(() => {
        if (data) {
          setLoadingData(true);
          let changeArray = nextCards(numberArray[0], numberArray[1], data);
          setProgressiveArray(changeArray);
          setNumberArray([0, 8]);
          setDataButton(true);
          setLoadingData(false);
        }
    
        if (selectedOption) {
          filters[selectedOption]();
        }
      }, [data, selectedOption]);

  
      /*** @param {number} prevNumber @param {number} newNumber @param {ClothesObject[]} array @returns {ClothesObject[]} */
      const nextCards = (prevNumber, newNumber, array) => {
        return array.slice(prevNumber, newNumber);
      };
    