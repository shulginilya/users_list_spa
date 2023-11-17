export const emptyTableTestProps = {
    resourseName: "users",
    columns: [],
    items: [],
    dataTestId: 'users_tbl_test_id_1'
};

export const filledTableTestProps = {
    resourseName: "users",
    columns: [
        {
            "key": "user_table_header_name",
            "name": "name",
            "title": "name"
        },
        {
            "key": "user_table_header_email",
            "name": "email",
            "title": "email"
        },
        {
            "key": "user_table_header_age",
            "name": "age",
            "title": "age"
        },
        {
            "key": "user_table_header_address",
            "name": "address",
            "title": "address"
        },
        {
            "key": "user_table_header_profilePicture",
            "name": "profilePicture",
            "title": "profilePicture"
        }
    ],
    items: [
        [
            {
                "key": "name",
                "value": "User 1"
            },
            {
                "key": "email",
                "value": "user1@gmail.com"
            },
            {
                "key": "age",
                "value": 19
            },
            {
                "key": "address",
                "value": "User 1 address"
            },
            {
                "key": "profilePicture",
                "value": ""
            }
        ],
        [
            {
                "key": "name",
                "value": "User 2"
            },
            {
                "key": "email",
                "value": "user2@gmail.com"
            },
            {
                "key": "age",
                "value": 20
            },
            {
                "key": "address",
                "value": "User 2 address"
            },
            {
                "key": "profilePicture",
                "value": ""
            }
        ],
        [
            {
                "key": "name",
                "value": "User 3"
            },
            {
                "key": "email",
                "value": "user3@gmail.com"
            },
            {
                "key": "age",
                "value": 21
            },
            {
                "key": "address",
                "value": "User 3 address"
            },
            {
                "key": "profilePicture",
                "value": ""
            }
        ],
        [
            {
                "key": "name",
                "value": "User 4"
            },
            {
                "key": "email",
                "value": "user4@gmail.com"
            },
            {
                "key": "age",
                "value": 22
            },
            {
                "key": "address",
                "value": "User 4 address"
            },
            {
                "key": "profilePicture",
                "value": ""
            }
        ],
        [
            {
                "key": "name",
                "value": "User 5"
            },
            {
                "key": "email",
                "value": "user5@gmail.com"
            },
            {
                "key": "age",
                "value": 23
            },
            {
                "key": "address",
                "value": "User 5 address"
            },
            {
                "key": "profilePicture",
                "value": ""
            }
        ]
    ],
    dataTestId: 'users_tbl_test_id_2'
};

