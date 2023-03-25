import { Breadcrumb } from 'antd';
import { FunctionComponent, ReactElement } from 'react';
// import styles from './styles.css';

export const BreadCrumb: FunctionComponent = (): ReactElement => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
    );
};

BreadCrumb.displayName = 'BreadCrumb';
