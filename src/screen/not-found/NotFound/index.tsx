import { FunctionComponent, ReactElement, useCallback, useEffect, useState } from 'react';
import styles from './styles.css';

export const NotFound: FunctionComponent = (): ReactElement => {
    return (
        <div className={styles.container}>
            <h1>404</h1>
        </div>
    );
};

NotFound.displayName = 'NotFound';
