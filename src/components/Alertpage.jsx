import React from 'react';
import MUIDataTable from "mui-datatables";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty, useFirestore } from 'react-redux-firebase';

export default function Alertpage(props) {
    useFirestoreConnect({
        collection: 'alerts',
        storeAs: "alerts",
    });
    const alerts = useSelector((state) => state.firestore.data.alerts);
    const firestore = useFirestore();

    let alert_list = null

    if (!isLoaded(alerts)) {
        return <div>Loading...</div>
    } else {
        alert_list = Object.keys(alerts).filter(v=>!alerts[v].is_read).map(v=>{
            var d = new Date();
            d = new Date(alerts[v].time.seconds * 1000 + alerts[v].time.nanoseconds);
            var date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length===2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length===2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length===2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length===2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
            const temp = {
                이름: alerts[v].name,
                도시: alerts[v].city,
                주소: alerts[v].address1 + " " + alerts[v].address2,
                연락처: alerts[v].phone,
                비상상황시각: date_format_str,
                value: v
            }
            return temp;
        });
    }

    const columns = ["이름", "도시", "주소", "연락처", '비상상황시각'];

    if (isEmpty(alerts)) {
        return <div>Alerts List Is Empty</div>
    }

    const options = {
        filterType: 'checkbox',
        onRowsDelete: (rowsDeleted, dataRows) => {
            rowsDeleted.data.map(v => 
                firestore.collection("alerts").doc(alert_list[v.dataIndex].value).update({
                    is_read: true,
                })
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