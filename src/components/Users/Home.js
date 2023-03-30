import React, { useState } from 'react';
import NavBar from '../UI/NavBar';
import Button from '../UI/Button';
import SignUp from './SignUp';
import LogIn from './LogIn';

import styles from './Home.module.css';

function Home() {
	const [isSignUp, setIsSignUp] = useState(false);
	const [isLogIn, setIsLogIn] = useState(false);

	const clickSignUp = () => {
		setIsSignUp(true);
		setIsLogIn(false);
	};
	const goBackHandle = () => {
		setIsSignUp(false);
		setIsLogIn(false);
	};
	const clickLogIn = () => {
		setIsSignUp(false);
		setIsLogIn(true);
	};
	return (
		<div>
			{isSignUp && <SignUp goBack={goBackHandle} logIn={clickLogIn}/>}
			{isLogIn && <LogIn goBack={goBackHandle} signUp={clickSignUp}/>}

			<div className={`${styles.home} ${isSignUp || isLogIn ? styles.disabled : ''}`}>
				<NavBar isSignUp={clickSignUp}>
					<h1>Đặt một lần - Dùng mãi mãi</h1>
					<Button className='btn' onClick={clickSignUp}>
						Get Started Now
					</Button>
				</NavBar>
			</div>
		</div>
	);
}

export default Home;
