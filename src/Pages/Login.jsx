import React, { useState } from 'react';

import SVGIcons from '../Components/SVGIcons';
import { Typography, Button, Checkbox, FormGroup, Stack, Box, FormControlLabel, Radio, RadioGroup, TextField, FormControl, Select, MenuItem, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CountryCodes from './CountryCodes';

const Login = () => {
    const [radioStatus, setRadioStatus] = useState('private');
    const [checkbox, setCheckbox] = useState(false);
    const [showPassword, setShowPassword] = useState('false');

    const handleSubmit = async (e) => {
        e.preventDefault();

        let obj = {
            email: e.target.email.value,
            number: e.target.select.value + e.target.number.value,
            name: e.target.name.value,
            firstName: e.target.firstName.value,
            password: e.target.password.value,
            country: e.target.country.value,
            house: e.target.house.value,
            idx: e.target.idx.value,
        };

        console.log(obj);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='Login'>
            <Typography fontSize='37px' fontWeight='600' mb='14px'>Регистрация аккаунта</Typography>
            <Typography fontSize='24 px' fontWeight='400' color='#686877'>С помощью регистраци Вы сможете покупать у нас в 3 раза быстрее</Typography>
            <Stack direction="row" spacing={4} height='1100px' width='100%' p='25px 110px'>
                <Stack spacing={0} height='100%' width='70%' bgcolor='#F4F5F9' borderRadius='15px' padding='20px 45px 45px 45px'>
                    <Typography fontWeight='400' fontSize='14px' color='#828282' textAlign='end'>* обязательные поля</Typography>
                    <Stack spacing={0} alignItems='center' paddingTop='10px'>
                        <Typography fontWeight='600' fontSize='27px' marginBottom='7px'>Заполните форму регистрации</Typography>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            value={radioStatus}
                            onChange={(e) => setRadioStatus(e.target.value)}
                        >
                            <FormControlLabel value="private" control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: '#74CCD8',
                                },
                                '& .MuiSvgIcon-root': {
                                    fontSize: '35px',
                                },
                            }} />} label={<Typography marginRight='30px' fontSize='20px'>Частное лицо</Typography>} />
                            <FormControlLabel value="entity" control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: '#74CCD8',
                                },
                                '& .MuiSvgIcon-root': {
                                    fontSize: '35px',
                                },
                            }} />} label={<Typography fontSize='20px'>Юридическое лицо</Typography>} />
                        </RadioGroup>
                        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '10px' }}>
                            <Stack spacing={2}>
                                <TextField name='email' fullWidth className="inputRounded" id="outlined-basic" label={<Typography fontSize='16px'>Электронная почта*</Typography>} variant="outlined" />
                                <Stack style={{ flexDirection: 'row' }} justifyContent='space-between' alignItems='center'>
                                    <FormControl style={{ width: '170px' }}>
                                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                        <Select
                                            className="inputRounded"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Country"
                                            name='select'
                                            defaultValue='+998'
                                            style={{ display: 'flex' }}
                                        >
                                            {CountryCodes.map((country, idx) => {
                                                return (
                                                    <MenuItem key={idx} style={{ width: '200px', padding: '10px 15px', display: 'flex', justifyContent: 'space-between    ' }} value={country.dialCode}>
                                                        <img style={{ borderRadius: '90%', width: '35px' }} src={country.flag} alt="" />
                                                        <Typography width='70px'>{country.dialCode}</Typography>
                                                    </MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                    <TextField name='number' style={{ width: '890px' }} type='number' className="inputRounded" id="outlined-basic" label={<Typography fontSize='16px'>Номер телефона*</Typography>} variant="outlined" />
                                </Stack>
                                <Stack style={{ flexDirection: 'row' }} justifyContent='space-between' alignItems='center' gap='20px'>
                                    <TextField name='name' style={{ width: '50%' }} className="inputRounded" id="outlined-basic" label={<Typography fontSize='16px'>Ваше имя*</Typography>} variant="outlined" />
                                    <TextField name='firstName' style={{ width: '50%' }} className="inputRounded" id="outlined-basic" label={<Typography fontSize='16px'>Фамилия*</Typography>} variant="outlined" />
                                </Stack>
                                <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Придумайте пароль (от 6 до 10 символов)*</InputLabel>
                                    <OutlinedInput
                                        name='password'
                                        fullWidth
                                        className="inputRounded"
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        // onChange={() => setShowPassword('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    style={{ marginRight: '3px' }}
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(showPassword === true ? false : true)}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Придумайте пароль (от 6 до 10 символов)*"
                                    />
                                </FormControl>
                                <Typography fontWeight='500' fontSize='21px' textAlign='center'>Или</Typography>
                                <Stack className='inputRounded' flexDirection={'row'} gap='20px'>
                                    <Button variant="contained" fullWidth sx={{ height: '50px', backgroundColor: '#FFFFFF', "&:hover": { backgroundColor: "#FFFFFF" }, gap: '7px' }} startIcon={<SVGIcons icon="google" />}>Зарегестрироватся через Google</Button>
                                    <Button variant="contained" fullWidth sx={{ height: '50px', color: 'white!important', backgroundColor: '#4867AA', "&:hover": { backgroundColor: "#4867AA" }, gap: '7px' }} startIcon={<SVGIcons icon="facebook" />}>Регистрация через Faceboock</Button>
                                </Stack>
                            </Stack>
                            <Stack marginTop='45px' spacing={2} className='inputRounded'>
                                <Typography fontWeight='600' fontSize='27px' marginBottom='7px' textAlign='center'>Адрес для получения доставки</Typography>
                                <TextField name='country' fullWidth className="inputRounded" id="outlined-basic" label={<Typography fontSize='16px'>Город / Село / Пагаст / Район*</Typography>} variant="outlined" />
                                <TextField name='house' fullWidth className="inputRounded" id="outlined-basic" label={<Typography fontSize='16px'>Улица / Дом / Квартира*</Typography>} variant="outlined" />
                                <TextField name='idx' fullWidth className="inputRounded" id="outlined-basic" label={<Typography fontSize='16px'>Почтовый индекс*</Typography>} variant="outlined" />
                                <FormGroup style={{ marginTop: '25px' }}>
                                    <FormControlLabel control={<Checkbox onChange={e => setCheckbox(!checkbox)} />} label={
                                        <Typography display='flex' fontSize='20px'>Я ознакомился (-ась) и согласен (-на) с
                                            <Typography component='span' margin='0 0 0 5px' display='flex' color='#090F24' fontSize='20px' fontWeight='600'>правилами покупки
                                                <Typography margin='0 5px 0 0' component='span' fontSize='20px'>и</Typography>правилами обработки данных</Typography>.
                                        </Typography>
                                    } />
                                </FormGroup>
                                <Stack alignItems='center' justifyContent='center' height='80px'>
                                    <Button type='submit' disabled={!checkbox} variant="contained" sx={{ width: '300px', height: '50px', backgroundColor: '#74CCD8', "&:hover": { backgroundColor: "#74CCD8" }, gap: '7px' }} startIcon={<SVGIcons icon="galka" />}>Зарегестрироватся</Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Stack>
                </Stack>
                <Stack alignItems='center' position='relative' spacing={2} height='100%' width='30%' border='1px solid #E4E7EE' borderRadius='15px' padding='55px 0'>
                    <Typography fontWeight='500' fontSize='26px'>Преимущества регистрации</Typography>
                    <Box>
                        <SVGIcons icon="coupon" />
                    </Box>
                    <Typography position='relative' top='-13px' fontWeight='500' fontSize='24px' width='400px' textAlign='center'>Купон бесплатной доставки каждый месяц</Typography>
                    <Typography position='relative' top='-15px' fontWeight='400' fontSize='21px' width='300px' textAlign='center' color='#686877'>в пакоматы Latvijas Pasts, при покупке от 30 €.</Typography>
                    <Box position='relative' top='-5px'>
                        <SVGIcons icon="discount" />
                    </Box>
                    <Typography position='relative' fontWeight='500' fontSize='24px' width='400px' textAlign='center'>Акции и скидки для постоянных покупателей</Typography>
                    <Box position='relative'>
                        <SVGIcons icon="rocket" />
                    </Box>
                    <Typography position='relative' top='-10px' fontWeight='500' fontSize='24px' width='400px' textAlign='center'>Скорость покупки</Typography>
                    <Box position='relative' top='5px'>
                        <SVGIcons icon="percent" />
                    </Box>
                    <Typography position='relative' fontWeight='500' fontSize='24px' width='400px' textAlign='center'>Бонусы с каждой покупки</Typography>
                </Stack>
            </Stack>
        </div>
    );
}

export default Login;
