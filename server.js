const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const app = express()

const questionRoute = require('./routes/questionRoute')
const mongoose = require('mongoose');

const Question = require("./models/question");
const User = require('./models/User')


mongoose.connect('mongodb+srv://alparslank:12101210@cluster0.wfcgv.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const session = require('express-session');
const MongoStore = require('connect-mongo');
const fileUpload = require('express-fileupload')
const methodOverride=require('method-override')

const categoryRoute= require('./routes/categoryRoute')
const productRoute = require('./routes/productRoute')
const pageRoute= require('./routes/pageRoute')
const userRoute= require('./routes/userRoute')
const orderRoute = require('./routes/orderRoute')


mongoose.connect('mongodb+srv://alparslank:12101210@cluster0.wfcgv.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Middlewares

app.use(
  session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://alparslank:12101210@cluster0.wfcgv.mongodb.net/test' }),
  })
);

app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);


app.set("view engine", "ejs")



app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload())



app.use('*',(req, res, next)=> {
  userIN=req.session.userID,
  userROLE=req.session.userROLE
  next()
} )
app.use('/',pageRoute )
app.use('/products',productRoute)
app.use('/users',userRoute)
app.use('/categories', categoryRoute);
app.use('/myOrders', orderRoute );






  
 app.use('/',pageRoute)




app.set("view engine", "ejs")





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

    //kullan??c?? giri?? yapt?????? anda bu soru soruluyor
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