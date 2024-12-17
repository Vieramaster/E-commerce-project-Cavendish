const loaderClass =
  "border-8 border-transparent animate-spin flex items-center justify-center rounded-full";
export const LoaderPage = () => {
  return (
    <section className="w-screen h-screen bg-background   flex flex-col items-center justify-center gap-4">
      <div className={`${loaderClass} size-44  border-t-hover`}>
        <div className={`${loaderClass} size-10/12  border-t-yellow`}></div>
      </div>
    </section>
  );
};
