import types from '../reducers/types';

/**
 * Load Catalog
 * @param {*} data 
 */
export function loadCatalog() {
    return {
        type: types.LOAD_CATALOG
    }
}

/**
 * Load Branches
 * @param {*} data 
 */
export function selectedBranches(data) {
    return {
        type: types.SELECTED_CATALOG,
        branches: data,
        title : "/ "+data.name
    }
}

/**
 * Load SUB Branches
 * @param {*} data 
 */
export function selectedSubBranches(data,title,name) {
    return {
        type: types.SELECTED_CATALOG,
        branches: {
            categories : data
        },
        title: title+"/ " + name
    }
}
