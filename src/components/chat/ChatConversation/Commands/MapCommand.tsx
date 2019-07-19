import * as React from 'react'
import { ILocation } from '../../../../entities/responses/CommandResponse';
import { Typography } from '@material-ui/core';
interface IMapProps {
    location: ILocation;
}
export const MapCommand = (props: IMapProps) => {
    const { location } = props;
    return (
        <div>
            <Typography>Received coordinates: {location.lat}, {location.lng} </Typography>
        </div>
    );
};
