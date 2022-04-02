import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

let CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
let CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Routes>
          <Route
            path="/"
            element={
              <CollectionsOverviewWithSpinnerElement
                props={this.props}
                loading={loading}
              />
            }
          />
          <Route
            path="/:collectionId"
            element={
              <CollectionPageWithSpinnerElement
                props={this.props}
                loading={loading}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

const CollectionsOverviewWithSpinnerElement = ({ props, loading }) => {
  return <CollectionsOverviewWithSpinner isLoading={loading} {...props} />;
};

const CollectionPageWithSpinnerElement = ({ props, loading }) => {
  return <CollectionPageWithSpinner isLoading={loading} {...props} />;
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
