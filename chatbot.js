function init() {
    let res_elm = document.createElement("div");
    res_elm.innerHTML="Hello Myself Aco, How can I help you?" ;
    res_elm.setAttribute("class","left");
 
    document.getElementById('msg').appendChild(res_elm);
}
 
async function getData() {
    try {
       let res = await axios({
            url: 'https://api.wit.ai/message?v=20220825&q=hi',
            method: 'get',
           // timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer B53WRIGPEE3DGEPK3IYEJ3BP3WOPNLPE'
            }
        })
        if(res.status == 200){
            // test for status you want, etc
            console.log(res.status)
        }    
        // Don't forget to return something   
        return res.data
    }
    catch (err) {
        console.error(err);
    }
}

getData()
.then(res => console.log(res)) 


document.getElementById('reply').addEventListener("click", async (e) => {
    e.preventDefault();
 
    var req = document.getElementById('msg_send').value ;
 
    if (req == undefined || req== "") {
 
    }
    else{
     
        var res = "";
        await axios({
            url: `https://api.wit.ai/message?v=20220825&q=${req}`,
            method: 'get',
           // timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer B53WRIGPEE3DGEPK3IYEJ3BP3WOPNLPE'
            }
        }).then(data => {
            res = JSON.stringify(data.data.response)
            console.log(data)
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer B53WRIGPEE3DGEPK3IYEJ3BP3WOPNLPE'
          }
    })
           
        let data_req = document.createElement('div');
        let data_res = document.createElement('div');
 
        let container1 = document.createElement('div');
        let container2 = document.createElement('div');
 
        container1.setAttribute("class","msgCon1");
        container2.setAttribute("class","msgCon2");
 
        data_req.innerHTML = req ;
        data_res.innerHTML = res ;
 
 
        data_req.setAttribute("class","right");
        data_res.setAttribute("class","left");
 
        let message = document.getElementById('msg');
 
         
        message.appendChild(container1);
        message.appendChild(container2);
 
        container1.appendChild(data_req);
        container2.appendChild(data_res);
 
        document.getElementById('msg_send').value = "";
 
    function scroll() {
        var scrollMsg = document.getElementById('msg')
        scrollMsg.scrollTop = scrollMsg.scrollHeight ;
    }
    scroll();
 
    }
 
 
    });