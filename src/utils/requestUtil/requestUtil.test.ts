import { makeRequest } from '@/utils';
import { testUser } from '@/data';

describe('makeRequest', () => {
    it('request utility should work (GET request)', async () => {
        const testResponse = await makeRequest({
            url: '/users'
        });
        expect(testResponse[0]).toStrictEqual(testUser);
    });
});
