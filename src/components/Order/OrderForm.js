import React,{useState} from 'react'
import Form from "../../layouts/Form";
import {Grid, InputAdornment, makeStyles, ButtonGroup, Button as MuiButton} from '@material-ui/core';

import {Input, Select, Button} from "../../controls"


/* ICONS */
import ReplayIcon from '@material-ui/icons/Replay';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import MenuIcon from '@material-ui/icons/Menu';

const pMethods = [
    {id:'none', title: 'Select'},
    {id:'Cash', title: 'Cash'},
    {id:'Card', title: 'Card'},
]

const useStyles = makeStyles(theme =>({
    adornmentText:{
        '& .MuiTypography-root':{
            color: '#f3b33d',
            fontWeight: 'bolder',
            fontSize: '1.5em'
        }
    },
    submitButtonGroup:{
        backgroundColor: '#f3b33d',
        color: '#000',
        margin: theme.spacing(1),
        '& .MuiButton-label': {
            textTransform: 'none'
        },
        '&:hover': {
            backgroundColor: '#f3b33d',
        }
    }
}))

export default function OrderForm(props) {

    const {values, errors, handleInputChange} = props;
    const classes = useStyles();

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                        disabled
                        label = "Order Number"
                        name = "orderNumber"
                        value = {values.orderNumber}
                        InputProps = {{
                            startAdornment: <InputAdornment
                            className = {classes.adornmentText}
                            position="start">#</InputAdornment>
                        }}
                    />
                    <Select
                        label = "Customer"
                        name = "customerId"
                        value = {values.customerId}
                        onChange = {handleInputChange}
                        options = {[
                            {id: 0, title: 'Select'},
                            {id: 1, title: 'Customer 1'},
                            {id: 2, title: 'Customer 2'},
                            {id: 3, title: 'Customer 3'},
                            {id: 4, title: 'Customer 4'},
                        ]}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Select
                        label = "Payment Method"
                        name = "pMethod"
                        value = {values.pMethod}
                        options = {pMethods}
                    />
                    <Input
                        disabled
                        label = "Grand Total"
                        name = "gTotal"
                        value = {values.gTotal}
                        InputProps = {{
                            startAdornment: <InputAdornment
                            className = {classes.adornmentText}
                            position="start">$</InputAdornment>
                        }}
                    />
                    <ButtonGroup className={classes.submitButtonGroup}>
                        <MuiButton
                        size="large"
                        endIcon = {<RestaurantMenuIcon/>}
                        type="submit">Submit</MuiButton>
                        <MuiButton
                            size="small"
                            startIcon = {<ReplayIcon/>}
                        />
                    </ButtonGroup>
                    <Button
                        size="large"
                        startIcon={<MenuIcon/>}
                    >Orders</Button>
                </Grid>
            </Grid>
        </Form>
    )
}
