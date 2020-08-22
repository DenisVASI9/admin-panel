import React, {useState, useEffect} from "react"
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
import Card from "../../components/mobile/Card";



const ReturnItem = (id,name,login,action,type) =>{
    switch (type) {
        case 1:{
            return(
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
        case 2:{
            return (
                <Card title={name} content1={id} content2={login}/>
            )
        }
        default: return JSON.stringify({id,name,login,action})
    }

};

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
        {props.users.map(user=> ReturnItem(user.id,user.name,user.login,user.action,1))}
    </Table>
};

const MobileUsers = (props) => {
    return(
        props.users.map(user=> ReturnItem(user.id,user.name,user.login,user.action,2))
    )
};

const UsersPage = () => {

    const {width} = useWindowSize();
    const [users, setUsers] = useState([
        {id:'bvgv-2342-23fv-svvf',name:'Виталий Русанов',login:'+7 (324) - 23 - 234',action:'Открыть'},
        {id:'bvgv-2342-23fv-svvf',name:'Виталий Русанов',login:'+7 (324) - 23 - 234',action:'Открыть'},
        {id:'bvgv-2342-23fv-svvf',name:'Виталий Русанов',login:'+7 (324) - 23 - 234',action:'Открыть'},
        {id:'bvgv-2342-23fv-svvf',name:'Виталий Русанов',login:'+7 (324) - 23 - 234',action:'Открыть'},
        {id:'bvgv-2342-23fv-svvf',name:'Виталий Русанов',login:'+7 (324) - 23 - 234',action:'Открыть'},
        {id:'bvgv-2342-23fv-svvf',name:'Виталий Русанов',login:'+7 (324) - 23 - 234',action:'Открыть'},
        {id:'bvgv-2342-23fv-svvf',name:'Виталий Русанов',login:'+7 (324) - 23 - 234',action:'Открыть'},
        {id:'bvgv-2342-23fv-svvf',name:'Виталий Русанов',login:'+7 (324) - 23 - 234',action:'Открыть'},
        ]);
    return <MainLayout>
        <PageWrapper>
            <Page>
                <PageTitle>Список пользователей</PageTitle>
                {width > 400 ? <DesktopUsers users = {users} /> : <MobileUsers users = {users} />}
                <Pagination defaultCurrent={1} total={50} />
            </Page>
        </PageWrapper>
    </MainLayout>
};


export default UsersPage