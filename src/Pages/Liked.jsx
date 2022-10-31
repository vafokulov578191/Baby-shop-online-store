import { Box } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import ItemComponent from '../Components/ItemComponent';

const Liked = () => {
    const liked = useSelector(state => state.liked.liked);

    return (
        <div>
            <Helmet>
                <link
                    rel="icon"
                    href="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png"
                />
                <title>Ваши желания</title>
            </Helmet>
            <section style={{ width: "70%", margin: "0 auto" }} >
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }} >
                    {liked.map(item => (
                        <ItemComponent item={item} isLike={true} />
                    ))}
                </Box>
            </section>
        </div>
    );
};

Liked.propTypes = {};

export default Liked;