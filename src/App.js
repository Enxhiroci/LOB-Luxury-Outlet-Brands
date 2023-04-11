import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/home/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import Assets from './routes/assets/lob.svg';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};
 
const WishList = () => {
  return (
      <div>
           <h1>I am the wishlist page</h1>;
      </div>
     
  ) 
};



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={< Home />} />
      <Route path='shop' element={<Shop />}  />
      <Route path='sign-in' element={<SignIn />}  />
      <Route path='wishlist' element={<WishList />}  />
      </Route>
    </Routes>
      
  
  );
};

export default App;