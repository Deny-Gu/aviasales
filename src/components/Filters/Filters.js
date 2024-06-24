import { connect } from 'react-redux';

import { VisibilityFilters, toggleFilter } from 'actions/filtersActions';

import FiltersModule from './Filters.module.scss';

function Filters({ filters, toggleFilters }) {
  return (
    <div className={FiltersModule.filters}>
      <p>Количество пересадок</p>
      <ul>
        <li>
          <label className={FiltersModule['checkbox']}>
            <input
              tabIndex="0"
              className={FiltersModule['checkbox__input']}
              type="checkbox"
              onChange={() => toggleFilters(VisibilityFilters.SHOW_ALL)}
              onKeyDown={(e) => e.code === 'Enter' && toggleFilters(VisibilityFilters.SHOW_ALL)}
              checked={filters.includes(VisibilityFilters.SHOW_ALL)}
            />
            <span className={FiltersModule['checkbox__title']}>Все</span>
          </label>
        </li>
        <li>
          <label className={FiltersModule['checkbox']}>
            <input
              tabIndex="0"
              className={FiltersModule['checkbox__input']}
              type="checkbox"
              onChange={() => toggleFilters(VisibilityFilters.SHOW_WITHOUT_TRANSFERS)}
              onKeyDown={(e) =>
                e.code === 'Enter' && toggleFilters(VisibilityFilters.SHOW_WITHOUT_TRANSFERS)
              }
              checked={filters.includes(VisibilityFilters.SHOW_WITHOUT_TRANSFERS)}
            />
            <span className={FiltersModule['checkbox__title']}>Без пересадок</span>
          </label>
        </li>
        <li>
          <label className={FiltersModule['checkbox']}>
            <input
              tabIndex="0"
              className={FiltersModule['checkbox__input']}
              type="checkbox"
              onChange={() => toggleFilters(VisibilityFilters.SHOW_ONE_TRANSFER)}
              onKeyDown={(e) =>
                e.code === 'Enter' && toggleFilters(VisibilityFilters.SHOW_ONE_TRANSFER)
              }
              checked={filters.includes(VisibilityFilters.SHOW_ONE_TRANSFER)}
            />
            <span className={FiltersModule['checkbox__title']}>1 пересадка</span>
          </label>
        </li>
        <li>
          <label className={FiltersModule['checkbox']}>
            <input
              tabIndex="0"
              className={FiltersModule['checkbox__input']}
              type="checkbox"
              onChange={() => toggleFilters(VisibilityFilters.SHOW_TWO_TRANSFERS)}
              onKeyDown={(e) =>
                e.code === 'Enter' && toggleFilters(VisibilityFilters.SHOW_TWO_TRANSFERS)
              }
              checked={filters.includes(VisibilityFilters.SHOW_TWO_TRANSFERS)}
            />
            <span className={FiltersModule['checkbox__title']}>2 пересадки</span>
          </label>
        </li>
        <li>
          <label className={FiltersModule['checkbox']}>
            <input
              tabIndex="0"
              className={FiltersModule['checkbox__input']}
              type="checkbox"
              onChange={() => toggleFilters(VisibilityFilters.SHOW_THREE_TRANSFERS)}
              onKeyDown={(e) =>
                e.code === 'Enter' && toggleFilters(VisibilityFilters.SHOW_THREE_TRANSFERS)
              }
              checked={filters.includes(VisibilityFilters.SHOW_THREE_TRANSFERS)}
            />
            <span className={FiltersModule['checkbox__title']}>3 пересадки</span>
          </label>
        </li>
      </ul>
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
    toggleFilters: (filter) => dispatch(toggleFilter(filter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
