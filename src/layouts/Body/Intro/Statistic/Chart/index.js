import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

Chart.propTypes = {
    type:   PropTypes.string,
    data:   PropTypes.object,
    width:  PropTypes.number,
    height: PropTypes.number,
}

Chart.defaultProps = {
    type:'',
    data:{},
    width:350,
    height:100,
}

function Chart(props) {
    const {type,data,width,height} = props;
    
    const {actualData,options} = data;
    
    function SelectedChart() {
        switch (type) {
            case 'line' : {
                return (
                    <Line data={actualData} width={width} height={height} options={options}></Line>
                );
            }
            case 'doughnut' : {
                return (
                    <Doughnut data={actualData} width={width} height={height} options={options}></Doughnut>
                );
            }

            default:
                return null;
        }
    }

    return (
        <div className="intro__stats__chart">
            <SelectedChart></SelectedChart>
        </div>
    );
}

export default Chart;