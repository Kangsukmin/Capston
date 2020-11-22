import React from 'react';
import MUIDataTable from "mui-datatables";
import { useSelector } from 'react-redux';
import { useFirebaseConnect, isLoaded, isEmpty, useFirebase } from 'react-redux-firebase';


export default function Alertpage(props) {
    useFirebaseConnect(['Users']);

    const users = useSelector((state) => state.firebase.ordered.Users);
    const firebase = useFirebase();

    let alert_list = null

    if (!isLoaded(users)) {
        return <div>Loading...</div>
    } else {
        alert_list = Object.keys(users).filter(v => users[v].value.emergency&&users[v].value.profile).map(v=>{
            const temp = {
                이름: users[v].value.profile.name,
                도시: users[v].value.profile.city,
                주소: users[v].value.profile.fullAddress + " " + users[v].value.profile.extraAddress,
                연락처: users[v].value.profile.phoneNumber,
                비상상황시각: users[v].value.emergency.time,
                value: users[v].key
            }
            return temp;
        });
    }

    const columns = ["이름", "도시", "주소", "연락처", '비상상황시각'];

    if (isEmpty(users)) {
        return <div>Alerts List Is Empty</div>
    }

    const options = {
        filterType: 'checkbox',
        onRowsDelete: (rowsDeleted, dataRows) => {
            rowsDeleted.data.map(v => 
                firebase.update(`Users/${alert_list[v.dataIndex].value}/emergency`, {time: false})
            )
        }
    };

    return (
        <MUIDataTable
            title={"Alerts List"}
            data={alert_list}
            columns={columns}
            options={options}
        />
    )
}