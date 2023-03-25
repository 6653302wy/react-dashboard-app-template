import { ReactElement } from 'react';
import { BaseInfoView } from '../screen/base-info';
import { Home } from '../screen/home';
import { Login } from '../screen/login';
import { OverView } from '../screen/over-view';
import { User } from '../screen/user';

interface RouterInfo {
    path: string;
    title?: string;
    element: ReactElement;
}
interface RouterType {
    [key: string]: RouterInfo[];
}

enum RouterEnum {
    /** 首页 */
    HOME = '/home',
    /** 登录 */
    LOGIN = '/login',
    /** 概览 */
    OVER_VIEW = '/overview',
    /** 用户中心 */
    USER = '/user',
    /** 基本设置 - 基本信息 */
    BASE_INFO = '/base-set/info',
}

export const RoutersMap: RouterType = {
    /** 第一层级的路由页面 */
    first_level: [
        {
            path: RouterEnum.HOME,
            title: '首页',
            element: <Home />,
        },
        {
            path: RouterEnum.LOGIN,
            title: '登录',
            element: <Login />,
        },
    ],
    /** 后台管理页面 */
    admin: [
        {
            path: RouterEnum.OVER_VIEW,
            title: '概览',
            element: <OverView />,
        },
        {
            path: RouterEnum.USER,
            title: '用户中心',
            element: <User />,
        },
        {
            path: RouterEnum.BASE_INFO,
            title: '基本信息',
            element: <BaseInfoView />,
        },
    ],
};
