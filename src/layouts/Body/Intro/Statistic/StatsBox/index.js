import React from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

StatsBox.propTypes = {
    figure: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    chart: PropTypes.string,
    chartName: PropTypes.string,
    changeChart: PropTypes.func,
}

StatsBox.defaultProps = {
    figure: null,
    title: 'Untitled',
    description: 'No description',
    chart: 'line',
    chartName:'Chart',
    changeChart: null,
}

function StatsBox(props) {
    const {figure,title,description,chart,chartName,changeChart} = props;

    const handleOnClickChangeChart = () => {
        if (changeChart)
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