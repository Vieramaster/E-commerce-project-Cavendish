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


  //Clean actual filters

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
