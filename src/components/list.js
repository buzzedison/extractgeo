import React from "react"
import { MDBContainer } from "mdbreact"

const List = props => {
  return (
    <MDBContainer>
      <ul
        style={{
          listStyle: "none",
          textTransform: "uppercase",
        }}
      >
        <li>Mining</li>
        <li> Mineral Exploration Services</li>
        <li> Mine and Laboratory Services</li>
        <li> Mineral Exploration Services </li>
      </ul>
    </MDBContainer>
  )
}

export default List
