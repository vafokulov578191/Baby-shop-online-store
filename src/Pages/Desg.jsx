import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Desg = () => {
    const [width, setWidth] = useState(23.5)
    const [price, setPrice] = useState(1000)
    const [count, setCount] = useState(1)
    const [price2, setPrice2] = useState(1000)
    const [count2, setCount2] = useState(1)
    const [aprice, setAPrice] = useState(2500)
    const [aprice2, setAPrice2] = useState(2500)

    const handleClick = () => {
        if (count2 === 1) {
        } else {
            setCount2(prev => prev - 1)
            setPrice2(prev => prev - 1000)
            setAPrice2(prev => prev - 2500)
        }
    }
    const handleClick2 = () => {
        setCount2(prev => prev + 1)
        setPrice2(prev => prev + 1000)
        setAPrice2(prev => prev + 2500)
    }
    const handleClick3 = () => {
        if (count === 1) {
        } else {
            setCount(prev => prev - 1)
            setPrice(prev => prev - 1000)
            setAPrice(prev => prev - 2500)
        }
    }
    const handleClick4 = () => {
        setCount(prev => prev + 1)
        setPrice(prev => prev + 1000)
        setAPrice(prev => prev + 2500)
    }


    const handleChange = () => {
        setWidth(50.5)
    }
    const handleChange2 = () => {
        setWidth(73.5)
    }
    const handleChange3 = () => {
        setWidth(98.5)
    }
    const handleChange4 = () => {
        setWidth(23.5)
    }
    return (
        <>
            <Stack sx={{ width: '91%', margin: '0 auto' }}>
                <Typography variant='h2' sx={{ textAlign: 'center' }}>Оформление заказа</Typography>
                <Stack sx={{ width: "94%", marginTop: '30px' }}>
                    <Box sx={{ width: '109%', padding: '20px', borderRadius: '5px', background: '#F4F5F9', color: 'black', position: 'relative' }}>
                        <Stack sx={{ zIndex: '1000', flexDirection: 'row', width: '80%', top: '-10px', left: '-10px', position: 'absolute', justifyContent: 'space-between', transform: 'translateX(-10px)' }}>
                            <Box sx={{ cursor: 'pointer', width: '60px', height: '60px', display: 'flex', alignItems: 'center', borderRadius: '1000px', justifyContent: 'center', background: 'white', border: '1px solid #c4c4c4', color: width > 23 ? 'white' : 'black', background: width > 23 ? 'linear-gradient(180deg, #ED9BC1 0%, #ED9BB9 100%)' : 'white' }} onClick={handleChange4} >1</Box>
                            <Box sx={{ cursor: 'pointer', width: '60px', height: '60px', display: 'flex', alignItems: 'center', borderRadius: '1000px', justifyContent: 'center', background: 'white', border: '1px solid #c4c4c4', color: width > 50 ? 'white' : 'black', background: width > 50 ? 'linear-gradient(180deg, #ED9BC1 0%, #ED9BB9 100%)' : 'white' }} onClick={handleChange} >2</Box>
                            <Box sx={{ cursor: 'pointer', width: '60px', height: '60px', display: 'flex', alignItems: 'center', borderRadius: '1000px', justifyContent: 'center', background: 'white', border: '1px solid #c4c4c4', color: width > 73 ? 'white' : 'black', background: width > 73 ? 'linear-gradient(180deg, #ED9BC1 0%, #ED9BB9 100%)' : 'white' }} onClick={handleChange2} >3</Box>
                            <Box sx={{ cursor: 'pointer', width: '60px', height: '60px', display: 'flex', alignItems: 'center', borderRadius: '1000px', justifyContent: 'center', background: 'white', border: '1px solid #c4c4c4', color: width > 98 ? 'white' : 'black', background: width > 98 ? 'linear-gradient(180deg, #ED9BC1 0%, #ED9BB9 100%)' : 'white' }} onClick={handleChange3}>4</Box>
                        </Stack>
                        <Stack sx={{ zIndex: '100', flexDirection: 'row', width: '90%', top: '7px', left: '70px', position: 'absolute', justifyContent: 'space-between', transform: 'translateX(-10px)' }}>
                            <Typography variant='span' sx={{ color: width > 23 ? 'white' : 'black' }}>Корзина покупок</Typography>
                            <Typography variant='span' sx={{ transform: 'translateX(-40px)', color: width > 50 ? 'white' : 'black' }}>Данные покупателя</Typography>
                            <Typography variant='span' sx={{ transform: 'translateX(-90px)', color: width > 73 ? 'white' : 'black' }}>Доставка</Typography>
                            <Typography variant='span' sx={{ transform: 'translateX(-60px)', color: width > 98 ? 'white' : 'black' }}>Подтверждение</Typography>
                        </Stack>
                        <Stack sx={{ transition: '.4s ease', top: '0px', width: `${width}%`, background: '#74CCD8', position: 'absolute', padding: '20px' }}>

                        </Stack>
                    </Box>
                </Stack>
                <Stack sx={{ width: '102%', marginTop: '40px', gap: '20px' }}>
                    <Stack sx={{ width: '100%', flexDirection: 'row', border: '1px solid #c4c4c4', alignItems: 'center', justifyContent: 'space-between', padding: '25px', borderRadius: '15px' }}>
                        <Stack sx={{ flexDirection: 'row', gap: '30px', alignItems: 'center' }}>
                            <img width={'70px'} src="/img/image-0.png" alt="" />
                            <Stack sx={{ gap: '10px' }}>
                                <h2>Прогулочная коляска ABC Design Ping</h2>
                                <span style={{ color: '#c4c4c4' }}>Код товара: 000433</span>
                            </Stack>
                        </Stack>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <Typography variant='h4'>{price} $</Typography>
                            <Typography variant='h5' sx={{ textDecoration: 'line-through', color: '#c4c4c4' }}>{aprice} $</Typography>
                            <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                                <Button sx={{ width: '40px !important', fontSize: '26px', height: '55px' }} onClick={handleClick3} variant='outlined'>-</Button>
                                <Typography variant='h6'>{count}</Typography>
                                <Button sx={{ width: '40px !important', fontSize: '26px', height: '55px' }} onClick={handleClick4} variant='outlined'>+</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack sx={{ width: '100%', marginBottom: '20px', flexDirection: 'row', border: '1px solid #c4c4c4', alignItems: 'center', justifyContent: 'space-between', padding: '25px', borderRadius: '15px' }}>
                        <Stack sx={{ flexDirection: 'row', gap: '30px', alignItems: 'center' }}>
                            <img width={'70px'} src="/img/image-0.png" alt="" />
                            <Stack sx={{ gap: '10px' }}>
                                <h2>Прогулочная коляска ABC Design Ping</h2>
                                <span style={{ color: '#c4c4c4' }}>Код товара: 000433</span>
                            </Stack>
                        </Stack>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <Typography variant='h4'>{price2} $</Typography>
                            <Typography variant='h5' sx={{ textDecoration: 'line-through', color: '#c4c4c4' }}>{aprice2} $</Typography>
                            <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                                <Button sx={{ width: '40px !important', fontSize: '26px', height: '55px' }} onClick={handleClick} variant='outlined'>-</Button>
                                <Typography variant='h6'>{count2}</Typography>
                                <Button sx={{ width: '40px !important', fontSize: '26px', height: '55px' }} onClick={handleClick2} variant='outlined'>+</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{ width: '100%', background: '#F4F5F9', alignItems: 'center', padding: '30px' }}>
                <Stack sx={{ width: '94%', flexDirection: 'row', gap: '20px' }}>
                    <Stack sx={{ width: '50%' }}>
                        <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: '20px' }} >Итого: </Typography>
                        <Stack sx={{ width: '100%' }}>
                            <Stack sx={{ flexDirection: 'row', width: '100%' }}>
                                <Button id='activate' sx={{ width: '231px', padding: '10px', background: 'white', border: '1px solid #74CCD8 !important', borderTopLeftRadius: '17px', borderTopRightRadius: '17px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }} variant={'outlined'}>Рига</Button>
                                <Button sx={{ width: '231px', padding: '10px', background: 'white', border: '1px solid #74CCD8 !important', borderTopLeftRadius: '17px', borderTopRightRadius: '17px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }} variant={'outlined'}>Вне Риги</Button>
                                <Button sx={{ width: '231px', padding: '10px', background: 'white', border: '1px solid #74CCD8 !important', borderTopLeftRadius: '17px', borderTopRightRadius: '17px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }} variant={'outlined'}>Страны Балтии</Button>
                            </Stack>
                            <Stack sx={{ background: 'white', padding: '20px', borderBottomLeftRadius: '17px', border: '1px solid #74CCD8', borderBottomRightRadius: '17px', paddingBottom: '60px', gap: '25px', alignItems: 'center' }}>
                                <Stack sx={{ flexDirection: 'row', width: '100%', height: '50px', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                                        <img width={'50px'} src="/img/Latvijas_Pasts.png" alt="nothing" />
                                        <Typography sx={{ fontSize: '18px' }} variant='span'>Получение в пакомате Latvijas Pasts</Typography>
                                    </Stack>
                                    <Typography fontWeight={600} variant='h6'>1.69 €</Typography>
                                </Stack>
                                <Stack sx={{ flexDirection: 'row', width: '100%', height: '50px', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                                        <img width={'50px'} src="/img/Latvijas_Pasts.png" alt="nothing" />
                                        <Typography sx={{ fontSize: '18px' }} variant='span'>Получение в пакомате Latvijas Pasts</Typography>
                                    </Stack>
                                    <Typography fontWeight={600} variant='h6'>1.69 €</Typography>
                                </Stack>
                                <Typography variant='span' marginTop={'20px'} fontWeight={500} color={'#B7B8C5'}>Показать все виды доставки</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack sx={{ width: '50%' }}>
                        <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: '20px' }} >Итого: </Typography>
                        <Stack sx={{ width: '100%' }}>
                            <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', background: 'white', padding: '20px', border: '1px solid #74CCD8', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
                                <Stack sx={{ gap: '15px' }}>
                                    <Typography variant='h5'>Сумма товара</Typography>
                                    <Typography color={'red'}>Скидка 30%</Typography>
                                </Stack>
                                <Stack sx={{ gap: '15px' }}>
                                    <Typography variant='h5'>100€</Typography>
                                    <Typography color={'red'}>- 15€</Typography>
                                </Stack>
                            </Stack>
                            <Stack sx={{ background: 'white', padding: '20px', borderBottomLeftRadius: '17px', border: '1px solid #74CCD8', borderBottomRightRadius: '17px', gap: '8px' }}>
                                <Stack sx={{ flexDirection: 'row', width: '100%', height: '50px', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography fontSize={20} variant='span'>Всего:</Typography>
                                    <Typography fontWeight={600} variant='h4'>1 603.99 €</Typography>
                                </Stack>
                                <TextField id="standard-basic" label="Введите код купона" variant="standard" sx={{ width: '200px' }} />
                                <Stack sx={{ flexDirection: 'row', width: '100%', height: '50px', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px', }} variant='h5'><img src="/img/Pig.png" alt="" />Вы сэкономили: <span style={{ color: 'red' }}>70.00 €</span></Typography>
                                    <Button id={'btn'} sx={{ borderRadius: '50px', background: '#    ', width: '150px', color: 'white !important' }}>Продолжить</Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default Desg