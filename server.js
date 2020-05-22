const tello = require("tello-drone");

const drone = tello.connect({
  host: "",
  port: "8888",
  statePort: "8890",
  skipOK: false
});


drone.on("connection", () => {
    console.log("Connected to drone");
});

drone.on("state", state => {
        console.log("Recieved State", state);
})

drone.on("send", (err, length) => {
    if (err) console.log(err);

    console.log(`Sent command is ${length} long`);
});

drone.on("message", message => {
    console.log("Recieved Message >", message);
})

drone.on("connection", async () => {
    try {
        await drone.send("takeoff");
        await drone.send("flip", {value: "f"});
        await drone.send("land");
    } catch (error) {
        console.log(error)
        drone.send("land")
        
        setTimeout(process.exit)
    }
})


drone.send("battery?")

drone.forceSend("batter?")

drone.on(event, callback)