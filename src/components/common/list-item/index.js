import  React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';

const ResultItem = ({item, clickHandler, ...props}) => {
    console.log('props', props)
    const {image, title, description} = item;

    const onClick = () => clickHandler(item);

    return (
        <ListItem onClick={onClick}>
            <Avatar>
                <img src={image} alt=""/>
            </Avatar>
            <ListItemText primary={title} secondary={description} />
            {
                props.withRemoveIcon ? <span>X</span> : null
            }

        </ListItem>
    )
};

export default ResultItem;