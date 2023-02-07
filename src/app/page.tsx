import LogInBtn from "@/components/LogInBtn";
import axios, { AxiosResponse } from 'axios'

type  Data = {
  name: string
  description: string
}
async function getData() {
  const res = await fetch('http://localhost:3000/api/data');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}



export default async function Home() {

  const data= await  getData() as Data[]
   
  
  
  return (
    <>
      <header className="bg-stone-900 h-16 px-16 flex justify-center items-center font-bold text-4xl">
        A testing application
      </header>
      <LogInBtn/>
      <main className="px-10 py-5 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-5">
        {data? data?.map((e) => (
          <div
            className="group  hover:border-red-700 p-5 rounded-lg bg-stone-900 border border-red-900 shadow-sm hover:shadow-md duration-100 cursor-pointer shadow-stone-900"
            key={Math.random()}
          >
            <h1 className="group-hover:text-white duration-100">{e.name}</h1>
            <h3 className="text-red-900 group-hover:text-red-700 duration-100">
              {e.description}
            </h3>
          </div>
        )):<div>drfg</div>}
      </main>
    </>
  );
}
