/** @param {{ children: React.ReactNode }} props */
export const NavbarUL = ({ children }) => {
  return (
    <ul className="text-textColor  text-lg flex flex-col gap-2 mb-3 lg:text-2xl">
      {children}
    </ul>
  );
};
