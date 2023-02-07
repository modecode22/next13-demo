"use client"

import { useQuery } from "react-query";

type  Data = {
  name: string
  description: string
}
const TheData = () => {

const { isLoading, data, error } = useQuery({
    queryKey: "data",
    queryFn:async ()=>{
        const data = await(
          await fetch(`${process.env.NEXT_API_URL}/api/data`)
        ).json() as Data[]; 
    return data
    },
})

if (isLoading) {
    return <div>⏳ Loading</div>
}

if (data) {
    return  <main className="px-10 py-5 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-5">
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
}

return <div>🚫 Nay! (Error)</div>

}

export default TheData
