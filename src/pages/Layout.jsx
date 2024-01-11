import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Loader } from 'react-feather';

const Layout = () => {
    const [tab,setTab] = useState('coins')
    return (
        <div>
            <Loader className='spinicon'></Loader>
            <h1 className='brand'>CRYPTO APP</h1>
            <nav>
                <ul className='tabs'>
                    <li><Link to="/" className={tab == 'coins' ? 'active' : ''} onClick={()=> setTab('coins')}>Top Coins</Link></li>
                    <li><Link to="/watchlist" className={tab == 'watchlist' ? 'active' : ''} onClick={()=> setTab('watchlist')}>Watchlist</Link></li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    );
}

export default Layout;
