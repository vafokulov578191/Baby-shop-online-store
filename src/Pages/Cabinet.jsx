import { Box, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HouseIcon from '@mui/icons-material/House';
import Avatar from '@mui/material/Avatar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SVGIcons from '../Components/SVGIcons';
import { Helmet } from "react-helmet";
import MycabinetAccordion from '../Components/MyCabinet/MycabinetAccordion';
import siper from '../Components/images/image 2 (5).png'
import siper1 from '../Components/images/image 2 (6).png'
import siper2 from '../Components/images/image 2 (7).png'
import siper3 from '../Components/images/image 2 (8).png'
import siper4 from '../Components/images/image 2 (9).png'
import siper5 from '../Components/images/image 3 (6).png'


const Cabinet = () => {

    let arr = [
        {
            id: 1,
            color: '#FFC186',
            text: 'В ожидании',
            expanded: 'expanded={true}',
            money: 1244.99,
            amount: 2,
            things: [1, 2],
            products: [
                {
                    id: 11,
                    bg: siper,
                    title: 'ANEX детская коляска m/type',
                    money: 19.99,
                    kod: '000433'
                },
                {
                    id: 12,
                    bg: siper1,
                    title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
                    money: 109.99,
                    kod: '000434'
                },
            ]
        },
        {
            id: 2,
            color: 'green',
            text: 'Оплачен',
            money: 48.99,
            amount: 1,
            things: [1],
            products: [
                {
                    id: 22,
                    bg: siper,
                    title: 'ANEX детская коляска m/type',
                    money: 19.99,
                    kod: '000433'
                },
            ]
        },
        {
            id: 3,
            color: 'green',
            text: 'Оплачен',
            money: 17.99,
            amount: 1,
            things: [1],
            products: [
                {
                    id: 121,
                    bg: siper1,
                    title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
                    money: 109.99,
                    kod: '000434'
                },
            ]
        },
        {
            id: 4,
            color: 'red',
            text: 'Отменен',
            money: 146.95,
            amount: 1,
            things: [1],
            products: [
                {
                    id: 111,
                    bg: siper2,
                    title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
                    money: 999.99,
                    kod: '000435'
                },
            ]
        },
        {
            id: 5,
            color: 'green',
            text: 'Оплачен',
            money: 1244.99,
            amount: 1,
            things: [1],
            products: [
                {
                    id: 25,
                    bg: siper3,
                    title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
                    money: 499.99,
                    kod: '000436'
                },
            ]
        },
        {
            id: 6,
            color: 'red',
            text: 'Отменен',
            money: 199.95,
            amount: 1,
            things: [1],
            products: [
                {
                    id: 23,
                    bg: siper4,
                    title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
                    money: 109.99,
                    kod: '000434'
                },
            ]
        },
        {
            id: 7,
            color: 'green',
            text: 'Оплачен',
            money: 27.19,
            amount: 1,
            things: [1],
            products: [
                {
                    id: 24,
                    bg: siper5,
                    title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
                    money: 999.99,
                    kod: '000435'
                },
            ]
        },
    ]


    return (
        <>
            <Helmet>
                <link
                    rel="icon"
                    href="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png"
                />
                <title>Личный кабинеть</title>
            </Helmet>
            <Box maxWidth='1785px' height='100%' margin='0px auto' display='flex' flexDirection='column'>
                <Box maxWidth='100%' marginTop='45px'>
                    <Box display='flex'
                        alignItems='center' width="100%" height="50px" margin="7px 0 3px" bgcolor="">
                        <IconButton
                            style={{ padding: '3px 0 0' }}
                            color="primary" aria-label="upload picture" component="label">
                            <Link className='pathBtn' to="/">
                                <HouseIcon />
                            </Link>
                        </IconButton>
                        <NavigateNextIcon style={{ fontSize: '22px', textAlign: 'center', height: '100%', paddingTop: '2px', fontWeight: '300', color: '#686877' }} />
                        <h3>
                            <Link
                                className='pathBtn'
                                to="/search">Каталог
                            </Link>
                        </h3>
                        <NavigateNextIcon
                            style={{ fontSize: '22px', textAlign: 'center', height: '100%', paddingTop: '2px', fontWeight: '300', color: '#686877' }}
                        />
                        <h3>

                            <Link
                                className='pathBtn'
                                to="/">Детские коляски</Link>
                        </h3>
                        <NavigateNextIcon
                            style={{ fontSize: '22px', textAlign: 'center', height: '100%', paddingTop: '2px', fontWeight: '300', color: '#686877' }}
                        />
                        <h3>
                            <Link
                                className='pathBtn'
                                to="/">Коляски-трости</Link>
                        </h3>
                    </Box>
                </Box>
                <Box width='100%' height='100%' display='flex' gap='23px' margin='0px auto' marginTop='40px' overflow='hidden'>
                    <Box width='350px' height='100%' borderRadius='15px' border='1px solid #74CCD8' display='flex' flexDirection='column'>
                        <Box width='100%' height='100%' margin='0px auto' marginTop='30px' marginBottom='25px' display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                            <Avatar alt="Cindy Baker" src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" sx={{ width: '130px', height: '130px' }} />
                            <Box display='flex' alignItems='center' gap='7px' marginTop='10px' color='#686877' sx={{ cursor: 'pointer' }}>
                                <PhotoCameraIcon />
                                <span>Изменить</span>
                            </Box>
                            <p style={{ marginTop: '20px', fontSize: '19px', width: '190px', fontWeight: '600' }}>Иванова Иванна Ивановна</p>
                        </Box>
                        <Box width='100%' height='100%' margin='0px auto' display='flex' flexDirection='column' alignItems='center' >
                            <Box sx={{ width: '100%', height: '53px', display: 'flex', alignItems: 'center', gap: '12px', bgcolor: '#74CCD8', borderRadius: 'none !important', cursor: 'pointer', paddingLeft: '23px', color: 'white', fontWeight: '600' }}>
                                <SVGIcons icon='storeCabinet' />
                                <span>Мои заказы</span>
                            </Box>
                            <Link to='/liked' style={{ width: '100%', height: '53px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #74CCD8', cursor: 'pointer', paddingLeft: '23px', color: 'black', fontWeight: '600' }} >
                                <SVGIcons icon='LikeCabinet' />
                                <span>Список желаний</span>
                            </Link>
                            <Box sx={{ width: '100%', height: '53px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #74CCD8', borderRadius: 'none !important', cursor: 'pointer', paddingLeft: '23px', color: 'black', fontWeight: '600', marginRight: '8px' }}>
                                <SVGIcons icon='StarCabinet' />
                                <span>Акции и скидки</span>
                            </Box>
                            <Link to='/' style={{ width: '100%', height: '53px', display: 'flex', alignItems: 'center', gap: '12px', borderRadius: 'none !important', cursor: 'pointer', paddingLeft: '23px', color: 'black', fontWeight: '600' }}>
                                <SVGIcons icon='SettingsCabinet' />
                                <span>Настройки профиля</span>
                            </Link>
                        </Box>
                    </Box>


                    <Box width='100%' height='100%' display='flex' flexDirection='column' fontFamily='sans-serif'>
                        <h1>История Ваших заказов</h1>
                        <Box width='100%' height='100%' display='flex' flexDirection='column' marginTop='13px'>
                            <Box width='95%' height='100%' display='flex' justifyContent='space-between' paddingLeft='20px' paddingRight='20px' color='#686877' fontSize='19px' fontWeight='600'>
                                <li>№ заказа</li>
                                <li>Дата</li>
                                <li>Колл-во</li>
                                <li>Сумма</li>
                                <li>Статус</li>
                            </Box>
                            <MycabinetAccordion arr={arr} />
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default Cabinet
