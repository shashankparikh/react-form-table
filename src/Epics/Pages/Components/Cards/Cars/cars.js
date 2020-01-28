import React, { Fragment } from 'react'
import Car from './Car/car'

const Cars = props => (
  <Fragment>
    <Car carData={props.carsData} />
  </Fragment>
)

export default Cars
