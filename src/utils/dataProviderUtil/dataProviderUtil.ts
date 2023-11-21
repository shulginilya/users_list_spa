import { makeRequest } from "@/utils";

interface IGetRecordsCount {
    url: string;
};

export const getRecordsCount = async ({
    url
}: IGetRecordsCount): Promise<number | null> => {
    const response = await makeRequest({
        url
    });
    if (!response) {
        return null
    };
    return response.length;
};
