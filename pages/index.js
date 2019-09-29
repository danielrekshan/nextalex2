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

function Home() {
	const { loading, error, data } = useQuery(PROJECTS, {
		variables: { hostname: 'alexandria' },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	console.log("\n\n\n\n========= data: ", JSON.stringify(data, null, '\t'));
	return <div>
		Got data: {JSON.stringify(data, null, '\t')}
	</div>
	// return data.projects.map(({ _id, title }) => (
	// 	<div key={_id}>
	// 	<p>
	// 		{_id}: {title}
	// 	</p>
	// 	</div>
	// ));
}

export default Home;