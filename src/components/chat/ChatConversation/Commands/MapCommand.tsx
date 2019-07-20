import * as React from 'react'
import { ILocation } from '../../../../entities/responses/CommandResponse';
import { Typography, Dialog, DialogTitle, DialogActions, Button, DialogContent } from '@material-ui/core';

import { Map, TileLayer, Marker } from 'react-leaflet'
interface IMapProps {
    location: ILocation;
}
export const MapCommand = (props: IMapProps) => {
    const { location } = props;
    const [open, setOpen] = React.useState(true)
    const [zoom] = React.useState(1)
    const onClose = () => {
        setOpen(false)
    }
    const maxBounds: [number, number][] = [[64.306842, -170.830875], [-48.770408, 177.016444]]
    const bounds: [number, number][] = maxBounds


    return (
        <div>
            <Typography>Received coordinates: {location.lat}, {location.lng} </Typography>
            <Dialog
                open={open}
                onClose={() => onClose()}
                aria-labelledby='form-dialog-title'
                fullScreen={true}
            >
                <DialogTitle id='form-dialog-title'>Coordinates {location.lat}, {location.lng} ?
                </DialogTitle>
                <DialogContent>
                    <Map className='markercluster-map' zoom={zoom} minZoom={2} maxZoom={18} worldCopyJump={true} maxBounds={maxBounds} bounds={bounds}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, © <a href="https://carto.com/attribution">CARTO</a> '
                            url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png' />
                        <Marker
                            position={{ lat: location.lat, lng: location.lng }}
                        >

                        </Marker>
                    </Map>

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => onClose()} color='primary'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
