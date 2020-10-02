import { URL } from "../config/url";

/**
 * get Catalog
 */
const getCatalog = async () => {
    const response = await fetch(`${URL.API_ENDPOINT}/catalog.json`);
    return response.json();
}

export {
    getCatalog
};