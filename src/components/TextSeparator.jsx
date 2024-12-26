
/** @param {{ children: string }} props */
export const TextSeparator = ({children}) => {
  return (
    <div className="w-full h-5 flex items-center justify-center gap-2 mt-5">
      <span className="h-[1px] w-5/12 bg-border" />
      <p className="w-1/12 text-center">{children}</p>
      <span className="h-[1px] w-5/12 bg-border" />
    </div>
  );
};
