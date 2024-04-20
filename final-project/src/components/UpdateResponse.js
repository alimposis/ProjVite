export const UpdateCustomers = (url, customers) => {
    return fetch(url, {
        method: 'PUT',
        headers: { 'content-type' : 'application/json' },
        body: JSON.stringify(customers)
    })
    .then(response => {
        if (!response.ok)
            throw new Error("Error when updating Customers");
        return response.json();
    })
}