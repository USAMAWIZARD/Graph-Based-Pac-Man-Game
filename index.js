//to add feature of online multiplayer in game enamy player online   
server = require("express");
const bodyParser = require("body-parser");
require("ejs");
app = server();
socketlisten = app.listen(5000);
//io = require("socket.io")(socketlisten);
app.set("view ejgine", "ejs");
app.use(server.static(__dirname+'/views'));
app.get('/',(req,res)=>{
    res.render('pacman.ejs')
})