//@ts-nocheck
export const fafa = () => {
  return (
    <nav
      ref={componentRef}
      className={` absolute z-20 w-full h-auto p-5 bg-lightGrey text-center font-semibold border-b-2 border-lightCarbon lg:flex items-center duration-500 ease-in-out ${
        toggleMenu ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <h3 className={classTitle}>Sizes:</h3>
        <ul className={classBox}>
          {Object.entries(array[0]).map((item, index) => {
            return (
              <li key={item[0] + index}>
                <DescriptionButton
                  letter={true}
                  disabled={!item[1]}
                  borderButton={item[1]}
                  aria-label={`${item[0]} size button`}
                >
                  {item[0]}
                </DescriptionButton>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3 className={classTitle}>Sizes:</h3>
        <ul className={classBox}>
          {array[1].map((item, index) => {
            return (
              <li key={item.name + index}>
                <ColorButton name={item.name} hex={item.hex} />
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3 className={classTitle}>Sizes:</h3>
        <ul className={classBox}>
          <span className={classTitle}>Type:</span>
          {array[2].map((item, index) => {
            return (
              <li key={item + index}>
                <DescriptionButton borderButton letter={false}>
                  {item}
                </DescriptionButton>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};


<nav
      ref={componentRef}
      className={` absolute z-20 w-full h-auto p-5 bg-lightGrey text-center font-semibold border-b-2 border-lightCarbon lg:flex items-center duration-500 ease-in-out ${
        toggleMenu ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className={classBox}>
        <span className={classTitle}>Sizes:</span>
        {Object.entries(array[0]).map((item, index) => {
          return (
            <li key={item[0] + index}>
              <DescriptionButton
                letter={true}
                disabled={!item[1]}
                borderButton={item[1]}
                aria-label={`${item[0]} size button`}
              >
                {item[0]}
              </DescriptionButton>
            </li>
          );
        })}
      </ul>

      <ul className={classBox}>
        <span className={classTitle}>Colors:</span>
        {array[1].map((item, index) => {
          return (
            <li key={item.name + index}>
              <ColorButton name={item.name} hex={item.hex} />
            </li>
          );
        })}
      </ul>
      <ul className={classBox}>
        <span className={classTitle}>Type:</span>
        {array[2].map((item, index) => {
          return (
            <li key={item + index}>
              <DescriptionButton borderButton letter={false}>
                {item}
              </DescriptionButton>
            </li>
          );
        })}
      </ul>
    </nav>