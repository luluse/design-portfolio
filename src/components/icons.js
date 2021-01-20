import React from 'react'
import styled from 'styled-components'

const Icon = props => (
   
  <IconImage image={props.image}></IconImage>
        
)

export default Icon


const IconImage = styled.div`
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 10px;
  background-image: url(${props => props.image});
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center; 

`
