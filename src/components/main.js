import React from "react"
import "mdbreact/dist/css/mdb.css"
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn,
} from "mdbreact"
import MINESMALL from "../images/mining.jpg"
const Main = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="7">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Who we are</strong>
            </h3>
            <p>
              Extract Geoservices is an incorporated Ghanaian Company that
              focuses in Mineral exploration, mining and mining advisory
              services and mine support services. Extract Geoservices is
              supported by Consultants leveraging many years of experience in
              the industry
            </p>

            <MDBBtn color="dark" size="md" className="mb-lg-0 mb-4 waves-light">
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img className="img-fluid" src={MINESMALL} alt="" />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
      </MDBCardBody>
    </MDBCard>
  )
}

export default Main
