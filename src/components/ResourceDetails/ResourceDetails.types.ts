import { IUserDetails  } from "@/types";

type SupportedEntities = IUserDetails;

export interface IResourceDetilsProps {
    name: string;
    entity: SupportedEntities | null;
    fieldsMapping?: {
        [key: string]: string | number;
    };
    excludedFields?: string[];
};
