export interface IUser {
    name: string;
    email: string;
    age: number;
};

export interface IUserDetails extends IUser {
    address: string;
    profilePicture: string;
};
