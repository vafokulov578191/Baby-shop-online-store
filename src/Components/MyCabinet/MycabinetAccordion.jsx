import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemCabinet from './ItemCabinet';
import { Box } from '@mui/system';

const MycabinetAccordion = ({ arr }) => {
    return (
        <>
            {
                arr.map(item => (
                    <>
                        <Accordion expanded={item.expanded} sx={{ width: '100%', height: '100%', borderRadius: '22px', border: '1px solid #B7B8C5', overflow: 'hidden', marginTop: '15px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', padding: '5px 10px', fontWeight: '700', fontSize: '17px' }}>
                                    <li>2346555</li>
                                    <li>24.05.2022</li>
                                    <li>{item.amount}</li>
                                    <li>{item.money} €</li>
                                    <li style={{ color: item.color }}>{item.text}</li>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    item.things.map(elem => <ItemCabinet elem={item.products} key={elem.id} />)
                                }
                            </AccordionDetails>
                        </Accordion>
                    </>
                ))
            }

        </>

    )
}

export default MycabinetAccordion