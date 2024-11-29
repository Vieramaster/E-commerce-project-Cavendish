/**@param {{componentRef:React.RefObject<HTMLElement>, open:boolean, children: React.ReactNode, isCart:boolean, }} props */
export const NavbarComponent = ({ componentRef, open, children, isCart }) => {
  return (
    <nav
      ref={componentRef}
      className={`${open ? "right-0" : "-right-full"}
      ${isCart ? " max-w-[30rem]" : "max-w-96"} w-full
      bg-background border-l-2 border-textColor absolute min-h-[600px] h-screen  duration-700 ease-in-out flex flex-col`}
    >
      {children}
    </nav>
  );
};
