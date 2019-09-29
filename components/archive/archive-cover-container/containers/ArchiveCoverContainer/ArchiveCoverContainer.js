import React from 'react';
import _ from 'underscore';
import { compose } from 'react-apollo';


// import Cover from '../../../../components/common/Cover';
import Cover from '@bit/archimedes_digital.orpheus.cover';
import projectCoverQuery from '../../graphql/queries/projectCoverQuery';


const ArchiveCoverContainer = props => {
	let project = null;
	let files = [];
	let file;
	let imageUrl = '';
	const images = [];
	console.log("rendering archiveCoverContainer, props: ", props)
	if (props.projectCoverQuery) {
		project = props.projectCoverQuery.project;
	}

	if (project && project.files) {
		files = project.files;
	}

	if (files.length) {
		for (let i = 0; i < files.length; i+=1) {
			file = files[i];

			const fileType = file.type || '';
			const isImage = fileType.slice(0, fileType.indexOf('/')) === 'image';

			if (isImage) {
				images.push(file);
			}
		}

		if (images.length) {
			file = _.sample(images);
			imageUrl = `//iiif.orphe.us/${file.name}/square/${window.innerWidth},/0/default.jpg`;
		}
	}

	if (props.projectCoverQuery.loading) {
		return (
			<div>
				<Cover
					loading
					isArchiveCover
				/>
			</div>
		);
	}

	if (!project) {
		console.log("no project, rendering null")
		return null;
	}

	return (
		<div>
			<Cover
				title={project.title}
				lead={project.subtitle}
				imageUrl={imageUrl}
				isArchiveCover
			/>
		</div>
	);
}

export default compose(
	projectCoverQuery,
)(ArchiveCoverContainer);
