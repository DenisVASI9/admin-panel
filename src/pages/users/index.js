import React from "react"
import MainLayout from "../../layout/admin";
import {Page, PageWrapper} from "../../components/page";
import {Row, Col, Button, Pagination} from "antd"
import {PageTitle} from "../../components/page";
import {
    Table,
    TableHeader,
    TableHeaderItem,
    TableItem,
    TableItemText
} from '../../components/table'
import {useWindowSize} from "../../core/hooks/useWindowSize";

const DesktopUsers = (props) => {
    return <Table>
        <TableHeader>
            <Row>
                <Col xs={6}><TableHeaderItem>ID</TableHeaderItem></Col>
                <Col xs={6}><TableHeaderItem>Имя</TableHeaderItem></Col>
                <Col xs={6}><TableHeaderItem>Телефон</TableHeaderItem></Col>
                <Col xs={6}><TableHeaderItem>Действия</TableHeaderItem></Col>
            </Row>
        </TableHeader>
        <TableItem>
            <Row align="center">
                <Col xs={6}>
                    <TableItemText>bvgv-2342-23fv-svvf</TableItemText>
                </Col>
                <Col xs={6}>
                    <TableItemText>Аркаша Петухов</TableItemText>
                </Col>
                <Col xs={6}>
                    <TableItemText>+7 (324) - 23 - 234</TableItemText>
                </Col>
                <Col xs={6}>
                    <Button type="primary">Открыть</Button>
                </Col>
            </Row>
        </TableItem>
        <TableItem>
            <Row align="center">
                <Col xs={6}>
                    <TableItemText>bvgv-2342-23fv-svvf</TableItemText>
                </Col>
                <Col xs={6}>
                    <TableItemText>Аркаша Петухов</TableItemText>
                </Col>
                <Col xs={6}>
                    <TableItemText>+7 (324) - 23 - 234</TableItemText>
                </Col>
                <Col xs={6}>
                    <Button type="primary">Открыть</Button>
                </Col>
            </Row>
        </TableItem>
        <TableItem>
            <Row align="center">
                <Col xs={6}>
                    <TableItemText>bvgv-2342-23fv-svvf</TableItemText>
                </Col>
                <Col xs={6}>
                    <TableItemText>Аркаша Петухов</TableItemText>
                </Col>
                <Col xs={6}>
                    <TableItemText>+7 (324) - 23 - 234</TableItemText>
                </Col>
                <Col xs={6}>
                    <Button type="primary">Открыть</Button>
                </Col>
            </Row>
        </TableItem>
    </Table>
}

const MobileUsers = (props) => {
    return <div>Мобильные юзеры</div>
}

const UsersPage = () => {

    const {width} = useWindowSize()

    return <MainLayout>
        <PageWrapper>
            <Page>
                <PageTitle>Список пользователей</PageTitle>
                {width > 400 ? <DesktopUsers /> : <MobileUsers />}
                <Pagination defaultCurrent={1} total={50} />
            </Page>
        </PageWrapper>
    </MainLayout>
}

export default UsersPage