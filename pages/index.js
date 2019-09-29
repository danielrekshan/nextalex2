import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import CoverContainer from '../containers/CoverContainer';

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

function Home(props) {
	console.log("props", props)
	const { loading, error, data } = useQuery(PROJECTS, {
		variables: { hostname: 'alexandria' },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return <React.Fragment>
		<CoverContainer />
		<hr />
		<p>TODO: Commentaries list</p>
		<p>TODO: Quote</p>
		<p>TODO: Map Container</p>
		<p>TODO: Featured Commentary</p>
		<p>TODO: Text Title, Description, and Text List</p>
		<p>TODO: Text by Region</p>
		<p>TODO: Quote</p>
		<p>TODO: Post List</p>
		<p>TODO: Collection Detail Block</p>
		Got data: {JSON.stringify(data, null, '\t')}
	</React.Fragment>
}

export default Home;