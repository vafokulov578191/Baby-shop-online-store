import { Box } from '@mui/system'
import React from 'react'


const ItemCabinet = ({ elem }) => {
    return (
        <div>
            {
                elem.map(item => (
                    <>
                        {
                            console.log(item)
                        }
                        <Box width='100%' height='135px' borderTop='1px solid #E4E7EE' padding='20px' display='flex' alignItems='center' justifyContent='space-between'>
                            <Box width='100px' height='100px'>
                                <img style={{ width: '100px', height: '100px' }} src={item.bg} alt="" />
                            </Box>
                            <Box width='820px' height='100%' display='flex' flexDirection='column' gap='20px'>
                                <li style={{ fontSize: '21px', fontWeight: '700', color: 'black' }}>{item.title}</li>
                                <Box display='flex' gap='30px' fontSize='18px'>
                                    <li><strong>Модель: </strong>CH-353553</li>
                                    <li><i>Код товара:</i> {item.kod}</li>
                                </Box>
                            </Box>
                            <Box width='130px' fontSize='24px' fontWeight='700'>
                                <span>{item.money}</span>
                            </Box>
                        </Box>
                    </>
                ))
            }
        </div>
    )
}

export default ItemCabinet