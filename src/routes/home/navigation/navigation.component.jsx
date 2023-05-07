import { Fragment, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as LOBLogo } from '../../assets/lob.svg';
import { ReactComponent as WISHLISTLogo } from '../../assets/wishlist.svg';
import { ReactComponent as ADDTOCARDLogo } from '../../assets/addtocard.svg';
import SignIn from '../../sign-in/sign-in.component';

import './navigation.styles.scss';

const Navigation = () => {

  const [search, setSearch] = useState('');

  const onSearchChanged = e => {
    setSearch(e.target.value);
  }

  const onSearch = () => {
    alert(`Searching for ${search}`);
  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <LOBLogo className='logo' />
        </Link>

        <div class="input-container">
  <input type="text" id="input" required=""/>
  <label for="input" class="label"></label>
        <button>
           Click
            </button>
          
        </div>

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
       <Link className='nav-link' to='/addtocard' >
          <ADDTOCARDLogo ></ADDTOCARDLogo>
       </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

