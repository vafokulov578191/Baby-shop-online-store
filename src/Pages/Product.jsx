import React, { useState } from 'react'
import './Product.css'
import { Link } from 'react-router-dom';
import { IconButton, FormControl, Box, MenuItem, Select } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckIcon from '@mui/icons-material/Check'
import InstagramIcon from '@mui/icons-material/Instagram'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Button, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';


const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
    let styleClass = "star-rating-blank";
    if (rating && rating >= starId) {
        styleClass = "star-rating-filled";
    }

    return (
        <div
            className="star"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <svg
                className={styleClass}
                viewBox="0 0 25 23"
                data-rating="1"
            >
                <polygon
                    stroke-width="0"
                    points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                />
            </svg>
        </div>
    );
};
function Product() {
    //Products
    const products = useSelector(state => console.log(state))
    const [data, setData] = useState(null)

    //active
    const [isActive, setIsActive] = useState(false);
    //slider
    const [cuurentImg, setImg] = useState('image0.png')
    const sliderImgs = [
        {
            img: '/img/image-0.png',
            alt: 'Product'
        },
        {
            img: '/img/image-1.png',
            alt: 'Product'
        },
        {
            img: '/img/image-2.png',
            alt: 'Product'
        },
        {
            img: '/img/image-3.png',
            alt: 'Product'
        },
        {
            img: '/img/image-4.png',
            alt: 'Product'
        },
    ]
    const models_img = [
        {
            img: '/img/image-1.png',
            alt: 'Product'
        },
        {
            img: '/img/image-2.png',
            alt: 'Product'
        },
        {
            img: '/img/image-3.png',
            alt: 'Product'
        },
        {
            img: '/img/image-4.png',
            alt: 'Product'
        },
        {
            img: '/img/image-5.png',
            alt: 'Product'
        },
    ]
    //Input Size
    const [size, setSize] = React.useState('');

    //Stars
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const stars = [1, 2, 3, 4, 5];
    //Counter
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        num > 0 ? setNum(num - 1) : setNum(0)
    }

    //Input Change Size
    let handleChange = (e) => {
        setSize(e.target.value);
    }
    const handleActive = event => {
        //  toggle isActive state on click
        setIsActive(current => !current);
    };



    useEffect(() => {
        const ID = window.location.href.split('=').at(-1)

        axios.get(`http://localhost:3500/employees/${ID}`)
            .then(res => {
                setData(res.data)
            })
    }, [])


    return (

        <>
            <Box className="container" width="calc(100% - 164px);" margin='0 auto'>
                <Box display='flex'
                    alignItems='center' width="100%" height="50px" margin="7px 0 3px" bgcolor="">
                    <IconButton
                        style={{ padding: '3px 0 0' }}
                        color="primary" aria-label="upload picture" component="label">
                        <Link
                            className='pathBtn'
                            to="/"><HouseIcon />
                        </Link>
                    </IconButton>
                    <NavigateNextIcon
                        style={{ fontSize: '22px', textAlign: 'center', height: '100%', paddingTop: '2px', fontWeight: '300', color: '#686877' }}
                    />
                    <h3>
                        <Link
                            className='pathBtn'
                            to="/catalog">Каталог
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
                <Stack direction="column" padding='2px'>
                    <Box>
                        <Typography className='header_product '>{data?.title}</Typography>
                    </Box>
                    <Stack direction="row" alignItems='center' justifyContent='space-between' spacing={2}>
                        <Box className='ImageSide' p='5px'>
                            <Stack direction='column' alignItems='center'>
                                <Stack className='product_slider' gap='5px' direction='column'>
                                    <Box className='product_slider_mainImg'>
                                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={data?.media?.pictures[0]} alt="Main Img" />
                                    </Box>
                                    <Stack direction='row' gap='10px' width='100%' justifyContent='space-evenly' >
                                        {
                                            data?.media?.pictures.map((item, index) => {
                                                <Box className='product_slider_itemImg itemImg_act' key={index} >
                                                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} onClick={() => setImg(item)} src={`${item}`} alt={"alt"} />
                                                </Box>
                                            })
                                        }
                                        <Box className='product_slider_itemImg row center' bgcolor='#F4F5F9' borderRadius='8px' >
                                            <Typography fontSize='22px' fontWeight='500' lineHeight='30px' >+3</Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                                <Stack direction='row' gap='10px' p='20px'>
                                    {
                                        data?.media?.pictures.map((item, index) =>
                                            <Box className='video_item' >
                                                {/* <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} onClick={() => setImg(item)} src={`${item}`} alt={"alt"} /> */}
                                                <img src={item} width="100%" height="100%" />
                                            </Box>
                                        )
                                    }

                                    {/* <Box className='video_item'>
                                                  <video src='https://youtu.be/c-keaqyidxU' width="100%" height="100%" controls="controls" />
                                             </Box>
                                             <Box className='video_item'>
                                                  <video src='https://youtu.be/c-keaqyidxU' width="100%" height="100%" controls="controls" />
                                             </Box> */}
                                </Stack>
                            </Stack>
                        </Box>
                        <Box className='OrderSide'>
                            <Box>
                                <Box className='card_side'>
                                    <Box display='flex' width='100%' alignItems='center' justifyContent='flex-start' color='#686877'>
                                        <IconButton>
                                            <LocalShippingTwoToneIcon fontSize='15px' fontWeight='400' />
                                        </IconButton>
                                        <Typography marginLeft='10px' fontSize='15px' fontStyle='normal' fontWeight='400'>Доставка: 1-2 дня</Typography>
                                        <Stack direction='row' gap='10px' marginLeft='30px' fontSize='15px' lineHeight='20px' fontStyle='normal'>
                                            <span style={{ fontWeight: '700' }}>Код товара:</span>
                                            <p>000433</p>
                                        </Stack>
                                    </Box>
                                    <Box display='flex' width='100%' alignItems='center' justifyContent='space-between'>
                                        <Box style={{ display: 'flex', alignItems: 'center', width: '100%', textAlign: 'center', lineHeight: '20px', fontSize: '14px', fontWeight: '400', color: '#69CB87' }}>
                                            <IconButton>
                                                <CheckIcon style={{ color: '#69CB87', fontSize: '18px', fontWeight: '900' }} />
                                            </IconButton>
                                            <span>Есть в наличии</span>
                                        </Box>
                                        <Box width='100px' height='30px'>
                                            <img src="/img/HIPP-Logo.png" alt="Logo" />
                                        </Box>
                                    </Box>
                                    <Box className='row' gap='7px' width='100%' alignItems='center' justifyContent='flex-start' style={{ lineHeight: '20px', fontSize: '14px', fontWeight: '400', color: '#B7B8C5' }} >
                                        {stars.map((star, i) => (
                                            <Star
                                                key={i}
                                                starId={i}
                                                rating={hoverRating || rating}
                                                onMouseEnter={() => setHoverRating(i)}
                                                onMouseLeave={() => setHoverRating(0)}
                                                onClick={() => setRating(i)}
                                            />
                                        ))}
                                        <span>3 отзыва</span>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='card_side'>
                                <Box flexDirection='row' display='flex' alignItems='center'>
                                    <Box marginRight='13px'>
                                        <Typography fontSize='22px' fontStyle='normal' fontWeight='500' lineHeight='30px'>Размер:</Typography>
                                    </Box>
                                    <Box width='100%' height='50px'>
                                        <FormControl className='select'>
                                            <Select
                                                value={size}
                                                onChange={handleChange}
                                                className="select_input"
                                            >
                                                <MenuItem value="107см x 234см">
                                                    <em>107см x 234см</em>
                                                </MenuItem>
                                                <MenuItem value={10}>107см x 234см</MenuItem>
                                                <MenuItem value={20}>107см x 234см</MenuItem>
                                                <MenuItem value={30}>107см x 234см</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box display='flex' >
                                        <span style={{ position: 'relative', top: '15px', left: '45px' }}>50%</span>
                                        <Box width='52px' height='52px'>
                                            <img src="/img/star.png" alt="Start" />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box display='flex' gap='50px' alignItems='center' margin='20px 0'>
                                    <Box display='flex' alignItems='center' gap='10px' justifyContent='space-between' >
                                        <Typography className='current_price'>1000 $</Typography>
                                        <Typography className='old_price'>2500 $</Typography>
                                    </Box>
                                    <Box display='flex' gap='5px'>
                                        <Button
                                            className='row center countBtn'
                                            type='button'
                                            onClick={incNum}
                                        >+</Button>
                                        <Box className='row center' width='50px' height='40px' border='1px solid #E4E7EE' borderRadius='4px' fontSize='15px' fontWeight='600' onChange={handleChange}
                                        >{num}</Box>
                                        <Button
                                            className='row center countBtn'
                                            type='button'
                                            onClick={decNum}
                                        >-</Button>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box className='offer_side row' gap='20px'>
                                        <Box>
                                            <Button className='buy_btn' variant="contained" component="label">
                                                <ShoppingCartIcon />
                                                Купить
                                            </Button>
                                        </Box>
                                        <Box className='like_box'>
                                            <IconButton className='like_btn' color="primary" aria-label="upload picture" component="label">
                                                <FavoriteBorderIcon />
                                            </IconButton>
                                            Нравится
                                        </Box>
                                        <Box className='like_box'>
                                            <IconButton className='like_btn' color="primary" aria-label="upload picture" component="label">
                                                <FavoriteBorderIcon />
                                            </IconButton>
                                            Добавить к сравению
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box padding='20px'>
                                <Box className='row' alignItems='center' gap='10px'>
                                    <Typography className='variant_models'>Варианты моделей:</Typography>
                                    <Typography className='name_modles'>Название выбранного варианта</Typography>
                                </Box>
                                <Box>
                                    <Stack className='models_img row' spacing={2}>
                                        {
                                            models_img.map((item, index) => {
                                                <Box key={index} className='models_img_item models_img_item_act'>
                                                    <img src={item.img} alt={item.alt} />
                                                </Box>
                                            })
                                        }

                                        <Box className='models_img_item  row center'>
                                            <Typography fontSize='22px' fontWeight='500' lineHeight='30px' >+3</Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack className='row shere_box'>
                                        <Typography className='shere_text' >Поделится в соцсетях:</Typography>
                                        <Stack direction='row' gap='15px'>
                                            <IconButton className='shere_icon' style={{ background: 'linear-gradient(49.12deg, #FFDD55 6.62%, #FF543E 50.06%, #C837AB 93.5%)', borderRadius: '8px' }} variant="rounded">
                                                <InstagramIcon sx={{ color: '#FFF' }} />
                                            </IconButton>
                                            <IconButton className='shere_icon' style={{ background: '#28A9E0', borderRadius: '8px' }} variant="rounded">
                                                <TwitterIcon sx={{ color: '#FFF' }} />
                                            </IconButton>
                                            <IconButton className='shere_icon' style={{ padding: '0', background: '#FFF', borderRadius: '8px' }} variant="rounded">
                                                <FacebookIcon sx={{ color: '#4867AA', fontSize: '39px' }} />
                                            </IconButton>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}

export default Product