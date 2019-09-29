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

function Commentary(props) {
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
		<p>TODO: Featured Image</p>
		<p>TODO: By line</p>
		<p>TODO: In-this-commentary</p>
		<p>TODO: Description</p>
		<p>TODO: Open Comments</p>
		<p>TODO: Featured Post</p>
		<p>TODO: Comments List Preview</p>






	</React.Fragment>
}

export default Commentary;