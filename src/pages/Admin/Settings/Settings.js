import React from 'react';
import {Page, PageWrapper} from "../../../components/page";
import MainLayout from "../../../layout/admin";
import {Input, Button, Space, Switch} from 'antd';
import {PageTitle} from "../../../components/page";

export default class Settings extends React.Component {


    render() {
        return (
            <MainLayout>
                <PageWrapper>
                    <Page>
                        <PageTitle>
                            <div>Основные настройки сайта:</div>
                        </PageTitle>
                        <div style={{marginTop:'25px'}}>
                            <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: '10px'}}>
                                <Space>
                                    <Input style={{width: '300px'}} placeholder='Минимальная ставка'/>
                                    <Button>Сохранить</Button>
                                </Space>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: '10px'}}>
                                <Space>
                                    <Input style={{width: '300px'}} placeholder='Максимальная ставка'/>
                                    <Button>Сохранить</Button>
                                </Space>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: '10px'}}>
                                <Space>
                                    <Input style={{width: '300px'}}
                                           placeholder='Бесплатное отображение объявления(дней)'/>
                                    <Button>Сохранить</Button>
                                </Space>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: '10px'}}>
                                <Space>
                                    <Input style={{width: '300px'}} placeholder='Цена за доп. дни отображения'/>
                                    <Button>Сохранить</Button>
                                </Space>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                marginTop: '10px',
                                alignItems: 'center'
                            }}>
                                <Space>
                                    Возможность изменения автора курса:
                                    <Switch/>
                                </Space>
                            </div>
                        </div>
                    </Page>
                </PageWrapper>
            </MainLayout>
        )
    }

}