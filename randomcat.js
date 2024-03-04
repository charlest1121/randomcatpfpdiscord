const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

let useFallback = false;
let fallbackActivatedTime = null;

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
  setInterval(async () => {
    const now = Date.now();

    if (
      useFallback &&
      fallbackActivatedTime &&
      now - fallbackActivatedTime >= 21600000
    ) {
      // 6 hours in milliseconds
      useFallback = false;
      console.log(
        "6 hours have passed, attempting to revert back to cataas.com."
      );
    }

    try {
      const fetch = (await import("node-fetch")).default;
      let imageUrl;

      if (!useFallback) {
        // Construct the cataas URL with options
        const options = {
          type: "",
          tag: "",
          text: "",
          fontSize: "",
          fontColor: "",
          filter: "",
          customFilterOptions: {},
          width: "200",
          height: "200",
          json: true,
        };

        let url = "https://cataas.com/cat";
        if (options.tag) url += `/${options.tag}`;
        if (options.text) url += `/says/${options.text}`;
        if (options.fontSize || options.fontColor)
          url += `?size=${options.fontSize}&color=${options.fontColor}`;
        if (options.type)
          url += (url.includes("?") ? "&" : "?") + `type=${options.type}`;
        if (options.filter)
          url += (url.includes("?") ? "&" : "?") + `filter=${options.filter}`;
        if (options.width || options.height)
          url +=
            (url.includes("?") ? "&" : "?") +
            `width=${options.width}&height=${options.height}`;
        if (options.json) url += (url.includes("?") ? "&" : "?") + "json=true";

        try {
          const response = await fetch(url);
          if (!response.ok)
            throw new Error(
              `Failed to fetch from cataas: ${response.statusText}`
            );
          const data = await response.json();
          imageUrl = `https://cataas.com${data.url}`;
          console.log("Image URL from cataas:", imageUrl);
        } catch (error) {
          console.error("Cataas fetch failed, switching to fallback:", error);
          useFallback = true;
          fallbackActivatedTime = Date.now();
        }
      }

      if (useFallback) {
        // Use fallback npm library
        const randomCatImg = (await import("random-cat-img")).default;
        const result = await randomCatImg();
        imageUrl = result.message; // Extract the URL string
        console.log("Fallback Image URL:", imageUrl);
      }

      // Fetch and set the avatar
      const response = await fetch(imageUrl);
      if (!response.ok)
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      const imageBuffer = await response.arrayBuffer();
      await client.user.setAvatar(Buffer.from(imageBuffer));
      console.log("Profile picture updated!");
    } catch (error) {
      console.error("Error updating profile picture:", error);
    }
  }, 10000); // Update this interval as needed
});

client.login("AUTH_TOKEN");
