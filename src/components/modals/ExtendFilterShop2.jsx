export const ExtendFilterShop2 = ({ toggleMenu, componentRef }) => {
  return (
    <fieldset>
<ul className={classUl}>
            {Object.entries(array[0]).map((item, index) => {
              return (
                <li key={item[0] + index}>
                  <DescriptionButton
                    letter={true}
                    disabled={!item[1]}
                    borderButton={item[1]}
                    aria-label={`${item[0]} size button`}
                    id={item[0]}
                    onClick={handleEvent}
                    data-id="sizeButton"
                  >
                    {item[0]}
                  </DescriptionButton>
                </li>
              );
            })}
          </ul>


          <ul className={classUl}>
            {array[1].map(({ name, hex }, index) => {
              return (
                <li key={name + index}>
                  <ColorButton
                    mainProduct
                    name={name}
                    aria-label={`${name} color button`}
                    onClick={handleEvent}
                    id={name}
                    data-id="colorButton"
                    style={{ backgroundColor: `${hex}` }}
                    title={name}
                  />
                </li>
              );
            })}
          </ul>
          <ul className={classUl}>
            {array[2].map((item, index) => {
              return (
                <li key={item + index}>
                  <DescriptionButton
                    borderButton
                    letter={false}
                    id={item}
                    onClick={handleEvent}
                    data-id="typeButton"
                  >
                    {item}
                  </DescriptionButton>
                </li>
              );
            })}
          </ul>

    </fieldset>
  );
};
