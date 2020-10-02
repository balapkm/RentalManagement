import React, {
    useEffect
} from 'react';
import './App.css';

import {
    loadCatalog
} from "../../actions/CatalogAction";

import {
    useDispatch
} from 'react-redux';

import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(loadCatalog())
    }, []);

    return (
        <>
            <Header></Header>
            <Catalog></Catalog>
        </>
    );
}

export default App;
