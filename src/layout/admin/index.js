// React
import React, {useLayoutEffect} from "react"
// React

// Components
import {LeftPanel, RightPanel, PageWrapper, Header} from "./admin.styles";
import {PanelButton, PanelButtonGroup} from "../../components/panel";
import {Logo, LogoWrapper} from "../../components/logo";
// Components

// Store
import {bindActionCreators} from "redux"
import {connect} from "react-redux";
import {triggerLeftMenu, triggerRightMenu} from "../../store/actions/layout";
// Store

// Icons
import {MenuOutlined, QuestionOutlined, LoginOutlined} from '@ant-design/icons'
// Icons

// Hooks
import {useWindowSize} from "../../core/hooks/useWindowSize";
// Hooks

const MainLayout = (props) => {

    const {
        children,
        triggerRightMenu,
        triggerLeftMenu,
        layout: {
            leftPanelIsOpened,
            rightPanelIsOpened
        }
    } = props

    const {width} = useWindowSize()

    useLayoutEffect(() => {
        if (width <= 1000) {
            triggerRightMenu(false);
            triggerLeftMenu(false);
        } else {
            triggerRightMenu(true);
            triggerLeftMenu(true);
        }
    }, [triggerLeftMenu, triggerRightMenu, width])

    return <>
        <LeftPanel isOpened={leftPanelIsOpened}>
            <LogoWrapper>
                <Logo>I wanna learn</Logo>
            </LogoWrapper>
        </LeftPanel>
        <Header
            leftPanelIsOpened={leftPanelIsOpened}
            rightPanelIsOpened={rightPanelIsOpened}
        >
            <PanelButton text="Меню" onClick={() => {
                triggerLeftMenu(!leftPanelIsOpened)
            }}>
                <MenuOutlined/>
            </PanelButton>
            <PanelButtonGroup>
                <PanelButton text="Войти">
                    <LoginOutlined/>
                </PanelButton>
                <PanelButton text="Справка" onClick={() => {
                    triggerRightMenu(!rightPanelIsOpened)
                }}>
                    <QuestionOutlined/>
                </PanelButton>
            </PanelButtonGroup>
        </Header>
        <PageWrapper
            leftPanelIsOpened={leftPanelIsOpened}
            rightPanelIsOpened={rightPanelIsOpened}
        >
            {children}
        </PageWrapper>
        <RightPanel isOpened={rightPanelIsOpened}/>
    </>
}

const mapStateToProps = (state) => {
    return {
        layout: state.layout
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        triggerLeftMenu: bindActionCreators(triggerLeftMenu, dispatch),
        triggerRightMenu: bindActionCreators(triggerRightMenu, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)