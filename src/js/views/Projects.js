import React from "react";
import { Card } from "react-bootstrap";
import ReactPlayer from "react-player";

export const Projects = () => {
	return (
		<>
			<Card>
				<Card.Img style={{ width: "35px", height: "35px" }} variant="top" src="rigo-baby.jpg" />
				<Card.Body>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
				</Card.Body>
			</Card>
			<br />
			<Card>
				<Card.Body>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
				</Card.Body>
				<ReactPlayer
					controls
					url="https://www.loom.com/share/27ea64c4cc354f5e913625e3705866dc?sharedAppSource=personal_library"
				/>
			</Card>
		</>
	);
};
