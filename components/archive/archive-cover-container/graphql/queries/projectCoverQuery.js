import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// import getCurrentArchiveHostname from '../../../../lib/getCurrentArchiveHostname';
import getCurrentArchiveHostname from '@bit/archimedes_digital.orpheus.lib.get-current-archive-hostname';


const query = gql`
	query projectCoverQuery($hostname: String) {
		project(hostname: $hostname) {
	    _id
			title
			subtitle
			description
			files {
				_id
				type
				name
			}
		}
	}
`;

const projectCoverQuery = graphql(query, {
	name: 'projectCoverQuery',
	options: ({ params }) => ({
		variables: {
			hostname: getCurrentArchiveHostname(),
		}
	}),
});

export default projectCoverQuery;
