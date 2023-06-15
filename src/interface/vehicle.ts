export interface IVehicle {
    Make_ID: number,
    Make_Name: string
}

export interface IVehicleMakeModel {
    maxRecords: number,
    page?: number,
    results: IVehicle[]
}