import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { cardImg, Images } from "../Components/Arr";
import SwiperComponent from "../Components/SwiperComponent";
import '../App.css'
import BGimg from '../Components/images/Rectangle 9 (1).png'
import BGimg1 from '../Components/images/image 4 (1).png'
import Sale from '../Components/images/Group 775.png'
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/features/productsThunk";
import ItemComponent from "../Components/ItemComponent";
import { fetchAllSales } from "../store/features/ProductSlice";


export default function Home() {
    let lev = false
    const products = useSelector(state => state.products.data);
    const salesProducts = useSelector(state => state.products.sales);

    const dispatch = useDispatch();

    useEffect(() => {
        if (products.length == 0) {
            dispatch(fetchProducts())
        }
        if (salesProducts.length === 0) {
            dispatch(fetchAllSales())
        }
    }, []);

    return (
        <>
            <Helmet>
                <link
                    rel="icon"
                    href="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png"
                />
                <title>Bernu: подарки для ваших детей</title>
            </Helmet>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1920px', margin: '0px auto', height: '100%' }}>
                <SwiperComponent
                    arr={cardImg}
                    card={Images}
                    slides={1}
                    pagination={true}
                    skid={true}
                    wid={true}
                />
                <Box display='flex' flexDirection='column' margin='0px auto' width='100%'>
                    <Box width='100%' height='610px' textAlign='center' display='flex' flexDirection='column' gap='30px'>
                        <h1 style={{ marginTop: '60px' }}>Вы уже смотрели</h1>
                        <SwiperComponent
                            arr={products}
                            card={ItemComponent}
                            slides={4}
                            pagination={false}
                            pad={true}
                            level={true}
                        />
                    </Box>
                    <Box maxWidth='1920px' height={lev === true ? '610px' : '735px'} textAlign='center' display='flex' flexDirection='column' gap='30px' bgcolor='#F4F5F9'>
                        <h1 style={{ marginTop: lev === true ? '40px' : '60px' }}>Акции и скидки</h1>
                        <SwiperComponent
                            arr={salesProducts}
                            card={ItemComponent}
                            slides={4}
                            pad={true}
                            level={false}
                        />
                    </Box>
                    <Box width='100%' height='270px' display='flex' position={'relative'}>
                        <Box width='74%' height='100%' position='relative' fontFamily='sans-serif'>
                            <img src={BGimg} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', zIndex: '100' }} />
                            <img src={Sale} alt="" style={{ position: 'absolute', zIndex: '500', top: '-63px' }} />
                            <Box width='730px' position='absolute' zIndex='1000' display='flex' flexDirection='column' gap='10px' top='50%' left='50%' sx={{ transform: 'translate(-50%,-50%)' }}>
                                <h1>Получайте информацию о скидках первыми</h1>
                                <span>Оформите подписку и вы будете вкурсе всех наших выгодных акций и скидок</span>
                                <Box display='flex' gap='20px' marginTop='5px'>
                                    <input type="text" style={{ width: '500px', height: '45px', borderRadius: '34px', border: '1px solid #50909C', padding: '20px' }} />
                                    <Button sx={{ width: '230px', height: '46px', bgcolor: '#74CCD8', borderRadius: '25px', color: 'white' }}>Оформить подписку</Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box width='30%' height='100%' position={'absolute'} zIndex={'10'} right={'0px'}>
                            <img src={BGimg1} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', right: '0px', zIndex: '10' }} />
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection='column' margin='0px auto' width="100%" >
                        <Box height='735px' textAlign='center' display='flex' flexDirection='column' gap='30px'>
                            <h1 style={{ marginTop: '60px' }}>Популярные товары</h1>
                            <SwiperComponent
                                arr={products}
                                card={ItemComponent}
                                slides={4}
                                pad={true}
                                level={false}
                            />
                        </Box>
                    </Box>
                    <Box maxWidth='1920px' height={lev === true ? '610px' : '735px'} textAlign='center' display='flex' flexDirection='column' gap='30px' bgcolor='#F4F5F9'>
                        <h1 style={{ marginTop: lev === true ? '40px' : '60px' }}>Акции и скидки</h1>
                        <SwiperComponent
                            arr={salesProducts}
                            card={ItemComponent}
                            slides={4}
                            pad={true}
                            level={false}
                        />
                    </Box>
                </Box>
            </div>
        </>
    );
}