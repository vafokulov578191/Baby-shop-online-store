import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: '30%' }} size="small">
            <InputLabel id="demo-select-small">Sorting</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={value}
                onChange={handleChange}
                label={"Sorting"}
            >
                <MenuItem value={'Сначала популярные'}>Сначала популярные</MenuItem>
                <MenuItem value={'Сначала новые'}>Сначала новые</MenuItem>
                <MenuItem value={'По алфавиту'}>По алфавиту</MenuItem>
                <MenuItem value={'От дешевых к дорогим'}>От дешевых к дорогим</MenuItem>
                <MenuItem value={'От дорогих к дешевым'}>От дорогих к дешевым</MenuItem>
            </Select>
        </FormControl>
    );
}