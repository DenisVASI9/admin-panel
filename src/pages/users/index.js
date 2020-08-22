import React from "react"
import MainLayout from "../../layout/admin";
import {Page, PageWrapper} from "../../components/page";
import {Row, Col} from "antd"
import {PageTitle} from "../../components/page";
import {
    UserTableHeader
} from './users.styles'

const UsersPage = () => {
    return <MainLayout>
        <PageWrapper>
            <Page>
                <PageTitle>Список пользователей</PageTitle>
                <UserTableHeader>
                    <Row>
                        <Col xs={8}>Имя</Col>
                    </Row>
                </UserTableHeader>
            </Page>
        </PageWrapper>
    </MainLayout>
}

export default UsersPage