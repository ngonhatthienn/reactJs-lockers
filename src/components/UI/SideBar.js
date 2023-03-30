import React, { useState } from 'react';

import classes from './SideBar.module.css';
function Sidebar(props) {
	const [navCollapse, setNavCollapse] = useState('');

	return (
		<div className={classes.container}>
			<div className={classes.sidebar_content}>
				<div
					className={`${classes.sidebar_container} ${
						navCollapse ? classes.navCollaps : ''
					}`}
				>
					<div className={classes.nav_title}>
						<h2>Lockers</h2>
					</div>
					<div className={classes.nav_info}>
						<i>
							<span className='material-symbols-outlined'>account_circle</span>
						</i>
						<h6>Ngô Nhật Thiên</h6>
					</div>
					<div className={`${classes.nav_option} ${classes.option1} `}>
						<span className='material-symbols-outlined'>home</span>
						<h4>Home</h4>
					</div>
					<div className={`${classes.nav_option} ${classes.option1}`}>
						<span className='material-symbols-outlined'>person</span>
						<h4>Thông tin cá nhân</h4>
					</div>
					<div className={`${classes.nav_option} ${classes.option1}`}>
						<span className='material-symbols-outlined'>shopping_cart</span>
						<h4>Quản lý đơn hàng</h4>
					</div>
					<div className={`${classes.nav_option} ${classes.option1}`}>
						<span className='material-symbols-outlined'>store</span>
						<h4>Đặt mua sản phẩm</h4>
					</div>
					{/* <div className={`${classes.nav_option} ${classes.logout}`}>  */}
					<div className={classes.logout}>
						<span className='material-symbols-outlined'>
							power_settings_new
						</span>
						<h4>Log Out</h4>
					</div>
				</div>
			</div>
			<div className={classes.main}>
				<nav className={classes.nav}>
					<div className={classes.logo}>
						<i onClick={(e) => setNavCollapse(!navCollapse)}>
							<span className='material-symbols-outlined'>menu</span>
						</i>
					</div>
					<ul>
						<li>Home</li>
						<li>New</li>
					</ul>
				</nav>
				<div className={classes.content}>{props.children}</div>
			</div>
		</div>
	);
}

export default Sidebar;
