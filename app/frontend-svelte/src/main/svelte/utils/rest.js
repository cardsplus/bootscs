export async function loadAllValue(restUrl) {
    return fetch(BACKEND_URL + restUrl, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => {
        console.log(res);
        if (res.ok) return res;
        throw Error(restUrl + ' failed with status code ' + res.status);        
    })
    .catch(err => {
        console.log(err);
        throw err;   
    });
}

export async function createValue(restUrl, value) {
    return fetch(BACKEND_URL + restUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(value)
    })
    .then(res => {
        console.log(res);
        if (res.ok) return res;
        throw Error(restUrl + ' failed with status code ' + res.status);
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
}

export async function updateValue(restUrl, value) {
    return fetch(BACKEND_URL + restUrl, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(value)
    })
    .then(res => {
        console.log(res);
        if (res.ok) return res;
        throw Error(restUrl + ' failed with status code ' + res.status);            
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
}

export async function removeValue(restUrl) {
    return fetch(BACKEND_URL + restUrl, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => {
        console.log(res);
        if (res.ok) return res;
        throw Error(restUrl + ' failed with status code ' + res.status);
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
}

export async function fetchHtml(htmlUrl) {
    return fetch(BACKEND_URL + htmlUrl, {
        method: 'GET',
        headers: {
            'Accept': 'text/html'
        }
    })
    .then(res => {
        console.log(res.status);
        if (res.ok) return res;
        throw Error(htmlUrl + ' failed with ' + res.status);        
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
}

