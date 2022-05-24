import React from "react";
import "./link.css"

const Links = () => {
	let link = ["Services", "Projects", "About"];

	return (
		<div className="linkdiv">
			{link.map((ele,indx) => (
				<div className="link" key={indx}>
					<p>{ele}</p>
				</div>
			))}
		</div>
	)
}

export default Links;
