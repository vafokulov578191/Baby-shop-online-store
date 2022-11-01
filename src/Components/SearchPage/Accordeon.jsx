import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Range from './Range';
import { useState } from 'react';
import { Box, Button, Checkbox, Link, Stack, TextField } from '@mui/material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'white',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid #74CCD8',
}));

const arr = [
    'Коляски', 'Автокресла', 'Детская комната', 'Стульчики для кормления', 'Транспорт и спорт', 'Игрушки и игры', 'Одежда и обувь', 'Товары для мамочек', 'Гигиена и уход', 'Кормление', 'Детксие подарки', 'Елки и игрушки', 'Подарочные карты'
]
const links = [
    'Простыни (110)', 'Наволочки (46)', 'Клеенки и подклады (12)', 'Детское постельное белье: 6+ частей (12)', 'Все для пеленания', 'Мягкие игрушки', 'Аксессуары'
]
const brands = [
    'Avent',
    'Omron',
    'NUK',
    'Baby Santh',
    'Hipp',
    'Nutrilon',
    'Nestogen',
    'ADAMEX',
    'Chicco'
]
const colors = [
    'Зеленый',
    'Красный',
    'Синий',
    'Бежевый'
]
export default function Accardeon({ type, onBrand, onColor, color, brand }) {
    const [expanded, setExpanded] = React.useState('panel1');
    const [backColor, setBackColor] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        setBackColor(true)
    };

    const [value, setValue] = useState([20, 37]);

    const handleChange2 = (event, newValue) => {
        setValue(newValue);
    };

    const arr2 = [
        {
            name: 'По цене:',
            temp: <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                    <TextField value={value[0]} sx={{ width: '100px' }} />
                    <span style={{ fontSize: '25px' }} >-</span>
                    <TextField value={value[1]} sx={{ width: '100px' }} />
                </Box>
                <Range val={value} onChange={handleChange2} />
            </Box>
        },
        {
            name: 'Бренды:',
            temp: <Stack sx={{ width: '100%' }}>
                {
                    brands.map((i, index) => <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} ><Checkbox onChange={(e) => {
                        onBrand([...brand, e.target.parentNode.nextSibling.nextSibling.innerHTML])
                    }} /> <Typography variant='span'>{i}</Typography> <Typography sx={{ color: '#c4c4c4' }} variant='span'>(24)</Typography> </Box>)
                }
            </Stack>
        },
        {
            name: 'По цветам:',
            temp: <Stack>
                {
                    colors.map((i, index) => <Box key={index} ><Checkbox onChange={(e) => onColor([...color, e.target.parentNode.nextSibling.nextSibling.innerHTML])} /> <Typography variant='span'>{i}</Typography> <Typography sx={{ color: '#c4c4c4' }} variant='span'>(24)</Typography> </Box>)
                }
            </Stack>
        },
        {
            name: 'По материалу:',
        },
        {
            name: 'Страна-производитель:',
        }
    ]

    switch (type) {
        case 'default':
            return (
                <div>
                    {
                        arr.map((i, index) => <Accordion key={i} sx={{ borderTop: '1px solid #74CCD8' }} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>{i}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                {
                                    links.map((item, idx) => <Button key={idx} sx={{ textDecoration: 'underline', color: 'grey !important', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>{item}</Button>)
                                }
                            </AccordionDetails>
                        </Accordion>)
                    }
                </div>
            );
        case 'filter':
            return (
                <div>
                    {
                        arr2.map((i, index) => <Accordion key={i.name} sx={{ borderTop: '1px solid #74CCD8' }} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>{i.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                {i.temp}
                            </AccordionDetails>
                        </Accordion>)
                    }
                </div>
            );
        default:
            break;
    }
}