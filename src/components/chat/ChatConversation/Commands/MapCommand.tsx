import * as React from 'react'
import { ILocation } from '../../../../entities/responses/CommandResponse';
interface IMapProps {
    location: ILocation;
}
export const MapCommand = (props: IMapProps) => {
    const { location } = props;
    return (<div>
        {location.lat}, {location.lng}
    </div>);
};
