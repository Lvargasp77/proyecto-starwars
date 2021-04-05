import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export function CharactersCard(props) {
	const { store, actions } = useContext(Context);
	return (
		<div className="d-flex flex-nowrap overflow-auto">
			{!store.characters
				? "loading..."
				: store.characters.map((person, index) => {
						return (
							<div className="card custom-card custom-height bg-secondary test my-4" key={index}>
								<img
									className="card-img-top"
									src="https://enterthereelworld.files.wordpress.com/2019/12/qzyuotiwrcmm-vsxs0iova5wedkdqxska3e2ffowmve.jpg"
								/>
								<div className="card-body">
									<h5 className="card-title text-left">{person.name}</h5>
									<div className="card-text text-left text-light">
										<p>Gender: {person.gender} </p>
										<p>Hair Color: {person.hair_color}</p>
										<p>Eye Color: {person.eye_color} </p>
									</div>
									<div className="d-flex justify-content-between">
										<Link to={`/people/${index}`}>
											<button className="btn btn-info" id={index}>
												Learn more!
											</button>
										</Link>
										<div
											className="favoritesContainer"
											onClick={() => {
												actions.addToFavorites(person.name);
											}}>
											{props.icon(person.name)}
										</div>
									</div>
								</div>
							</div>
						);
				  })}
		</div>
	);
}
CharactersCard.propTypes = {
	icon: PropTypes.func
};
