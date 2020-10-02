import { CONFIG } from "../config/config";

/**
 * get Catalog
 */
const getAllTasks = async () => {
    await doLogin();
    const user_data = await getAllUsers();
    const response = await fetch(`${CONFIG.API_ENDPOINT}/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b?company_id=${CONFIG.COMPANY_ID}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem('authToken')
        }
    });

    const { results } = await response.json();
    results.map((v, k) => {
        v.assigned_username = user_data[v.assigned_user].name;
        v.modified_username = user_data[v.modified_by].name;
        return v;
    });
    return results;
}

/**
 * get Catalog
 */
 const getTask = async (id) => {
    await doLogin();
    const response = await fetch(`${CONFIG.API_ENDPOINT}/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b/${id}?company_id=${CONFIG.COMPANY_ID}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem('authToken')
        }
    });

    return await response.json();
}

const addTasks = async (data) => {
    await doLogin();
    const response = await fetch(`${CONFIG.API_ENDPOINT}/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b?company_id=${CONFIG.COMPANY_ID}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem('authToken')
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}

const updateTask = async (data) => {
    await doLogin();
    const  { id } = data;
    delete data.id;
    const response = await fetch(`${CONFIG.API_ENDPOINT}/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b/${id}?company_id=${CONFIG.COMPANY_ID}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem('authToken')
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}

const deleteTask = async (id) => {
    await doLogin();
    const response = await fetch(`${CONFIG.API_ENDPOINT}/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b/${id}?company_id=${CONFIG.COMPANY_ID}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem('authToken')
        },
        body: JSON.stringify({})
    });

    return await response.json();
}

const getAllUsers = async () => {
    await doLogin();
    const response = await fetch(`${CONFIG.API_ENDPOINT}/team?company_id=${CONFIG.COMPANY_ID}&product=outreach`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem('authToken')
        }
    });

    const user_data = {};
    const { results: { data } } = await response.json();
    data.forEach((v, k) => user_data[v.id] = v);
    return user_data;
}

const doLogin = async () => {
    const AuthToken = window.localStorage.getItem('authToken');
    if (!AuthToken) {
        const rawResponse = await fetch(`${CONFIG.API_ENDPOINT}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CONFIG.LOGIN_DATA)
        });
        const content = await rawResponse.json();
        console.log(content, 'json');
        window.localStorage.setItem('authToken', content.results.token);
        console.log(content);
    }
}

export {
    getAllTasks,
    getAllUsers,
    addTasks,
    getTask,
    updateTask,
    deleteTask
};