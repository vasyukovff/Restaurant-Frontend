import React from 'react'
import {List, ListItem, Paper, ListItemText} from '@material-ui/core';

export default function OrderFoodItems(props) {

    const { orderedFoodItems } = props;

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
                            />
                        </ListItem>
                    </Paper>
                ))
            }
        </List>
    )
}
