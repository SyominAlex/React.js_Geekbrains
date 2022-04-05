import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`Чат ${index + 1}`} />
            </ListItemButton>
        </ListItem>
    );
}

export default function VirtualizedList() {
    return (
        <Box
            sx={{ width: '100%', height: 10, maxWidth: 360, bgcolor: 'background.paper' }}
        >
            <FixedSizeList
                height={600}
                width={200}
                itemSize={46}
                itemCount={10}
                overscanCount={5}
            >
                {renderRow}
            </FixedSizeList>
        </Box>
    );
}
