import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Statistic.scss';
import StatsBox from './StatsBox';
import WOW from 'wowjs';
import Chart from './Chart';
import {ChartData} from './ChatData';
import { isMobile } from 'react-device-detect';

function Statistic(props) {
    const WOW_delay = 0 + "s";
    const WOW_duration = 2 + "s";
    
    const [currentChart,setCurrentChart] = useState('line');
    const [currentChartData,setCurrentChartData] = useState({});

    useEffect(() => {
        new WOW.WOW().init();

        const loadChartData = async () => {
            setCurrentChartData(ChartData['registered_users']);
        }

        loadChartData();
    },[]);
    
    
    const handleChangeChart = async (chartType,chartName) => {
        setCurrentChart(chartType);
        setCurrentChartData(ChartData[chartName]);
    }

    return (
        <div className="intro__stats wow slideInRight" data-wow-delay={WOW_delay} data-wow-duration={WOW_duration}>
            <Container>
                <Row>
                    <Col>
                        <StatsBox 
                            title="Registered users" 
                            figure={1294090} 
                            description="Everyday we have thousands of new users."
                            chart="line"
                            chartName="registered_users"
                            changeChart={handleChangeChart}
                        ></StatsBox>
                    </Col>

                    <Col>
                        <StatsBox
                            title="Number of songs" 
                            figure={49281} 
                            description="We have a huge music library for everyone, elders, kids..."
                        ></StatsBox>
                    </Col>

                    <Col>
                        <StatsBox
                            title="Downloads"
                            figure={512052} 
                            description="One of TOP 10 mobile music application."
                            chart="doughnut"
                            chartName="downloads"
                            changeChart={handleChangeChart}
                        ></StatsBox>
                    </Col>

                    <Col>
                        <StatsBox
                            title="Media shares" 
                            figure={421402} 
                            description="Currently I have no idea what should I say about this one."
                        ></StatsBox>
                    </Col>
                </Row>
                
                {!isMobile && <Chart type={currentChart} data={currentChartData}></Chart>}
            </Container>
        </div>
    );
}

export default Statistic;