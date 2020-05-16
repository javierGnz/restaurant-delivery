import React from 'react'
import Status from './Status';
import Details from './Details';
import "./styles.scss";

const Track = () => {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-6 px-0">
            <div className="map"></div>
          </div>
          <div className="col-lg-5 col-md-6">
            <Status />
            <Details />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Track
