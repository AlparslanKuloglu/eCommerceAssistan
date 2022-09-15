const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const app = express()
const ejs = require('ejs')
const authController=require('./controllers/authController')
const pageRoute= require('./routes/pageRoute')
const userRoute= require('./routes/userRoute')
const questionRoute = require('./routes/questionRoute')
const mongoose = require('mongoose');

const Question = require("./models/question");
const User = require('./models/user')


const MongoStore = require('connect-mongo');

mongoose.connect('mongodb+srv://alparslank:12101210@cluster0.wfcgv.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});





  
 app.use('/',pageRoute)




app.set("view engine", "ejs")

//Middlewares

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())




app.use('/',pageRoute )
app.use('/users',userRoute )
app.use('/questions', questionRoute )












//---------socket---------


const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");



const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const botName = "Loscart Assistance";



io.on("connection", (socket) => {


  
  socket.on("joinRoom", async ({ username, room }) => {


    const user = userJoin(socket.id, username, room);

    const user1 = await User.findOne({_id:user.room})

    const question1 = await Question.findOne({id:user1.quCount})



    socket.join(user.room);

    //kullanıcı giriş yaptığı anda bu soru soruluyor
    socket.emit("message", formatMessage(botName, question1.question));

    // Broadcast when a user connects
 
  });

  // Listen for chatMessage
  socket.on("chatMessage", async (msg) => {
    const user = getCurrentUser(socket.id);
    const user1 = await User.findOne({_id:user.room})
    user1.quCount = user1.quCount + 1
    user1.save()
    const question1 = await Question.findOne({id:user1.quCount})

    

    io.to(user.room).emit("message", formatMessage(user.username, msg));


    socket.emit("message", formatMessage(botName, question1.question ));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))