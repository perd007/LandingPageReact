import React from "react";
import Nav from "./navBar";
import Header from "./Header";
import Card from "./Card"
import Footeer from "./footer";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// create a component
//export const Barra = () => {


//create your first component
const Home = () => {
	return (

		<>

			<Nav />
			<div className="container">
				<Header />
				<div className="row row-gap-1">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footeer />


		</>

	);
};

export default Home;

