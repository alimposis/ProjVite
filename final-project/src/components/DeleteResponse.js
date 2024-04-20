 export const DeleteCustomers = (url) => {
        if (window.confirm("Are you sure?")) {
            return fetch(url, { method: 'DELETE' })
            .then(response => {
                if (!response.ok)
                    throw new Error("Error in deletion: " + response.statusText);
                response.json();
            })
        }
    }