import React from 'react';

import {
  useSelector,
  useDispatch,
  shallowEqual
} from 'react-redux';

import {
  selectedSubBranches
} from "../../actions/CatalogAction";

import './Catalog.css';
/**
 * Users
 */
function Catalog() {

  const catalogData = useSelector(state => {
    return state.catalogReducer
  }, shallowEqual);

  const dispatch = useDispatch();

  /**
   * select sub category
   * @param {*} value 
   */
  const selectSubCat = (value) => {
    if(value.subcategories) {
      dispatch(selectedSubBranches(value.subcategories, catalogData.title,value.name))
    }
  } 

  return (
    <>
      <div className="container">
        {(catalogData.selectedBranch.categories.length === 0) ? (
          <div className="center">
            <h2>Welcome to Rental Management system</h2>
            <p>Please select location on header</p>
          </div>
        ) : (
          <>
            <h4>Equipment Catalog {catalogData.title}</h4>
            {catalogData.selectedBranch.categories.map((v,k) => {
              return (
                <div key={k} className="sub-container">
                  <img src={"img/"+v.image} className="img" alt={v.name}/>
                  <div className="footer">
                    <h4 onClick={() => selectSubCat(v)}>{v.name}</h4>
                  </div>
                </div>
              )
            })}
          </>
        )}
      </div>
    </>
  );
}

export default React.memo(Catalog);
