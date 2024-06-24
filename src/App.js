import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from 'components/Header/Header';
import Filters from 'components/Filters/Filters';
import TicketList from 'components/TicketList/TicketList';
import { fetchSearchId } from 'asyncActions/fetchSearchId';

import AppModule from './App.module.scss';

function App({ fetchSearchId }) {
  useEffect(() => {
    fetchSearchId();
  }, []);

  return (
    <div className={AppModule['wrapper-app']}>
      <Header />
      <Filters />
      <TicketList />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    filters: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSearchId: () => dispatch(fetchSearchId()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
