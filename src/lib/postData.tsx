export function postData(type: string, userData: unknown) {
    
    let url = `http://mainmarketapi.herokuapp.com/api/Auth/${type}-external-login`;
    console.log(userData);

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    })

}