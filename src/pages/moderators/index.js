import React, {useState} from "react"
import MainLayout from "../../layout/admin";
import {Page, PageWrapper, PageTitle} from "../../components/page";
import {Row, Card, Col, Button, Pagination, Modal, Form, Input, Checkbox} from "antd"
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

const ReturnItem = (id, name, login, action, type) => {
    switch (type) {
        case 1: {
            return (
                <TableItem>
                    <Row align="center">
                        <Col xs={6}>
                            <TableItemText>{id}</TableItemText>
                        </Col>
                        <Col xs={6}>
                            <TableItemText>{name}</TableItemText>
                        </Col>
                        <Col xs={6}>
                            <TableItemText>{login}</TableItemText>
                        </Col>
                        <Col xs={6}>
                            <Button type="primary">{action}</Button>
                        </Col>
                    </Row>
                </TableItem>
            )
        }
        case 2: {
            return (
                <Card title={name} content1={id} content2={login}/>
            )
        }
        default:
            return JSON.stringify({id, name, login, action})
    }

};

const DesktopModerators = (props) => {
    return <Table>
        <TableHeader>
            <Row>
                <Col xs={6}><TableHeaderItem>ID</TableHeaderItem></Col>
                <Col xs={6}><TableHeaderItem>Имя</TableHeaderItem></Col>
                <Col xs={6}><TableHeaderItem>Телефон</TableHeaderItem></Col>
                <Col xs={6}><TableHeaderItem>Действия</TableHeaderItem></Col>
            </Row>
            {props.users.map(user => ReturnItem(user.id, user.name, user.login, user.action, 1))}
        </TableHeader>

    </Table>
};

const MobileModerators = (props) => {
    return(
        props.users.map(user => ReturnItem(user.id, user.name, user.login, user.action, 2))
    )
};

const ModeratorsPage = () => {

    const [users, setUsers] = useState([
        {id: '123123123', name: 'Виталий Русанов', login: '8999584183', action: 'Открыть'},
        {id: '123123123', name: 'Виталий Русанов', login: '8999584183', action: 'Открыть'},
        {id: '123123123', name: 'Виталий Русанов', login: '8999584183', action: 'Открыть'},
        {id: '123123123', name: 'Виталий Русанов', login: '8999584183', action: 'Открыть'},
        {id: '123123123', name: 'Виталий Русанов', login: '8999584183', action: 'Открыть'}
    ]);

    const {width} = useWindowSize();
    const [isModalShowed, setModalState] = useState(false);

    const handleOk = () => {
        setModalState(false)
    };

    const handleCancel = () => {
        setModalState(false)
    };

    return <MainLayout>
        <PageWrapper>
            <Page>
                <Row align="center">
                    <Col xs={12}>
                        <PageTitle>Список модераторов</PageTitle>
                    </Col>
                    <Col xs={12}>
                        <ModeratorsActions>
                            <Button type="primary" onClick={() => (setModalState(true))}>Пригласить</Button>
                        </ModeratorsActions>
                    </Col>
                </Row>
                {width > 400 ? <DesktopModerators users={users}/> : <MobileModerators users={users}/>}
                <Pagination defaultCurrent={1} total={50}/>
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
};

export default ModeratorsPage