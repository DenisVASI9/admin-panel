import React from 'react';
import { Card ,Button} from 'antd';

export default ({title,content1,content2})=>(
    <div style={{margin:'10px'}}>
    <Card title={title} extra={<Button >Подробнее</Button>} style={{ width: '100%' }}>
        <p>{content1}</p>
        <p>{content2}</p>
    </Card>
    </div>
)