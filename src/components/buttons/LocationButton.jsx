/**@param {{localName:string,city:string,direction:string,phone:string, icon:JSX.Element} & JSX.IntrinsicElements["button"] } props */
export const LocationButton = ({
  localName,
  city,
  direction,
  phone,
  icon,
  ...props
}) => {
  return (
    <button className="flex gap-10 w-full h-full" {...props}>
      <div className="  size-5  fill-hover">{icon}</div>
      <div className="w-5/6 h-full text-start">
        <h3 className="font-semibold font-alternative text-lg">{localName}</h3>
        <p>{city}</p>
        <p> {direction}</p>
        <br />
        <p>{phone}</p>
      </div>
    </button>
  );
};
