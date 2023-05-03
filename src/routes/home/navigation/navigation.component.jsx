import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as LOBLogo } from '../../assets/lob.svg';
import { ReactComponent as WISHLISTLogo } from '../../assets/wishlist.svg';
import SignIn from '../../sign-in/sign-in.component';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <LOBLogo className='logo' />
        </Link>

        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          <Link className='nav-link' to='/sign-in'>
            Sign In
          </Link>
          
          <Link className='nav-link' to='/wishlist' >
          <WISHLISTLogo ></WISHLISTLogo>
       </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

