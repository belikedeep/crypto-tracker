import React from 'react';
import data from '../assets/data.json';
import { ArrowUp, ArrowDown } from 'react-feather';
import { Sparklines, SparklinesCurve } from 'react-sparklines';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const gotoPage = (val) => {
        navigate('/coin',{state:{id:val}})
    }
    return (
        <div>
            <div className="wrapper">
                <div className="content">
                    {data.map((x)=>{
                        return <div className="coinwrapper" onClick={() => gotoPage(x.id)}>
                            <div className="leftarea">
                                <div className="icon">
                                    <img src={x.image} width={70} alt="" />
                                </div>
                                <div className="desc">
                                    <h4>{x.name}</h4>
                                    <p>Current Price : ${x.current_price} (USD)</p>
                                    <div className="highlow">
                                        <span><ArrowUp size={16} color='green'></ArrowUp> ${x.high_24h}</span>
                                        <span><ArrowDown size={16} color='red'></ArrowDown> ${x.low_24h}</span>
                                        <span><small>(24h High-Low)</small></span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='chart'>
                                    <Sparklines data={x.sparkline_in_7d.price} width={120} height={20} margin={5}>
                                        <SparklinesCurve color="#e5e5e5"></SparklinesCurve>
                                    </Sparklines>
                            </div>
                        </div>
                    })}
                    

                </div>
            </div>
        </div>
    );
}

export default Home;
