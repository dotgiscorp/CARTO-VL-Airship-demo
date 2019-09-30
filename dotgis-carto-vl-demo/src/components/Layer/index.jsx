import React from 'react';
import PropTypes from 'prop-types';
import carto from '@carto/carto-vl';

const LAYER_CONFIG = {
  QUERY: 'SELECT cartodb_id, the_geom_webmercator, description FROM alcoy',
  USERNAME: 'dotgis',
  API_KEY: 'default_public'
} 

class Layer extends React.Component {

  state = {
      viz: null
  };

  static propTypes = {
    map: PropTypes.any.isRequired
  };

  componentDidMount() {
      this._addLayer();
  }

  componentWillReceiveProps(nextProps) {
    const { filter } = this.props;

    if (nextProps.filter !== filter) {
      this._updateVizProp(filter);
    };
  }

  _addLayer = () => {
    const { map } = this.props;

    const source = new carto.source.SQL(LAYER_CONFIG.QUERY, {
      username: LAYER_CONFIG.USERNAME,
      apiKey: LAYER_CONFIG.API_KEY
    });

    const viz = new carto.Viz(`
      @v_histogram: viewportHistogram($description)
      color: opacity(ramp($description, BOLD), .6)
      strokeColor: rgb(0, 255, 153)
      strokeWidth: 2
    `);

    const layer = new carto.Layer('test-layer', source, viz);

    try {
      layer.addTo(map, 'waterway-label');
    } catch(err) {
      throw new Error (`Could not render the layer: ${err}`)
    };

    this.setState({
        viz: viz
    });

    layer.on('updated', () => {
      const histogram = layer.viz.variables.v_histogram;
      const histogramData = histogram.value;
      this.props.onViewportHistogram(histogramData);
    });
  };

  _handleError = (error) => {
    const err = `Invalid viz: ${error}:${error.stack}`;
    console.warn(err);
  };

  _updateVizProp = (value) => {
    const { viz } = this.state;

    try {
      if (viz) {
        viz['filter'].blendTo(value).catch(error => {
          this._handleError(error);
        });
      }
    } catch (error) {
      this._handleError(error);
    }
  }

  render() {
    return null;
  }
}

export default Layer;