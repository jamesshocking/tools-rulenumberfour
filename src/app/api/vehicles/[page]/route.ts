import { NextResponse } from "next/server";

import { IVehicle, IVehicleMakeModel } from "@/interface/vehicle";
import { MakeModelData } from "@/data/makemodel";

export const GET = async (request: Request, {params} : {
    params: { page: number }
}) => {

    const RECORD_LENGTH = 20;

    const data: IVehicleMakeModel = MakeModelData;
    const data_size: number = data.results?.length;
    
    const pageStart = (params.page && params.page > 1) ? params.page*RECORD_LENGTH : 0;
    const pageEnd = pageStart+RECORD_LENGTH;

    const MAX_PAGE = Math.floor(data_size/RECORD_LENGTH);

    if(!params?.page || params?.page < 1 || params?.page > MAX_PAGE) {
        return new Response(JSON.stringify({ error: `Invalid page number: ${params.page}`}), {
            status: 405
        })
    }

    const responseData : IVehicleMakeModel = {
        page: params.page,
        maxRecords: data_size,
        results: data.results.slice(pageStart, pageEnd)
    }

    return new Response(
        JSON.stringify(responseData), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    });
}