import React from 'react'
import {List, ListItem, Paper, ListItemText, ListItemSecondaryAction, IconButton, Button, ButtonGroup} from '@material-ui/core';


import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function OrderFoodItems(props) {

    const {values, setValues } = props;
    let orderedFoodItems = values.orderDetails;

    
    const removeFoodItem = (index, id) => {
        let x = {...values};
        x.orderDetails = x.orderDetails.filter((item, i) => i != index);

        setValues({...x});
    }

    const updateQuantity = (idx, value) => {
        let x = {...values};
        let foodItem = x.orderDetails[idx];

        if(foodItem.quantity + value > 0)
        {
            foodItem.quantity += value;
            
            setValues({...x})
        }
    }

    return (
        <List>
            {
                orderedFoodItems.map((item, idx) => (
                    <Paper key={idx}>
                        <ListItem>
                            <ListItemText
                            primary={item.foodItemName}
                            primaryTypographyProps={{
                                component: 'h1',
                                style: {
                                    fontWeight: '500',
                                    fontSize: '1.2em'
                                }
                            }} 
                            secondary = {
                                <>
                                <ButtonGroup size = "small">
                                    <Button onClick = { e => updateQuantity(idx, -1)}>-</Button>
                                    <Button disabled>{item.quantity}</Button>
                                    <Button onClick = { e => updateQuantity(idx, +1)}>+</Button>
                                </ButtonGroup>
                                <span>
                                    {'$' + item.quantity * item.foodItemPrice}
                                </span>
                                </>
                            }
                            secondaryTypographyProps = {{
                                component: 'div'
                            }}
                            />
                            <ListItemSecondaryAction>
                                <IconButton 
                                disableRipple
                                onClick={e => removeFoodItem(idx, item.orderDetailsId)}
                                >
                                    <DeleteForeverIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Paper>
                ))
            }
        </List>
    )
}
