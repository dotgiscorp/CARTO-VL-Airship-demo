import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { defineCustomElements } from '@carto/airship-components/dist/loader';
import './style.scss';

defineCustomElements(window);

const Sidebar = ({ data }) => {

  const histogramRef = useRef(null);
  const [histogramData, setHistogramData] = useState(null);

  useEffect(() => {
    setHistogramData(data.map(values => ({
      start: values.x[0],
      end: values.x[1],
      value: values.y
    })));
  }, [data]);

  useEffect(() => {
    histogramRef.current.data = histogramData;
  }, [histogramData]);

  return (
    <div className="sidebar-container">
      <div className="sidebar-container-histogram">
        <as-histogram-widget
            ref={histogramRef}
            disable-interactivity
            responsive
            heading="Type"
            show-header
            show-clear>
        </as-histogram-widget>
      </div>
    </div>
    );
};

Sidebar.propTypes = {
	data: PropTypes.array.isRequired
};

export default Sidebar;