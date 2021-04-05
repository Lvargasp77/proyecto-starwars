import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function PlanetsCard(props) {
	const { store, actions } = useContext(Context);
	return (
		<div className="d-flex flex-nowrap overflow-auto">
			{store.planets.map((planet, index) => {
				return (
					<div className="card custom-card custom-height bg-secondary test my-4" key={index}>
						<img
							className="card-img-top"
							src="https://enterthereelworld.files.wordpress.com/2019/12/qzyuotiwrcmm-vsxs0iova5wedkdqxska3e2ffowmve.jpg"
						/>
						<div className="card-body">
							<h5 className="card-title text-left">{planet.name}</h5>
							<div className="card-text text-left text-light">
								<p>Population: {planet.population}</p>
								<p>Terrain: {planet.terrain}</p>
							</div>
							<div className="d-flex justify-content-between">
								<Link to={`/planet/${index}`}>
									<button className="btn btn-info">More Details!</button>
								</Link>
								<div
									className="favoritesContainer"
									onClick={() => {
										actions.addToFavoritesPlanets(planet.name);
									}}>
									{props.icon(planet.name)}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
PlanetsCard.propTypes = {
	icon: PropTypes.func
};
