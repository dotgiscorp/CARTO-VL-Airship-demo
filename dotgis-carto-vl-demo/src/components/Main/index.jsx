import React, { Fragment } from 'react';
import ReactMapboxGL, { MapContext } from 'react-mapbox-gl';
import Layer from '../Layer';
import Sidebar from '../Sidebar';

const Map = ReactMapboxGL({
  accessToken: 'pk.eyJ1IjoiZG90Z2lzIiwiYSI6ImNqd3Z6amtjMTBjOTA0OW84ZjVvYzF6bjQifQ.LIbUaYq3GaiWTzsBV6YnTA'
});

const MAP_CONFIG = {
  BASEMAP: 'mapbox://styles/dotgis/cjy5jaxp10qyc1cqurvmoc05v',
  CENTER: [-0.48, 38.71],
  ZOOM: [14],
  PITCH: [60]
}

class Main extends React.Component {

  state = {
    mainData: []
  }

  render() {
    const { mainData } = this.state;

    return (
      <Fragment>
        <Map
          style={MAP_CONFIG.BASEMAP}
          center={MAP_CONFIG.CENTER}
          zoom={MAP_CONFIG.ZOOM}
          pitch={MAP_CONFIG.PITCH}
          containerStyle={{ position: 'absolute', height: '100%', width: '100%' }}
        >
          <MapContext.Consumer>
            {map => 
              <Layer
                map={map}
                onViewportHistogram={data => {
                  this.setState({ mainData: data })
                }}
              />
            }
          </MapContext.Consumer>
        </Map>
        {mainData && <Sidebar data={mainData} />}
      </Fragment>
    );
  }
}

export default Main;