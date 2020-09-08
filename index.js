const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Photon",
        state: "Programming",
        startTimestamp: new Date(),
        largeImageKey: "large_image",
        largeImageText: "Hehe",
        smartImageKey: "small_image",
        smallImageText: "Dab"
    });

    console.log("Rich presence is now active");

});

rpc.login({
    clientId: "752735686687457310"
})

// dab