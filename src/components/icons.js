import React from 'react'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip';


function Icon (props) {
  return(
  <Tooltip title={props.title} arrow placement="top">
  <IconImage image={props.image}></IconImage>
  </Tooltip>  
  )    
}

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
