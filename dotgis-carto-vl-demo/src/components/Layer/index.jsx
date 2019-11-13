import React from 'react';
import PropTypes from 'prop-types';
import carto from '@carto/carto-vl';

const LAYER_CONFIG = {
  QUERY: 'SELECT cartodb_id, the_geom_webmercator, description FROM alcoy',
  USERNAME: 'dotgis',
  API_KEY: 'default_public'
} 

class Layer extends React.Component {

  static propTypes = {
    map: PropTypes.any.isRequired
  };

  componentDidMount() {
      this._addLayer();
  }

  _addLayer = () => {
    const { map } = this.props;

    const source = new carto.source.SQL(LAYER_CONFIG.QUERY, {
      username: LAYER_CONFIG.USERNAME,
      apiKey: LAYER_CONFIG.API_KEY
    });

    const viz = new carto.Viz(`
      @v_histogram: viewportHistogram($description, [[1, 2], [2, 3], [3, 4], [4, 5]])
      color: opacity(ramp($description, BOLD), .6)
      strokeColor: rgb(0, 255, 153)
      width: 75 * animation($description, 5, fade(1, 2))
      strokeWidth: 2
    `);

    const layer = new carto.Layer('test-layer', source, viz);

    try {
      layer.addTo(map, 'waterway-label');
    } catch(err) {
      throw new Error (`Could not render the layer: ${err}`)
    };

    layer.on('updated', () => {
      const histogram = layer.viz.variables.v_histogram;
      const histogramData = histogram.value;
      this.props.onViewportHistogram(histogramData);
    });
  };

  render() {
    return null;
  }
}

export default Layer;