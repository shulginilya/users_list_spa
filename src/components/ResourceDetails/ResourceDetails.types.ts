import { IUserDetails  } from "@/types";

export interface IResourceDetilsProps {
    name: string;
    entity: IUserDetails | null;
    fieldsMapping?: {
        [key: string]: string | number;
    };
    excludedFields?: string[];
};
