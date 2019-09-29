import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const PROJECTS = gql`
query projectCoverQuery($hostname: String) {
	project(hostname: $hostname) {
	_id
		title
		subtitle
		description
	}
}
`;

function TextsOverview(props) {
	console.log("props", props)
	const hostname = props.hostname || 'alexandria';
	const { loading, error, data } = useQuery(PROJECTS, {
		variables: { hostname: hostname },
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return <React.Fragment>
		<hr />
		<p>TODO: Title</p>
		<p>TODO: Featured Commentary Slider</p>
		<p>TODO: Commenatries Cover Slider</p>
		<p>TODO: Explore Commentaries</p>
		<p>TODO: Individual Commentaries</p>


		<p>TODO: Collection Detail? title, description, 4 large posts</p>
		<p>TODO: Collection Detail? title, description, 4 small posts</p>



	</React.Fragment>
}

export default TextsOverview;