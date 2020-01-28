import React, { Fragment } from 'react'
import {  Col } from 'antd';
import { CardContainer,RowContainer } from './style'


const Car = props => (
  <Fragment>
      <RowContainer gutter={16}>
    {props.carData.map(item => {
      return (
      
        <Col className="gutter-row" span={12}>
        <CardContainer
          title={item.title}
          extra={<a href='#'>More</a>}
          style={{ width: 400 }}
        >
          <p>adsfdgfhg</p>
          <p>Price: $1234567</p>
        </CardContainer>
        </Col>
        
      )
    })}
    </RowContainer>
  </Fragment>
)

export default Car
