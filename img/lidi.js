lidi.create({
    // (C1) INIT LIKE/DISLIKE BUTTON
    hWrap : document.getElementById("demoA"),
    status : 1, // optional default status, 1 like -1 dislike
  
    // (C2) SEND NEW LIKE/DISLIKE STATUS TO SERVER
    onChange : (status) => {
      var data = new FormData();
      data.append("status", status);
      fetch("1-dummy.txt", { method: "POST", body: data })
      .then(res => res.text())
      .then((txt) => { console.log(txt); })
      .catch((err) => { console.error(err); });
    }
  });