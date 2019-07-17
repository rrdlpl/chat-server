export interface ICommandResponse {
    type: string
    command: ICommand
}

export interface ICommand {
    type: "date" | "map" | "rate" | "complete"
    data: string | number[] | string[] | ILocation
}

export interface ILocation {
    lat: number
    lng: number
}