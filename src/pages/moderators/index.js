import React, {useState} from "react"
import MainLayout from "../../layout/admin";
import {Page, PageWrapper, PageTitle} from "../../components/page";
import {Row, Col, Button, Pagination, Modal, Form, Input, Checkbox} from "antd"
import {
    Table,
    TableHeader,
    TableHeaderItem,
    TableItem,
    TableItemText
} from '../../components/table'
import {
    ModeratorsActions
} from "./moderatos.styles";
import {useWindowSize} from "../../core/hooks/useWindowSize";

const DesktopModerators = (props) => {
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

const MobileModerators = (props) => {
    return <div>Мобильные модераторы</div>
}

const ModeratorsPage = () => {

    const {width} = useWindowSize()
    const [isModalShowed, setModalState] = useState(false)

    const handleOk = () => {
        setModalState(false)
    }

    const handleCancel = () => {
        setModalState(false)
    }

    return <MainLayout>
        <PageWrapper>
            <Page>
                <Row align="center">
                    <Col xs={12}>
                        <PageTitle>Список модераторов</PageTitle>
                    </Col>
                    <Col xs={12}>
                        <ModeratorsActions>
                            <Button type="primary" onClick={() => (setModalState(true))}>Приграсить</Button>
                        </ModeratorsActions>
                    </Col>
                </Row>
                {width > 400 ? <DesktopModerators /> : <MobileModerators />}
                <Pagination defaultCurrent={1} total={50} />
            </Page>
        </PageWrapper>
        <Modal
            title="Пригласить модератора"
            visible={isModalShowed}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form>
                <Form.Item>
                    <Input placeholder="ID или телефон"/>
                </Form.Item>
            </Form>

            <h4>Подходящие кандидаты</h4>
            <Table>
                <TableHeader>
                    <Row>
                        <Col xs={8}><TableHeaderItem>ID</TableHeaderItem></Col>
                        <Col xs={8}><TableHeaderItem>Телефон</TableHeaderItem></Col>
                        <Col xs={8}><TableHeaderItem>Действия</TableHeaderItem></Col>
                    </Row>
                </TableHeader>
                <TableItem>
                    <Row>
                        <Col xs={8}><TableItemText>4243-2424-2552-1235</TableItemText></Col>
                        <Col xs={8}><TableItemText>+7 (524) - 23 - 234</TableItemText></Col>
                        <Col xs={8}><Checkbox>Пригласить</Checkbox></Col>
                    </Row>
                </TableItem>
                <TableItem>
                    <Row>
                        <Col xs={8}><TableItemText>4243-2424-2552-1235</TableItemText></Col>
                        <Col xs={8}><TableItemText>+7 (524) - 23 - 234</TableItemText></Col>
                        <Col xs={8}><Checkbox>Пригласить</Checkbox></Col>
                    </Row>
                </TableItem>
                <TableItem>
                    <Row>
                        <Col xs={8}><TableItemText>4243-2424-2552-1235</TableItemText></Col>
                        <Col xs={8}><TableItemText>+7 (524) - 23 - 234</TableItemText></Col>
                        <Col xs={8}><Checkbox>Пригласить</Checkbox></Col>
                    </Row>
                </TableItem>
            </Table>
        </Modal>
    </MainLayout>
}

export default ModeratorsPage