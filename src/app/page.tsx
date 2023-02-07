import LogInBtn from "@/components/LogInBtn";
import "@/app/globals.css"

type  Data = {
  name: string
  description: string
}

export default async function Home() {

  const data = await(
    await fetch(`${process.env.NEXT_API_URL}/api/data`)
  ).json() as Data[];
  return (
    <>
      <header className="bg-stone-900 h-16 px-16 flex justify-center items-center font-bold text-4xl">
        A testing application
      </header>
      <LogInBtn/>
      <main className="px-10 py-5 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-5">
        {data?.map((e) => (
          <div
            className="group  hover:border-red-700 p-5 rounded-lg bg-stone-900 border border-red-900 shadow-sm hover:shadow-md duration-100 cursor-pointer shadow-stone-900"
            key={Math.random()}
          >
            <h1 className="group-hover:text-white duration-100">{e.name}</h1>
            <h3 className="text-red-900 group-hover:text-red-700 duration-100">
              {e.description}
            </h3>
          </div>
        ))}
      </main>
    </>
  );
}
