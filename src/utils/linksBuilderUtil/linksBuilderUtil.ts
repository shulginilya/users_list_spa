import { usersTableConfig } from '@/config';

interface ISort {
    sortField: string;
    sortOrder: 'desc' | 'asc';
};

interface ISearch {
    field: string;
    searchTerm: string;
};

interface IFetchUsersLink {
    page: number;
    sort?: ISort;
};

export const buildFetchUsersLink = ({
    page,
    sort,
}: IFetchUsersLink) => {
    const usersPerPage = usersTableConfig.usersPerPage;
    const startParam = (page - 1)*usersPerPage;
    const endParam = startParam + usersPerPage;
    let fetchUserLink = `/users?_start=${startParam}&_end=${endParam}`;
    if (sort) {
        fetchUserLink += `&_sort=${sort.sortField}&_order=${sort.sortOrder}`;
    }
    return fetchUserLink;
};

export const buildSearchUsersLink = ({
    field,
    searchTerm,
}: ISearch) => (
    `/users?${field}_like=${searchTerm}`
);
