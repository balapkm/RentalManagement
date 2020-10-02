import React from 'react';

import './Header.css';

import {
  selectedBranches
} from "../../actions/CatalogAction";

import {
  useSelector,
  useDispatch,
  shallowEqual
} from 'react-redux';

/**
 * Login user
 */
function Header() {

  const catalogData = useSelector(state => {
    return state.catalogReducer
  }, shallowEqual);

  const dispatch = useDispatch();

  /**
   * select Catalog
   * @param {*} catalogId 
   * @param {*} branchId 
   */
  const selectCatalog = (catalogId,branchId) => {
    dispatch(selectedBranches(catalogData.catalog[catalogId].branches[branchId]))
  }

  /**
   * render 
   */
  return (
    <div className="header-container">
        <p className="title">Rental Management system</p>
        <ul className="top-level-menu">
          <li>
              <a href="#">Select Location</a>
              <ul className="second-level-menu">
                  {catalogData.catalog.map((v,k) => {
                    return (
                      <li key={k}>
                        <a href="#">{v.name}</a>
                        <ul className="third-level-menu">
                          {v.branches.map((v1,k1) => { 
                            return (
                            <li key={k1}>
                              <a href="#" onClick={() => selectCatalog(k,k1)}>{v1.name}</a>
                            </li>
                            )
                          })}
                        </ul>
                      </li>
                    )
                  })}
              </ul>
          </li>
        </ul>
      </div>
  );
}

export default React.memo(Header);
