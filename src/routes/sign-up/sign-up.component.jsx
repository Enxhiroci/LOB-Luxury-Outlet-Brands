import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import "./sign-up.styles.scss";



const SignUp = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (

    <div class="form-box">
      <form class="form">
          <span class="title">Sign up</span>
          <span class="subtitle">Create a free account with your email.</span>
          <div class="form-container">
            <input type="text" class="input" placeholder="Full Name" />
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Password" />
          </div>
          <button class="submit" type="submit"> 
          SIGN UP
          </button>
      </form>
      <div class="form-section">
        <p>Have an account? <a href="sign-in">Sign in</a> </p>
      </div>
      </div>
      
       
  );
};

export default SignUp;
