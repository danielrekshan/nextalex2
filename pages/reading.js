import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useRouter } from 'next/router'

// const PROJECTS = gql`
// query projectCoverQuery($hostname: String) {
// 	project(hostname: $hostname) {
// 	_id
// 		title
// 		subtitle
// 		description

// 	}
// }
// `;

function Reading(props) {
	console.log("read props: ", props)
	const router = useRouter()
	  const { pid } = router.query
	  console.log("router: ", router)
	  console.log("query: ", router.query)
	// const { loading, error, data } = useQuery(PROJECTS, {
	// 	variables: { hostname: 'alexandria' },
	// });

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error :(</p>;

	// console.log("\n\n\n\n========= data: ", JSON.stringify(data, null, '\t'));
	return <React.Fragment>
		Read Component
	</React.Fragment>

}

export default Reading;