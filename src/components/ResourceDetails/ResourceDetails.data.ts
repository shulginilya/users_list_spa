import { testUser } from '@/data';

export const testResourceDetailsProps = {
    name: 'user_details',
    entity: testUser,
    fieldsMapping: {
        name: "Name",
        email: "Email",
        age: "Age",
        address: "Address",
        profilePicture: "Profile Picture"
    }
};
