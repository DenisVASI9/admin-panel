import React, {useState, useEffect} from "react"
import MainLayout from "../../../layout/admin";
import {Page, PageWrapper} from "../../../components/page";
import {Row, Col, Button, Pagination} from "antd"
import {PageTitle} from "../../../components/page";
import {
    Table,
    TableHeader,
    TableHeaderItem,
    TableItem,
    TableItemText
} from '../../../components/table'
import {useWindowSize} from "../../../core/hooks/useWindowSize";
import Card from "../../../components/mobile/Card";



const ReturnItem = (name,icon,userName,type) =>{
    switch (type) {
        case 1:{
            return(
                <TableItem>
                    <Row align="center">
                        <Col xs={6}>
                            <TableItemText>{name}</TableItemText>
                        </Col>
                        <Col xs={6}>
                            <TableItemText>{icon}</TableItemText>
                        </Col>
                        <Col xs={6}>
                            <TableItemText>{userName}</TableItemText>
                        </Col>
                        <Col xs={6}>
                            <Button type="primary" style={{marginRight:'10px'}}>Одобрить</Button>
                            <Button type="danger">Отклонить</Button>
                        </Col>
                    </Row>
                </TableItem>
            )
        }
        case 2:{
            return (
                <Card title={name} content1={icon} content2={userName}/>
            )
        }
        default: return JSON.stringify({name,icon,userName})
    }

};

const DesktopUsers = (props) => {
    return <Table>
        <TableHeader>
            <Row>
                <Col xs={6}><TableHeaderItem>Название</TableHeaderItem></Col>
                <Col xs={6}><TableHeaderItem>Иконка</TableHeaderItem></Col>
                <Col xs={6}><TableHeaderItem>Имя пользователя</TableHeaderItem></Col>
                <Col xs={6}><TableHeaderItem>Действия</TableHeaderItem></Col>
            </Row>
        </TableHeader>
        {props.courses.map(course=> ReturnItem(course.name,course.icon,course.userName,1))}
    </Table>
};

const MobileUsers = (props) => {
    return(
        props.courses.map(course=> ReturnItem(course.name,course.icon,course.userName,2))
    )
};

const CoursesPage = () => {

    const {width} = useWindowSize();
    const [courses, setCourses] = useState([
        {name:'Физика',icon:'physic',userName:'Виталий'},
        {name:'Физика',icon:'physic',userName:'Виталий'},
        {name:'Физика',icon:'physic',userName:'Виталий'},
        {name:'Физика',icon:'physic',userName:'Виталий'},
        {name:'Физика',icon:'physic',userName:'Виталий'},
        {name:'Физика',icon:'physic',userName:'Виталий'},
        {name:'Физика',icon:'physic',userName:'Виталий'},
        {name:'Физика',icon:'physic',userName:'Виталий'}
    ]);
    return <MainLayout>
        <PageWrapper>
            <Page>
                <PageTitle>Список курсов на модерацию:</PageTitle>
                {width > 400 ? <DesktopUsers courses = {courses} /> : <MobileUsers courses = {courses} />}
                <Pagination defaultCurrent={1} total={50} />
            </Page>
        </PageWrapper>
    </MainLayout>
};


export default CoursesPage