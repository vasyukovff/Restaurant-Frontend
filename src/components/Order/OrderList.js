import React, { useState, useEffect } from 'react'
import {createAPIEndpoint, ENDPOINTS} from "../../api"
import Table from "../../layouts/Table"
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';

export default function OrderList() {

    const [orderList, setOrderList] = useState([]);


    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.ORDER).fetchAll()
        .then(res => {
            setOrderList(res.data);
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Order No.</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Payed With</TableCell>
                    <TableCell>Grand Total</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    orderList.map(item => (
                        <TableRow key={item.orderMasterId}>
                            <TableCell>
                                {item.orderNumber}
                            </TableCell>
                            <TableCell>
                                {item.customer.customerName}
                            </TableCell>
                            <TableCell>
                                {item.pMethod}
                            </TableCell>
                            <TableCell>
                                ${item.gTotal}
                            </TableCell>
                            <TableCell>
                                <DeleteOutlineTwoToneIcon color="secondary" />
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
