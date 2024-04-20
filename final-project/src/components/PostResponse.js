export const PostResponse = (API,newData) => {
    console.log(API,newData)
    return fetch(API , {
        method: 'POST',
        headers: { 'content-type' : 'application/json' },
        body: JSON.stringify(newData)
    })
    .then(response => {
        if (!response.ok)
            throw new Error("Error when adding a Customers");
        return response.json();
    })
}