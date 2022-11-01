import React, { useState } from "react";
import { Box } from "@mui/system";
import SVGIcons from "./SVGIcons";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { likedProduct } from "../store/features/likedSlice";
import { Link } from "react-router-dom";

const ItemComponent = ({ item, level = false, isLike = false }) => {
    const [value, setValue] = useState(2);
    const [like, setLike] = useState(isLike);
    const dispatch = useDispatch();

    const handleLike = () => {
        dispatch(likedProduct(item));
        setLike(!like);
    };

    return (
        <>
            {level ? (
                <Box
                    display="flex"
                    flexDirection="column"
                    p="10px"
                    width="261px"
                    height="410px"
                    borderRadius="15px"
                    border="1px solid #E4E7EE"
                    bgcolor="white"
                >
                    <Box
                        width="240px"
                        height="240px"
                        position="relative"
                        display="flex"
                        flexDirection="column"
                    >
                        <Link to={`/product?id=${item.id}`} >
                            <img
                                style={{ position: "absolute", zIndex: "10" }}
                                src={item?.media?.pictures[0] || item.bg}
                                alt={item.name}
                            />
                        </Link>
                        <Box
                            position="relative"
                            zIndex="20"
                            display="flex"
                            justifyContent="space-between"
                            paddingLeft="5px"
                            paddingRight="5px"
                            paddingTop="5px"
                        >
                            <Button
                                sx={{
                                    width: "52px",
                                    height: "56px",
                                    borderRadius: "100%",
                                }}
                            >
                                <SVGIcons icon={item.leftIcon} />
                            </Button>
                            <Button
                                onClick={handleLike}
                                sx={{
                                    width: "52px",
                                    height: "56px",
                                    borderRadius: "100%",
                                }}
                            >
                                <SVGIcons icon="Liked" checked={like} />
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="8px"
                        marginTop="20px"
                        padding="10px"
                    >
                        <Box
                            textAlign="start"
                            fontSize="22px"
                            display="flex"
                            gap="10px"
                        >
                            <span style={{ color: "black", fontWeight: "700" }}>
                                {item.mony}{" "}
                            </span>
                            <span
                                style={{ color: "#B7B8C5", fontWeight: "700" }}
                            >
                                250 €
                            </span>
                        </Box>
                        <span style={{ color: "black", textAlign: "start" }}>
                            {item.title}
                        </span>
                    </Box>
                </Box>
            ) : (
                <Box
                    display="flex"
                    flexDirection="column"
                    p="10px"
                    width="261px"
                    height="100%"
                    borderRadius="15px"
                    border="1px solid #E4E7EE"
                    bgcolor="white"
                >
                    <Box
                        width="240px"
                        height="240px"
                        position="relative"
                        display="flex"
                        flexDirection="column"
                    >
                        <Link to={`/product?id=${item.id}`} >
                            <img src={item?.media?.pictures[0] || item.bg} alt="" />
                        </Link>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            paddingLeft="5px"
                            paddingRight="5px"
                            paddingTop="5px"
                            position="relative"
                        >
                            <button
                                style={{
                                    width: "52px",
                                    height: "56px",
                                    borderRadius: "100%",
                                    position: "relative",
                                    bottom: "237px",
                                    border: "none",
                                    background: "none",
                                    cursor: "pointer",
                                }}
                            >
                                <SVGIcons icon={item.leftIcon} />
                            </button>
                            <button
                                onClick={handleLike}
                                style={{
                                    width: "52px",
                                    height: "56px",
                                    borderRadius: "100%",
                                    position: "relative",
                                    bottom: "237px",
                                    border: "none",
                                    background: "none",
                                    cursor: "pointer",
                                }}
                            >
                                <SVGIcons icon="Liked" checked={like} />
                            </button>
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="5px"
                        padding="10px"
                        width="100%"
                        height="100%"
                    >
                        <Box
                            textAlign="start"
                            fontSize="22px"
                            display="flex"
                            gap="10px"
                        >
                            <span style={{ color: "black", fontWeight: "700" }}>
                                {item.mony}
                            </span>
                            <span
                                style={{ color: "#B7B8C5", fontWeight: "700" }}
                            >
                                250 €
                            </span>
                        </Box>
                        <span style={{ color: "black", textAlign: "start" }}>
                            {item.title}
                        </span>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "5px",
                                alignItems: "center",
                                mt: "8px",
                            }}
                        >
                            {item?.colors?.map((col, index) =>
                                <Box
                                    key={index}
                                    sx={{
                                        width: "35px",
                                        height: "33px",
                                        borderRadius: "100%",
                                        cursor: "pointer",
                                    }}
                                    bgcolor={col}
                                    color="primary"
                                    aria-label="add"
                                ></Box>
                            )}
                            <Box
                                sx={{
                                    width: "35px",
                                    height: "33px",
                                    borderRadius: "100%",
                                    bgcolor: "#c4c4c4",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                }}
                                color="primary"
                                aria-label="add"
                            >
                                <AddIcon />
                            </Box>
                        </Box>
                        <Box mt="10px" display="flex" gap="10px">
                            <SVGIcons icon="delivery" />
                            <span>Доставка: 1-2 дня</span>
                        </Box>
                        <Box
                            sx={{
                                "& > legend": { mt: 2 },
                                display: "flex",
                                gap: "5px",
                            }}
                        >
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                            <span style={{ marginBottom: "10px" }}>
                                15 отзывов
                            </span>
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default ItemComponent;