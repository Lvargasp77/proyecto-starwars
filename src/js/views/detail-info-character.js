import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export function DetailInfoCharacters() {
	const { store, action } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			{store.characters.length > 0 && (
				<>
					<div className="row justify-content-md-center">
						<div className="col-md-6 col-lg-5 mb-4">
							<img
								src="https://enterthereelworld.files.wordpress.com/2019/12/qzyuotiwrcmm-vsxs0iova5wedkdqxska3e2ffowmve.jpg"
								style={{ width: "100%", height: "300px" }}
							/>
						</div>
						<div className="col-md-6 col-lg-5 text-center row mb-4">
							<div className="align-self-center">
								<h5>{store.characters[params.characterid].name}</h5>
								<p id="character-info">
									Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
									print, graphic or web designs. The passage is attributed to an unknown typesetter in
									the 15th century who is thought to have scrambled parts of Cicero&apos;s De Finibus
									Bonorum et Malorum for use in a type specimen book.
								</p>
							</div>
						</div>
					</div>
					<div className="dropdown-divider border border-info" />

					<div className="row text-secundary justify-content-md-center text-center mt-4">
						<div className="col-md-2 col-lg-1 mx-2">
							<p>Name</p>
							<p>{store.characters[params.characterid].name}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-2">
							<p>Birth Year</p>
							<p>{store.characters[params.characterid].birth_year}r</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-2">
							<p>Gender</p>
							<p>{store.characters[params.characterid].gender}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-2">
							<p>Height</p>
							<p>{store.characters[params.characterid].height}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-2">
							<p>Skin Color</p>
							<p>{store.characters[params.characterid].skin_color}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-2">
							<p>Eye Color</p>
							<p>{store.characters[params.characterid].eye_color}</p>
						</div>
					</div>
				</>
			)}
			<Link to="/">
				<Button variant="danger"> Back</Button>
			</Link>
		</div>
	);
}
