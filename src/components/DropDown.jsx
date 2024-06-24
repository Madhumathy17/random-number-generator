import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropDown = (props) => {
    const [value, setValue] = React.useState(props.defaultValue);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        props.onValueChange(newValue);
    };

    const labelId = props.labelString?.replaceAll(' ', '').toLowerCase();

    return (
        <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel id={`select-${labelId}-label`}>{props.labelString}</InputLabel>
                <Select
                    labelId={`select-${labelId}-label`}
                    id={`select-${labelId}`}
                    value={value}
                    label={props.labelString}
                    onChange={handleChange}
                >
                    {
                        props.values.map((value, idx) => (
                            <MenuItem
                                key={{idx}}
                                value={value}
                            >
                                {value}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
}

export default DropDown;
