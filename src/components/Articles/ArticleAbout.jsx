/**
 * @param {{
*   title: string,
*   text: string,
*   labelledby: string
* }} props
*/
export const ArticleAbout = ({ title, text, labelledby }) => {
 return (
   <article className="flex gap-5 justify-between" aria-labelledby={labelledby}>
     <h2
       className="w-full h-full font-semibold text-3xl text-start flex items-center lg:w-1/2"
       id={labelledby}
     >
       {title}
     </h2>
     <p className="w-full lg:w-1/2 text-xl">{text}</p>
   </article>
 );
};
