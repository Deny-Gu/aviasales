import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getSort } from 'actions/sortActions';

import TabsModule from './Tabs.module.scss';

function Tabs({ sort, getSort, filters }) {
  useEffect(() => {
    if (filters.length === 0) {
      getSort('');
    }
  }, [filters]);

  return (
    <ul className={TabsModule['tabs-list']}>
      <li
        className={
          TabsModule['tabs-list__item'] +
          ' ' +
          (sort === 'cheap' && TabsModule['tabs-list__item_active'])
        }
        onClick={() => getSort('cheap')}
      >
        <button>Самый дешевый</button>
      </li>
      <li
        className={
          TabsModule['tabs-list__item'] +
          ' ' +
          (sort === 'fast' && TabsModule['tabs-list__item_active'])
        }
        onClick={() => getSort('fast')}
      >
        <button>Самый быстрый</button>
      </li>
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    sort: state.sort,
    filters: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSort: (sort) => dispatch(getSort(sort)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
