import { FC } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { AppLayOut } from '../screen/app-layout';
import { NotFound } from '../screen/not-found/NotFound';
import { RoutersMap } from './constans';

export const Routers: FC = () => {
    return (
        <BrowserRouter basename={process.env.ROUTER_BASE}>
            <Routes>
                <>
                    {RoutersMap.first_level.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.element} />;
                    })}
                    <Route
                        element={
                            <AppLayOut>
                                <Outlet />
                            </AppLayOut>
                        }
                    >
                        {RoutersMap.admin.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element} />
                        ))}
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </>
            </Routes>
        </BrowserRouter>
    );
};

Routers.displayName = 'Routers';
