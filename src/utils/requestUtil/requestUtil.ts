import { commonConfig } from '@/config';

type MethodType = 'GET' | 'PUT' | 'POST';

interface IMakeRequest {
    url: string;
    params?: {
        [key: string]: string
    };
    method?: MethodType;
};

interface IOptions {
    method: MethodType;
    headers?: {
        [key: string]: string
    },
    body?: string;
};

export const makeRequest = async ({
    url,
    params = {},
    method = 'GET'
}: IMakeRequest) => {
    const options: IOptions = {
        method
    };
    if (method === 'POST' || method === 'PUT') {
        options.headers = {
            "Content-Type": "application/json"
        };
    }
    if (params) {
        options['body'] = JSON.stringify(params);
    }
    const apiUrl = `${commonConfig.apiEndpoint}${url}`;
    const response = await fetch(apiUrl, options);
    if (response) {
        const data = await response.json();
        return data;
    }
    return null;
};