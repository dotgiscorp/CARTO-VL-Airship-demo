import React, { useState, useEffect, useRef } from 'react';
import { defineCustomElements } from '@carto/airship-components/dist/loader';
import './style.scss';

defineCustomElements(window);

const Sidebar = ({ data, setFilter }) => {

  const HISTOGRAM_REF = useRef();
  const [histogramData, setHistogramData] = useState(null);

  useEffect(() => {
    HISTOGRAM_REF.current.addEventListener('selectionChanged', event => {
      if (event.detail === null) {
        setFilter('');
      } else {
        const filterString = `between($description, ${event.detail.selection[0]}, ${event.detail.selection[1]})`;
        setFilter(filterString);
      }
    });
  }, []);

  useEffect(() => {
    setHistogramData(data.map(values => ({
      start: values.x[0],
      end: values.x[1],
      value: values.y
    })));
  }, [data]);

  useEffect(() => {
    HISTOGRAM_REF.current.data = histogramData;
  }, [histogramData]);

  return (
    <div className="sidebar-container">
      <div className="sidebar-container-histogram">
        <as-histogram-widget
            ref={HISTOGRAM_REF}
            heading="Type"
            show-header
            show-clear>
        </as-histogram-widget>
      </div>
    </div>
    );
};

export default Sidebar;