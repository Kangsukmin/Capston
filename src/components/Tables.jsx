import React from 'react';
import MUIDataTable from "mui-datatables";
import { useSelector } from 'react-redux';
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

export default function Tables() {
    useFirebaseConnect([
        'Users' // { path: '/todos' } // object notation
    ])

    const users = useSelector((state) => state.firebase.ordered.Users)

    console.log(users);
    let user_list = null

    if (!isLoaded(users)) {
        return <div>Loading...</div>
    } else {
        user_list = Object.keys(users).map(v=>{
            const temp = [];
            temp.push(users[v].value.name);
            temp.push(users[v].value.city);
            temp.push(users[v].value.address1 + " " + users[v].value.address2);
            temp.push(users[v].value.phone);
            temp.push(users[v].value.join);
            return temp;
        });
    }

    if (isEmpty(users)) {
        return <div>Users List Is Empty</div>
    }

    const columns = ["이름", "도시", "주소", "연락처", '가입일'];

    const options = {
        filterType: 'checkbox',
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