import React from 'react';
import axios from 'axios';

const withFormData = (WrappedComponent) => (props) => {
	class withFormData extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				loading: false,
				results: [],
				error: ''
			};
		}

		componentDidMount() {
			axios
				.get(props.url)
				.then((res) => this.setState({ ...this.state, results: res.data, loading: false }))
				.catch((error) => {
					this.setState({
						loading: false,
						error: error.message
					});
				});
		}

		render() {
			return (
				<WrappedComponent
					{...this.props}
					results={this.state.results}
					loading={this.state.loading}
					error={this.state.error}
				/>
			);
		}
	}

	withFormData.displayName = `withFormData(${WrappedComponent.name})`;
	return withFormData;
};

export default withFormData;

// const forwordref = React.forwardRef(FormChild);
