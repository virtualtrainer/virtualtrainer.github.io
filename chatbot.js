function init() {
    let res_elm = document.createElement("div");
    res_elm.innerHTML="Hello Myself Aco, How can I help you?" ;
    res_elm.setAttribute("class","left");
  //  let audio = new Audio(`https://nodetts.herokuapp.com/?text=Hello Myself Aco, How can I help you?`);
  //  audio.play();


 
    document.getElementById('msg').appendChild(res_elm);
}
 
const audioCtx = new AudioContext();
const audio1 = new Audio("https://nodetts.herokuapp.com/?text=Hello Myself Aco, How can I help you?");
const source = audioCtx.createMediaElementSource(audio1);
source.connect(audioCtx.destination);
audio1.play();



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
            res = JSON.stringify(data.data.text)
            console.log(data)
            console.log(res)
            str = res.substring(1);
            str1 = str.slice(0, -1);
            console.log(str1)
            var audio = new Audio(`https://nodetts.herokuapp.com/?text=${str1}`);
            audio.play();
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
        data_res.innerHTML = str1 ;
 
 
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