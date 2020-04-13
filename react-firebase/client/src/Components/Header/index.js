import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <Link to='/'>
      Logo
    </Link>
      {currentUser? (
          <div onClick={()=>auth.signOut()}>sign out</div>
          ):(
              <Link to='/signin-signup'>sign in</Link>
              )
            }
      </div>
      )
      export default Header;