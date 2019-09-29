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

function Commentaries(props) {
	console.log("props", props)
	const hostname = props.hostname || 'alexandria';
	const { loading, error, data } = useQuery(PROJECTS, {
		variables: { hostname: hostname },
	});
	
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return <React.Fragment>
		<hr />
		<p>TODO: Breadcrumb</p>
		<p>TODO: Title</p>
		<p>TODO: Faceted Cards</p>
	</React.Fragment>
}

export default Commentaries;