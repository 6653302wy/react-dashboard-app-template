import { FunctionComponent, ReactElement } from 'react';
import styles from './styles.css';

export const PageLoading: FunctionComponent = (): ReactElement => {
    return <div className={styles.container}>Loading...</div>;
};

PageLoading.displayName = 'PageLoading';
