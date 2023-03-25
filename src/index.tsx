import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/global.css';
import { Routers } from './router';
import { AppStore } from './store/appStore';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <AppStore>
            <Routers />
        </AppStore>
    </React.StrictMode>,
);
