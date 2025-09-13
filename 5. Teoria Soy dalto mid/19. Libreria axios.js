const showInfor = document.getElementById("showInfor");
const showInfor1 = document.getElementById("showInfor1");
const showInfor2 = document.getElementById("showInfor2");

showInfor.addEventListener("click", () => {
    axios('information.txt')// axios.post
        .then(res => console.log(res))
})

showInfor1.addEventListener("click", () => {
    axios('https://reqres.in/api/users', {
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    })
    .then(res => console.log(res))
})

showInfor2.addEventListener("click", () => {
    axios.post('https://reqres.in/api/users', 
        {
            name: "Pedro",
            job: "Developer"
        },
        {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        }
    )
    .then(res => console.log(res.data))
})