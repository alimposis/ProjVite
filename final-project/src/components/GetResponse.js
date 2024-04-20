export const GetResponse =(URL)=>{
    return fetch(URL)
    .then((response)=>{
        if (!response.ok) throw new Error("Error in fetch: " + response.statusText);
        return response.json();
    })
    
}