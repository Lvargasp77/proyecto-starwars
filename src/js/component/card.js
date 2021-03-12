import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div classNames="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src={props.image} alt="Card image cap" />
			<div classNames="card-body">
				<h5 classNames="card-title">{props.title}</h5>
				<p classNames="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a href="#" classNames="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string
};
