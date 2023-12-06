// task 1
let getData = (apilink) => {
    return new Promise((resolve , reject)=> {
        let request = new XMLHttpRequest();
        request.onload = function(){
            if(this.status === 200 & this.readyState === 4){
                resolve(JSON.parse(this.responseText))
            } else {
                reject(Error("NO DATA"))
            }
        };
        request.open("GET" , apilink);
        request.send();
    })
}
getData("data.json").then((data)=> {
    data.length = 5 ; 
    return data ;
}).then((data) => {
    for (var i = 0 ; i < data.length  ; i++ ){
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h3.innerText = data[i].title ;
        p.innerText = data[i].description;
        div.appendChild(h3);
        div.appendChild(p);
        document.body.appendChild(div);
    }
}).catch((reject)=> console.log(reject))
.finally(console.log("done"));


// task 2
async function data(){
    try{
        var data = await fetch("data.json");
        var updatedData = await data.json();
        updatedData.length = 5;
        for (var i = 0 ; i < updatedData.length  ; i++ ){
            const div = document.createElement("div");
            const h3 = document.createElement("h3");
            const p = document.createElement("p");
            h3.innerText = updatedData[i].title ;
            p.innerText = updatedData[i].description;
            div.appendChild(h3);
            div.appendChild(p);
            document.body.appendChild(div);
        }
    }catch(err){Error("no data")}
}
data();