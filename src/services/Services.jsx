import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { FaTruckMoving } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { BsDatabaseUp } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";

import './style.css'

// import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section className='service'>
        <Container>
            <Row>
            
                {/* to do install lib */}
                {/* {
                     serviceData.map((item, index) => (
                        <Col key={index} lg={3} md={6} xs={12}>
                          <div className='card' style={{ background: `${item.bg}` }}>
                            <div className='card-body d-flex'>
                              <div className='fs-1'>
                                <item.icon />
                              </div>
                              <div className='m-3'>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))
                } */}
        

                {/* card-01 */}
                <Col lg={3} md={6} xs={12}>
                    <div className="card__FaTruc card">
                        <div className="card-body d-flex">
                            <div className='fs-1'>
                                <FaTruckMoving />
                            </div>
                            <div className='m-3'>
                                <h3>free shopping</h3>
                                <p>Lorem ipsum dolor sit amet consectetur </p>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* card-02 */}
                <Col lg={3} md={6} xs={12}>
                    <div className="card__GiRet card">
                        <div className="card-body d-flex">
                            <div className='fs-1'>
                                <GiReturnArrow />
                            </div>
                            <div className='m-3'>
                                <h3>easy to returns</h3>
                                <p>Lorem ipsum dolor sit amet consectetur </p>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* card-0.3 */}
                <Col lg={3} md={6} xs={12}>
                    <div className="card__BsData card">
                        <div className="card-body d-flex">
                            <div className='fs-1'>
                                <BsDatabaseUp />
                            </div>
                            <div className='m-3'>
                                <h3>payment  secure</h3>
                                <p>Lorem ipsum dolor sit amet consectetur </p>
                            </div>
                        </div>
                    </div>
                </Col>

                    {/* card-0.4 */}
                <Col lg={3} md={6} xs={12}>
                    <div className="card__Money card">
                        <div className="card-body d-flex">
                            <div className='fs-1'>
                                <MdAttachMoney />
                            </div>
                            <div className='m-3'>
                                <h3>back guarantee</h3>
                                <p>Lorem ipsum dolor sit amet consectetur </p>
                            </div>
                        </div>
                    </div>
                </Col>



            </Row>
        </Container>
    </section>
  )
}

export default Services