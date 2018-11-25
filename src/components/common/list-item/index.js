import React from 'react';

import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';

const ResultItem = ({item, clickHandler, ...props}) => {

    const {image, title, description} = item;

    const onClick = () => clickHandler(item);


    return (
        <List>
            <ListItem
                onClick={!props.withRemoveIcon ? onClick : null}
                className={props.className}
            >
                <Avatar> <img src={image} alt=""/> </Avatar>
                <ListItemText
                    primary={title}
                    secondary={description}
                />
                {props.withRemoveIcon ? <span onClick={onClick}>X</span> : null}
            </ListItem>
        </List>
    )
};

export default ResultItem;