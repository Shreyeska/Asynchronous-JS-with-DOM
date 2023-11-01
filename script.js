const demo_URL = "https://course-api.com/react-store-products";
function fetchData(demo_URL, callback) {
    fetch(demo_URL).then((response) => {
        return response.json()
    }).then((data) => {
        callback(data)
    }).catch((error) => {
        console.log("error occured", error)
    })
}
function handleData(data) {
    const objects = document.getElementById("p1");
    objects.innerHTML = "<b>id:</b> " + data[0]["id"] +"<br><b>Name:</b> " + data[0]["name"] + "<br><b>Price:</b> " + data[0]["price"] + "<br><b>Colors:</b> "
        + data[0]["colors"] + "<br><b>Category:</b>" + data[0]["category"] + "<br><b>Company:</b> " + data[0]["company"]
        + "<br><b>Description:</b> " + data[0]["description"] +  "<br><b>Shipping:</b> " + data[0]["shipping"]
    const imageDisplay = document.getElementById("image")
    imageDisplay.src = data[0]["image"]
}
fetchData(demo_URL,handleData)
