"use client";

import useSWR, { Fetcher } from "swr";
import React, { useState } from "react";
import { IVehicleMakeModel, IVehicle } from "@/interface/vehicle";

const getVehicleRecords = async (page: string): Promise<IVehicleMakeModel> => {
  const url = `/api/vehicles/${page}/`;
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then(resolve, reject);
    }, 5000)
  );
}

const fetcher: Fetcher<IVehicleMakeModel> = (page: string) => getVehicleRecords(page);

interface IVehicleTableProps {
  children?: React.ReactNode,
  vehicles?: IVehicle[]
}

const VehicleTable = ({children, vehicles}: IVehicleTableProps) => {
  return (
    <div className="">
      <div className="overflow-y-auto">
      <table>
    <thead>
      <tr>
        <th className="w-1/3">Make</th>
        <th>Model</th>
      </tr>
    </thead>
    <tbody className="">
    {
      vehicles && 
        vehicles.map((vehicle: IVehicle, index: number) => {
          return (
            <tr key={index}>
              <td>{vehicle.Make_ID}</td>
              <td>{vehicle.Make_Name}</td>
            </tr>
          )
        })
    }
    </tbody>
   </table>

      </div>
    </div>
  )
}



const HomePageOld = () => {

  const [pageIndex, setPageIndex] = useState<number>(1)
  const {data, isLoading, error} = useSWR<IVehicleMakeModel>(`${pageIndex}`, fetcher);

  return (
    <main className="flex flex-col w-full h-full">
      <div className="w-full">
        <div className="flex flex-col space-y-4">
          <div id="table" className="flex-grow w-full">
            {
              (isLoading) ? <div>Loading ...</div> : <VehicleTable vehicles={data?.results} />

            }
          </div>
          <div id="buttons" className="flex-none h-32">
            <div className="flex flex-row w-full space-x-4 p-5">
              <button className="border-[1px] border-slate-400 px-4 py-2" onClick={() => {
                setPageIndex((pageIndex) => pageIndex-1)
              }}>Prev</button>
              <button className="border-[1px] border-slate-400 px-4 py-2" onClick={() => {
                setPageIndex((pageIndex) => pageIndex+1)
              }}>Next</button>
            </div>
          </div>
          <div id="details" className="flex-none h-24 bg-slate-300 w-full">
            <div className="flex flex-col h-full">
              <div className="my-auto p-5">{
                `Page: ${pageIndex}`
              }              
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const HomePage = () => {
  return (
    <div className="bg-red-50 w-full h-full">
      <div className="flex flex-row space-x-4">
        <div className="flex-grow">

        </div>
        <div className="flex-none w-1/4 border-[1px] border-slate-300 rounded-xl">
          <div className="flex flex-col space-y-4">
            <div id="about" className="relative p-5">
              hello
            </div>
            <div id="ga_advert">

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage;