import React, { useState, useEffect } from 'react';
import './CarouselSlider.scss';
import classnames from 'classnames';

const items = [
    {
        src:'https://jobsgo.vn/blog/wp-content/uploads/2019/07/tung-1562035340-width800height503.png',
        imageAlt:{
            title:'Sơn Tùng MT-P',
            sub_title:'Most popular Vietnamese singer',
        },
    },
    {
        src:'https://vfan-phinf.pstatic.net/20200819_218/1597826065727dfhuQ_JPEG/ava.jpeg?type=e1920',
        imageAlt:{
            title:'Phương Ly',
            sub_title:'Most popular Vietnamese singer',
        },
    },
    {
        src:'https://nguoi-noi-tieng.com/photo/tieu-su-ca-si-duy-manh-4010.jpg',
        imageAlt:{
            title:'Duy Mạnh',
            sub_title:'Most popular Vietnamese singer',
        },
    }
]


function CarouselSlider(props) {

    const [currentIndex,setCurrentIndex] = useState(0);

    const handleChangeSlide = async (index) => {
        setCurrentIndex(index);
    }

    useEffect(() => {
        const autoChangeSlide = setInterval(() => {
            if (currentIndex === items.length - 1)
                setCurrentIndex(0);
            else
                setCurrentIndex(currentIndex + 1);
        }, 2 * 1000);

        return () => {
            clearInterval(autoChangeSlide);
        }
    },[currentIndex]);

    return (
        <div className="zone__carousel-slider"
            style={{
                background:`url(${items[currentIndex].src})`,
            }}
        >
            {items && <div className="zone__carousel-slider__alt">
                <h2>{items[currentIndex].imageAlt.title}</h2>
                <p>{items[currentIndex].imageAlt.sub_title}</p>         
            </div>}
            {items && <center className="zone__carousel-slider__buttons-group">
                {items.map((item,index) => 
                    <button 
                        className={classnames('zone__carousel-slider__buttons-group__buttons',{'carousel-active-button':index === currentIndex})} 
                        key={index}
                        onClick={() => handleChangeSlide(index)}
                    />
                )}
            </center>}
        </div>
    );
}

export default CarouselSlider;