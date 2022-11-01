import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiper.css";


export default function SwiperComponent(props) {
    return (
        <>
            <div className="content">
                <div className="swiper" style={{ width: props.wid === true ? '75%' : '100%' }}>
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={props.slides}
                        navigation
                        pagination={props.pagination ? { clickable: true } : false}
                        style={{ height: "100%", width: "100%", borderRadius: "15px", color: "#ccc", paddingLeft: props.pad === true ? '40px' : '0px' }}
                    >
                        {props.arr.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <props.card item={item} level={props.level} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {
                    props.skid ? (
                        <div className="skidka">
                            <img src="/swiper/skidka.png" alt="img" />
                            <img src="/swiper/baby.png" alt="img" />
                        </div>
                    ) : (
                        <div style={{ width: '0px', height: '0px' }}>
                            <></>
                        </div>
                    )
                }
            </div>
        </>
    );
}
