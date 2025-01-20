/**
 * @param {{
 * componentRef:React.RefObject<HTMLElement>,
 * open:boolean,
 * children: React.ReactNode,
 * isCart:boolean
 * }} props
 * */
export const NavbarComponent = ({ componentRef, open, children, isCart }) => {
  const isOpen = open ? "right-0" : "-right-full";
  const customWidth = isCart ? " max-w-[30rem]" : "max-w-96";

  return (
    <nav
      ref={componentRef}
      className={`
              bg-background 
              border-l-2
              border-textColor 
              absolute 
              min-h-[600px] 
              h-screen  
              duration-700 
              ease-in-out 
              flex 
              flex-col
              w-full 
              ${customWidth} 
              ${isOpen}
              `}
    >
      {children}
    </nav>
  );
};
