/**
 * @param {JSX.IntrinsicElements["button"] & {
*   right: boolean,
*   opacity: boolean,
*   maxSize: boolean
* }} props
*/
export const ArrowCardButton = ({ right, opacity, maxSize, ...props }) => {

 const position = right ? "right-0" : "left-0";


 const changeOpacity = opacity
   ? "hover:opacity-10 hover:cursor-not-allowed"
   : "hover:opacity-50";


 const changeSize = maxSize ? "size-20" : "size-14";

 return (
   <button
     className={`
       absolute
       top-1/2
       transform
       -translate-y-1/2
       z-10
       py-2
       px-1
       rounded-md
       duration-300
       ease-in-out
       fill-textColor
       opacity-10
       ${position}
       ${changeOpacity}
       ${changeSize}
     `}
     {...props}
   >
     {props.children}
   </button>
 );
};
