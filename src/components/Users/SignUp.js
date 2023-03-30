import React, {useState} from 'react';
import classes from './SignUp.module.css';
import Button from '../UI/Button';

const SignUp = (props) => {

	return (
		<div className={classes.container}>
			<div className={classes.left_side}>
				<div className={classes.logo}>Lockers</div>
				<div className={classes.logIn}>
					<div> Bạn đã có tài khoản</div>
					<Button className='btn-outline' onClick={props.logIn}> Đăng nhập</Button>
				</div>
			</div>
			<div className={classes.right_side}>
				<div className={classes.btn_back} onClick={props.goBack}>
					<span class='material-symbols-outlined'>close</span>
				</div>
				<div className={classes.title}> Account Signup</div>
				<div className={classes.describe}>
					Trở thành thành viên của chúng tôi.
				</div>
				<form className={classes.input}>
					<label htmlFor='username'>Họ và Tên</label>
					<input id='username' type='text' />
					<label htmlFor='age'>Địa chỉ email</label>
					<input id='age' type='email' />
					<label htmlFor='gender'>Giới tính</label>
					<input id='gender' type='text' />
					<Button className="btn" type='submit'>Đăng Ký</Button>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
