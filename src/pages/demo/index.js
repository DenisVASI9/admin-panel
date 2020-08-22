import React from "react"
import MainLayout from "../../layout/admin";
import {Page, PageWrapper} from "../../components/page";

const DemoPage = (props) => {
    return <MainLayout>
        <PageWrapper>
            <Page>
                hello world
            </Page>
        </PageWrapper>
    </MainLayout>
}

export default DemoPage