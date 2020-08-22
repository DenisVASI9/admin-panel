import styled, {css} from "styled-components";

// Components
import {FixedPanel} from "../../components/panel";
// Components

// Panels
const Panel = styled.div`
  width: 240px;
  position: fixed;
  height: 100vh;
`

export const LeftPanel = styled(Panel)`
  transition: left .3s;
  background: #1890ff;
  top: 0;
  left: ${(props) => props.isOpened ? 0 : '-240px'};
  z-index: 100;
`

export const RightPanel = styled(Panel)`
  transition: right .3s;
  background: #fff;
  top: 0;
  right: ${(props) => props.isOpened ? 0 : '-240px'};
  z-index: 100;
  box-shadow: 0 0 6px rgba(0,0,0,.1);
`
// Panels

// Page
export const PageWrapper = styled.div`
  background: #f3f5f8;
  min-height: 100vh;
  transition: margin .3s;
  padding-top: 60px;
  ${(props) => {
    if (props.leftPanelIsOpened && props.rightPanelIsOpened) {
        return css`
          margin: 0 240px;
        `
    } else if (props.leftPanelIsOpened) {
        return css`
          margin-right: 0;
          margin-left: 240px;
        `
    } else if (props.rightPanelIsOpened) {
        return css`
          margin-right: 240px;
          margin-left: 0;
        `
    } else {
        return css`
          margin: 0;
        `
    }
}}
`
// Page

// Header
export const Header = styled(FixedPanel)`
  top: 0;
  display: flex;
  justify-content: space-between;
  transition: left .3s, width .3s;
  ${(props) => {
    if (props.leftPanelIsOpened && props.rightPanelIsOpened) {
        return css`
          width: calc(100% - 480px);
          left: 240px;
        `
    } else if (props.leftPanelIsOpened) {
        return css`
          width: calc(100% - 240px);
          left: 240px;
        `
    } else if (props.rightPanelIsOpened) {
        return css`
          width: calc(100% - 240px);
          left: 0;
        `
    } else {
        return css`
          width: 100%;
          left: 0;
        `
    }
}}
`
// Header