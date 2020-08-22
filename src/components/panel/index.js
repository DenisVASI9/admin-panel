// React
import React from "react"
// React

import styled from "styled-components";

export const Panel = styled.div`
    height: 60px;
    padding: 0 16px;
    background: #332e2a;
`

export const FixedPanel = styled(Panel)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
`

const StyledPanelButton = styled.button`
   display: flex;
   padding: 11px 10px;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   height: 100%;
   cursor: pointer;
   border: none;
   outline: none;
   background: none;
   color: white;
   &:hover {
    background: rgba(0,0,0,.2);
   }
   span.btn-text {
    font-size: 13px;
    font-family: Arial, sans-serif;
   }
`

export const PanelButton = (props) => {

    const {text, children, ...etc} = props

    return <StyledPanelButton {...etc}>
        {props.children}
        <span className="btn-text">
            {props.text}
        </span>
    </StyledPanelButton>
}

export const PanelButtonGroup = styled.div`
  height: 100%;
  display: flex;
`