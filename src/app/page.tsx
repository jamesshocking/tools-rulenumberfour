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
    <div className="w-full h-full">
      <div className="flex flex-row space-x-4">
        <div className="flex-grow">

          <section>
            <article className="flex flex-col space-y-4 text-base">
              <h2 className="text-3xl">How to Execute a REST API Call on Apache Spark the Right Way</h2>
              <div className="flex flex-row space-x-2">
                <img src="/images/social/medium.svg" className="w-6 h-6" /><a href="https://medium.com/geekculture/how-to-execute-a-rest-api-call-on-apache-spark-the-right-way-in-python-4367f2740e78" className="underline-offset-2 underline" target="_blank">Read the arcticle on Medium.com</a>
              </div>
              <p>The article is supported by a simple REST based web service that can be used for trying out the example code.  The data is sourced from the US Government at <a href="https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json" className="underline underline-offset-2" target="_blank">https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json</a></p>
              <p>The web service can be accessed via the following URL:</p>
              <code className="bg-slate-200 px-10 py-5">
              https://tools.rulenumberfour.co.uk/api/vehicles/[page]<br /><br/>

              E.g.

              https://tools.rulenumberfour.co.uk/api/vehicles/1 
              </code>
              <p>The web service accepts a single parameter via the URL itself and that is the page number itself.  It will return a maximum of 100 records per page along-with a HTTP Status Code of 200 on success.</p>
              <p>On error, (i.e. invalid page number) a status code of 405 will be returned.</p>
              <h3 className="text-xl">Schema</h3>
              <ul className="flex flex-col space-y-4">
                <li>page is the requested page number</li>
                <li>maxRecords is the total number of results in the dataset.  I.e. maxResults/100 = total pages</li>
              </ul>
              <h3 className="text-xl">Example REST API Response</h3>
              <iframe src="http://localhost:3000/api/vehicles/1" className="h-48 w-full border-[1px] border-slate-300">

              </iframe>
            </article>
          </section>

        </div>
        <div className="flex-none w-1/3">
          <div className="border-[1px] border-slate-300 rounded-xl relative bg-white mt-10">
              <img src="/images/jhocking.jpg" className="absolute w-32 h-32 ml-64 -mt-10 rounded-full border-[2px] border-slate-300" />
              <div className="px-10 pb-10 pt-10 space-y-5">
                  <h2 className="text-2xl font-bold">James Hocking</h2>
                  <ul className="flex flex-col space-y-2">
                      <li className="flex flex-row space-x-2"><img src="/images/social/linkedin.svg" className="w-6 h-6" /><a href="https://linkedin.com/in/james-hocking-marketing-data-analytics-coach" className="underline-offset-2 underline" target="_blank">LinkedIn</a></li>
                      <li className="flex flex-row space-x-2"><img src="/images/social/medium.svg" className="w-6 h-6" /><a href="https://medium.com/@james.s.hocking" className="underline-offset-2 underline" target="_blank">Medium</a></li>
                      <li className="flex flex-row space-x-2"><img src="/images/social/github.svg" className="w-6 h-6" /><a href="https://github.com/jamesshocking" className="underline-offset-2 underline" target="_blank">Github</a></li>
                  </ul>

                  <div className="space-y-4">
                    <p>Hello there,</p>
                    <p>I am James, and thank you for connecting with me.  I have been in the software development industry for some time now, 25 years, and I have a real passion for data and analytics.  I love discovering why people do what they do and helping others overcome the challenges they face.  I love to show people how data can help them to understand their customers, why they do what they do, and grow themselves.</p>
                    <p>I started programming when I was just six years old and have been hooked ever since.  I studied computing at university, where I discovered the mystery and wonders of data. I have worked in e-commerce, marketing, and sales ever since.  I now specialize in coaching others and providing them with the confidence and tools they need to succeed. </p>
                    <p>This site offers tools and demonstrations that support the articles that I write.  Check me out on Medium, or Linkedin.</p>
                  </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage;