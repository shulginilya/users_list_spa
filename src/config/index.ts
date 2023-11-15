interface ICommonConfig {
    apiEndpoint: string;
};

interface IUserTableConfig {
    usersPerPage: number;
};

export const commonConfig: ICommonConfig = {
    apiEndpoint: 'http://localhost:3000'
};

export const usersTableConfig: IUserTableConfig = {
    usersPerPage: 10
};
