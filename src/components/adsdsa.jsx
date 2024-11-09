
//add strings to filter the data
/** @param {React.MouseEvent<HTMLButtonElement>} event  */
const handleFilter = ({ target }) => {
  const {
    id: ID,
    dataset: { id: buttonData },
  } = target;
  const index = { sizeButton: 0, colorButton: 1, typeButton: 2 }[buttonData];

  if (index !== undefined && !selectionFilter[index].includes(ID)) {
    ArrayFilter((prev) => {
      const newFilter = [...prev[index], ID];
      return [
        index === 0 ? newFilter : prev[0],
        index === 1 ? newFilter : prev[1],
        index === 2 ? newFilter : prev[2],
      ];
    });
  }
};

/** @param {React.MouseEvent<HTMLButtonElement>} event  */
/**  const deleteFilterTag = ({ target }) => {
  const {
    dataset: { id: ID },
  } = target;

  setSelectionFilter((prev) => {
    return prev.map((element) => {
      return element.includes(ID)
        ? element.filter((item) => item !== ID)
        : [...element];
    });
  });
};
*/