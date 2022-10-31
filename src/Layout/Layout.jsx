import { Stack, Button, Box, Typography } from '@mui/material'
import React from 'react'
import AccountMenu from '../Components/AccountMenu'
import SVGIcons from '../Components/SVGIcons'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    const style = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
    return (
        <>
            <header style={{ maxWidth: "1920px", margin: "0 auto", padding: "10px 0" }} >
                <Stack sx={{ ...style, justifyContent: "space-between" }} m='15px 50px'>
                    <SVGIcons icon="logo" />
                    <Stack sx={{ ...style, gap: "25px" }}>
                        <Link to="#" >О нас</Link>
                        <Link to="#" >Оплата и доставка</Link>
                        <Link to="#" >Отзывы</Link>
                        <Link to="#" >FAQ</Link>
                        <Link to="#" >Блог</Link>
                        <Link to="#" >Контакты</Link>
                    </Stack>
                    <Stack sx={style} gap='10px'>
                        <Button startIcon={<SVGIcons icon="phone" />}>+38 097 435 6743</Button>
                        <Button startIcon={<SVGIcons icon="email" />}>Kidsshop@gmail.com</Button>
                    </Stack>
                    <Stack sx={style} gap='15px'>
                        <Typography style={{ cursor: "pointer" }}>RU</Typography>
                        <Typography style={{ cursor: "pointer" }}>LV</Typography>
                    </Stack>
                </Stack>
                <Stack sx={{ ...style, justifyContent: "space-between", background: "#F4F5F9", padding: "10px 65px" }} >
                    <Link to={'/search'}>
                        <Button startIcon={<SVGIcons icon="menu" />} >Каталог товаров</Button>
                    </Link>
                    <form style={{ ...style, width: "30%" }} >
                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', border: "1px solid #c4c4c4", borderRadius: "30px", overflow: "hidden", background: "#fff", width: "100%" }}>
                            <Box width="10%" height="100%" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                <SVGIcons icon="search" />
                            </Box>
                            <input type="text" placeholder="Введите запрос для поиска" style={{ all: "unset", padding: "10px 20px", width: "100%" }} />
                            <Button variant="contained" sx={{ width: "20%", height: "100%", background: "#74CCD8" }} >Найти</Button>
                        </Box>
                    </form>
                    <AccountMenu />
                </Stack>
            </header>
            <main style={{ maxWidth: "1920px", margin: "0 auto", }} >
                {children}
            </main>
            <footer style={{ maxWidth: "1920px", margin: "0 auto", ...style, justifyContent: "space-between", padding: "40px 170px" }} >
                <Stack gap='17px'>
                    <Typography variant="b" marginBottom='10px'>
                        Контакты
                    </Typography>
                    <Button style={{ paddingRight: '60px' }} startIcon={<SVGIcons icon="phone" />}>+38 097 435 6743</Button>
                    <Button startIcon={<SVGIcons icon="email" />}>Kidsshop@gmail.com</Button>
                    <Button startIcon={<SVGIcons icon="email" />}>Kidsshop@gmail.com</Button>
                </Stack>
                <Stack gap='17px'>
                    <Typography variant="b" marginBottom='10px'>
                        Меню сайта
                    </Typography>
                    <Stack sx={{ ...style, alignItems: "flex-start", gap: "40px" }} >
                        <Stack gap='17px'>
                            <Link to="#" >О нас</Link>
                            <Link to="#" >Оплата и доставка</Link>
                            <Link to="#" >Отзывы</Link>
                            <Link to="#" >FAQ</Link>
                            <Link to="#" >Блог</Link>
                            <Link to="#" >Контакты</Link>
                        </Stack>
                        <Stack gap='17px'>
                            <Link to="#" >О нас</Link>
                            <Link to="#" >Оплата и доставка</Link>
                            <Link to="#" >Отзывы</Link>
                            <Link to="#" >FAQ</Link>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack gap='50px'>
                    <Typography variant="b" >
                        Социальные сети
                    </Typography>
                    <SVGIcons icon="logo" />
                </Stack>
            </footer>
        </>
    )
}


export default Layout