import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {
	convertCollectionsSnapshotToMap,
	firestore,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSppiner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSppiner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;
	state = { loading: true };
	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		collectionRef.get().then((snapshot) => {
			const collectionMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionMap);
			this.setState({ loading: false });
		});
	}
	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSppiner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionsPageWithSppiner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionMap) =>
		dispatch(updateCollections(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
