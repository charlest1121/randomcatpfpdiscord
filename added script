const { Client } = require("discord.js-selfbot-v13");

const client = new Client();

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
  setInterval(async () => {
    try {
      // Dynamically import node-fetch
      const fetch = (await import("node-fetch")).default;

      // Customization options
      const options = {
        type: "gif", // e.g., 'gif'
        tag: "", // e.g., 'cute'
        text: "hi", // e.g., 'hello'
        fontSize: "", // e.g., '50'
        fontColor: "white", // e.g., 'red'
        filter: "", // e.g., 'mono'
        customFilterOptions: {
          brightness: "",
          lightness: "",
          saturation: "",
          hue: "",
          red: "",
          green: "",
          blue: "",
        },
        width: "200",
        height: "200",
        json: true, // Set to true to fetch the image URL in JSON format
      };

      // Constructing the URL based on the provided options
      let url = "https://cataas.com/cat";
      if (options.tag) url += `/${options.tag}`;
      if (options.text) url += `/says/${options.text}`;
      if (options.fontSize || options.fontColor)
        url += `?fontSize=${options.fontSize}&fontColor=${options.fontColor}`;
      if (options.type) url += `?type=${options.type}`;
      if (options.filter) {
        url += `?filter=${options.filter}`;
        if (options.filter === "custom") {
          const { brightness, lightness, saturation, hue, red, green, blue } =
            options.customFilterOptions;
          url += `&brightness=${brightness}&lightness=${lightness}&saturation=${saturation}&hue=${hue}`;
          url += `&r=${red}&g=${green}&b=${blue}`;
        }
      }
      if (options.width || options.height)
        url += `?width=${options.width}&height=${options.height}`;
      if (options.json) url += (url.includes("?") ? "&" : "?") + "json=true";

      // Fetching the cat image URL
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      const data = await response.json();

      console.log("Full JSON response:", JSON.stringify(data, null, 2));
      const imageUrl = `https://cataas.com/cat/${data._id}`;
      console.log("Image URL:", imageUrl);

      if (!data._id) {
        throw new Error(
          "Image ID is undefined, cannot construct image URL without it."
        );
      }

      // Fetching the actual image
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok)
        throw new Error(`Failed to fetch image: ${imageResponse.statusText}`);
      const imageBuffer = await imageResponse.arrayBuffer();
      const buffer = Buffer.from(imageBuffer);
      await client.user.setAvatar(buffer);
      console.log("Profile picture updated!");
    } catch (error) {
      console.error("Error updating profile picture:", error);
    }
  }, 180000); // Change how many times it changes
});

client.login(
  "AUTH_TOKEN"
);
