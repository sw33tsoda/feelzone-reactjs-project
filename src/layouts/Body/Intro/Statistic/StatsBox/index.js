import React from 'react';
import CountUp from 'react-countup';

function StatsBox(props) {
    const {figure,title,description,chart,chartName,changeChart} = props;

    const handleOnClickChangeChart = () => {
        changeChart(chart,chartName);
    }
    return (
        <center>
            <div className="intro__stats__box" onClick={handleOnClickChangeChart}>
                <div className="intro__stats__box__figure">
                    <CountUp end={figure} duration={10}></CountUp>
                </div>
                <p className="intro__stats__box__title">{title}</p>
            </div>
            <div className="intro__stats__box-description">
                <p>
                    {description}
                </p>
            </div>
        </center>
    );
}

export default StatsBox;