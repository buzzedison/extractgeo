import React, { Component } from "react"
import "mdbreact/dist/css/mdb.css"
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
} from "mdbreact"
import "./slider.css"
import MINING from "../images/minetech.png"

class Slider extends Component {
  render() {
    return (
      <div id="apppage">
        <div>
          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer>
                <MDBRow>
                  <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      Mineral exploration, mining and mining advisory services
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                      To be an ideal partner of choice to our clients and
                      customers and provide irreplaceable services that add
                      significant value
                    </h6>
                    <MDBBtn color="dark">Quotation</MDBBtn>
                    <MDBBtn outline color="white">
                      About us
                    </MDBBtn>
                  </div>
                  <MDBCol md="6" xl="5" className="mt-xl-5">
                    <img src={MINING} alt="" className="img-fluid" />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </div>
      </div>
    )
  }
}

export default Slider
