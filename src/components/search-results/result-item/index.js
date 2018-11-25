import  React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';

const ResultItem = ({item, clickHandler}) => {

    const {image, title, description} = item;

    const onClick = () => clickHandler(item);

    return (
        <ListItem onClick={onClick}>
            <Avatar>
                <img src={image} alt=""/>
            </Avatar>
            <ListItemText primary={title} secondary={description} />
        </ListItem>
    )
};

export default ResultItem;