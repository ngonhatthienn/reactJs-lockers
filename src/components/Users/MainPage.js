import './MainPage.css';
import Button from '../UI/Button';

function MainPage() {
	return (
		<div className='container'>
			<div className='main'>
				<nav className='nav'>
					<div className='logo'></div>
					<Button>Login</Button>
				</nav>
				<div className='content'></div>
			</div>
		</div>
	);
}

export default MainPage;
