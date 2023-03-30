import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
	return (
		<div className={`${classes.container} ${props.className}`}>
			<div className={`${classes.card} ${props.className}`}>
				<div className={classes.card_contents}>
					<img
						className={classes.img}
						src='https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg'
						alt=''
					/>
					<div className={classes.name}>Tủ đựng đồ</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					</p>
					<button>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
