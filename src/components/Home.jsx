export default function Home() {
  return (
    <header className=" h-screen w-full flex flex-col justify-center items-center bg-red-200  ">
      <h1 className=" text-2xl text-[#000100] md:text-4xl">
        Hello, I am{" "}
        <span className="text-[#F8F8F8] font-semibold underline hover:text-cyan-300">
          Karen Diane
        </span>
      </h1>
      <p className="mt-[15px] text-base font-medium md:text-xl">Applied Biology Major, 📍 Baden-Württemberg, Germany</p>
    </header>
  );
}
