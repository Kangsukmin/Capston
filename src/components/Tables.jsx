import React from 'react';
import MUIDataTable from "mui-datatables";
import { useSelector } from 'react-redux';
import { useFirebaseConnect, isLoaded, isEmpty, useFirebase } from 'react-redux-firebase';

export default function Tables() {
    useFirebaseConnect([
        'Users' // { path: '/todos' } // object notation
    ])

    const users = useSelector((state) => state.firebase.ordered.Users)
    const firebase = useFirebase();

    //console.log(users);
    let user_list = null

    if (!isLoaded(users)) {
        return <div>Loading...</div>
    } else {
        user_list = Object.keys(users).map(v=> {
            const temp = {
                이름: users[v].value.profile.name,
                도시: users[v].value.profile.city,
                주소: users[v].value.profile.fullAddress + " " + users[v].value.profile.extraAddress,
                연락처: users[v].value.profile.phoneNumber,
                가입일: users[v].value.profile.join,
                value: users[v].key,
            }
            return temp;
        });
    }

    if (isEmpty(users)) {
        return <div>Users List Is Empty</div>
    }

    const columns = ["이름", "도시", "주소", "연락처", '가입일'];

    const options = {
        filterType: 'checkbox',
        onRowsDelete: (rowsDeleted, dataRows) => {
            rowsDeleted.data.map(v => 
                firebase.remove(`Users/${user_list[v.dataIndex].value}`)
            )
        }
    };
    return (
        <MUIDataTable
            title={"Employee List"}
            data={user_list}
            columns={columns}
            options={options}
        />
    )

}