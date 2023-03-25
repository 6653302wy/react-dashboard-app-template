import {
    DesktopOutlined,
    FileOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { FC, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router';
import { BreadCrumb } from './components/BreadCrumb';
import styles from './styles.scss';

const SiderTriggerIcon: FC<{ collapsed: boolean }> = ({ collapsed }) => {
    return (
        <div style={{ borderTop: '#eee 1px solid', textAlign: 'left', paddingLeft: '30px' }}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
    );
};

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem => {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
};

const items: MenuItem[] = [
    getItem('Option 1', '/overview', <PieChartOutlined />),
    getItem('Option 2', '/base-set/info', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [getItem('Tom', '/user'), getItem('Bill', '4'), getItem('Alex', '5')]),
    getItem('Team', 'sub2', <TeamOutlined />, [
        getItem('Team 1', '6'),
        getItem('Team 2', '8', '', [
            getItem('sub Team', '140'),
            getItem('sub Team', '141'),
            getItem('sub Team', '142'),
            getItem('sub Team', '143'),
        ]),
    ]),
    getItem('Files', '9', <FileOutlined />, [
        getItem('Team 2', '80', '', [
            getItem('sub Team', '130'),
            getItem('sub Team', '131'),
            getItem('sub Team', '132'),
            getItem('sub Team', '133'),
        ]),
    ]),
    getItem('Files', '19', <FileOutlined />),
    getItem('Files', '29', <FileOutlined />),
    getItem('Files', '39', <FileOutlined />),
    getItem('Files', '94', <FileOutlined />),
    getItem('Files', '95', <FileOutlined />),
    getItem('Files', '96', <FileOutlined />, [
        getItem('Team 2', '89', '', [
            getItem('sub Team', '110'),
            getItem('sub Team', '111'),
            getItem('sub Team', '112'),
            getItem('sub Team', '113'),
        ]),
    ]),
    getItem('Files', '97', <FileOutlined />),
    getItem('Files', '98', <FileOutlined />, [
        getItem('Team 2', '88', '', [
            getItem('sub Team', '120'),
            getItem('sub Team', '121'),
            getItem('sub Team', '122'),
            getItem('sub Team', '123'),
        ]),
    ]),
];

export const AppLayOut: FC<{ children: ReactElement }> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const onItemSelected = (prop: any) => {
        const { item, key, selectedKeys, keyPath } = prop;
        console.log('onItemSelected: ', key, selectedKeys, keyPath);
        navigate(key);
    };

    return (
        <Layout style={{ minHeight: '100vh', background: '#fff' }}>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    // background: '#eee',
                }}
                breakpoint="lg"
                // onBreakpoint={(broken) => {
                //     console.log(broken);
                // }}
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                trigger={<SiderTriggerIcon collapsed={collapsed} />}
                theme="light"
            >
                <div className={styles.logo}>Villland</div>
                <Menu onSelect={onItemSelected} theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>

            <Layout className="site-layout" style={{ marginLeft: collapsed ? 80 : 200, transition: 'all 0.3s' }}>
                <Header className={styles.header}>
                    <div className={styles.userIcon}>
                        <UserOutlined />
                    </div>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <BreadCrumb />
                    <main>{children}</main>
                </Content>

                <Footer style={{ textAlign: 'center' }}>This is Footer</Footer>
            </Layout>
        </Layout>
    );
};
AppLayOut.displayName = 'AppLayOut';
