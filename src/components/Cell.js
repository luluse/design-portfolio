import React from 'react'
import styled from 'styled-components'

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
  min-width: 320px;
`
const CellImage = styled.div`
  width: 60px;
  height: 60px;
  border: solid 2px #212C4F;
  border-radius: 10px;
  background-image: url(${props => props.image});
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center;
`
const CellTitle = styled.div`
  font-size: 24px;
  border-bottom: 1px solid rgba(0,0,0, 0.1);
  padding: 30px 0;
`