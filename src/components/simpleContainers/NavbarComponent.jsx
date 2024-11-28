/**@param {{componentRef:React.RefObject<HTMLElement>, open:boolean, children: React.ReactNode, isCart:boolean, }} props */
export const NavbarComponent = ({
  componentRef,
  open,
  children,
  isCart,

}) => {
  return (
    <nav
      ref={componentRef}
      className={`${open ? "right-0" : "-right-full"}
      ${isCart ? "w-full lg:w-2/3" : "w-2/3"}
      bg-background border-l-2 border-textColor absolute min-h-[600px] h-screen max-w-96 duration-700 ease-in-out flex flex-col`}
    >
      {children}
    </nav>
  );
};
