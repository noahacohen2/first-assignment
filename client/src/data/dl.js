const serverUrl = "http://localhost:3000";

const addCart = (cart) => {
    let dataObject = { "cart": cart }
    return fetch(serverUrl + '/userCart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObject)
    });
}

export { addCart }