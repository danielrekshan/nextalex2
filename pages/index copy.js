// Dev notes: This component acts as a page-level container.  
// It is built using webpack, defined in webpack.config.js as an entry point, and then linked into the server-side rendered html response defined in /src/routes/pages/js
// This is an example of a layout.  It's title and meta tags are set in the route's html response and the page-specific bundle is linked via a Handlebar variable called jsFileName.


import React from 'react';
import { compose } from 'react-apollo';

import Cover from '@bit/archimedes_digital.orpheus.cover';
// import'@bit/archimedes_digital.orpheus.cover/Cover.css';

import ArchiveCoverContainer from '@bit/archimedes_digital.orpheus.archive.archive-cover-container';
import withData from '../lib/apollo'
// import ProductList from '@bit/bit.react-tutorial.product-list';
// import ProductList from '../components/bit/product-list';
import FacetedCards from '@bit/archimedes_digital.orpheus.common.faceted-cards';


// import './home.css';



  
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";


POSTS_PER_PAGE = 10;

const query = gql`
  query projects() {
    projects() {
      id
      title

    }
   
  }
`;

const projectAllQuery = graphql(query, {
	name: 'projectAllQuery',
	options: ({ params }) => ({
		variables: {
			hostname: 'alexandria',
		}
	}),
});

class Home extends React.Component {
	constructor() {
		super();
		
	}

	componentDidMount() {
		console.log('\n\n\n\n ========= componentDidMount home', JSON.stringify(this.props, null, '\t'));
	}

	componentDidUpdate() {
		console.log('\n\n\n\n ========= componentDidUpdate home', JSON.stringify(this.props, null, '\t'));
	}

	componentWillReceiveProps() {
		console.log('\n\n\n\n ========= componentWillReceiveProps home', JSON.stringify(this.props, null, '\t'));
	}


	render() {
		console.log('\n\n\n\n ========= rendering home', JSON.stringify(this.props, null, '\t'));
		return (
			<div className="home">
                <h2>Nextalex2222 Tester 333, with container2, working?</h2>
				<p><em>This is the Cover component. It is a good example of how to use a Component from Orpheus.</em></p>
				<Cover title={'Test Title for Cover Element inside of nextalex'} />
				<hr />
				<p><em>This is the Archive Cover component.  It is a good exaple of how to use a Container from Orpheus.  You'll likely notice console errors because the graphql query in the Orpheus container doesn't exactly match this API's yet.</em></p>
				{/* <ArchiveCoverContainer /> */}
				HEre?
				{/* <ProductList /> */}
				<hr />
			</div>
		);
	}
}
// export default withData(Home);
// export default Home;

export default compose(
	project,
)(ArchiveFiltersContainer);
