import { createContext, FC, ReactElement, useState } from 'react';

type AppDataType = {
    mainTittle: string;
    updateMainTittle: (str: string) => void;
};

export const AppContext = createContext({} as AppDataType);

export const AppStore: FC<{ children: ReactElement }> = ({ children }) => {
    const [mainTittle, updateMainTittle] = useState('react应用');

    return <AppContext.Provider value={{ mainTittle, updateMainTittle }}>{children}</AppContext.Provider>;
};
