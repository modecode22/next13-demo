import LogInBtn from "@/components/LogInBtn";
import "@/app/globals.css"
import TheData from "@/components/TheData";



export default  function Home() {


  return (
    <>
      <header className="bg-stone-900 h-16 px-16 flex justify-center items-center font-bold text-4xl">
        A testing application
      </header>
      <LogInBtn/>
      <TheData/>
    </>
  );
}
