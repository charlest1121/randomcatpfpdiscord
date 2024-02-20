# Random Cat Profile Picture Discord Self-Bot

This script allows a Discord self-bot to periodically update its profile picture with random cat images fetched from the `cataas.com` API. It uses `discord.js-selfbot-v13` for Discord bot operations and dynamically imports `node-fetch` to handle HTTP requests.

## Disclaimer

Use of self-bots violates Discord's Terms of Service. Utilizing this script with your Discord account could lead to account suspension or termination. This guide is for educational purposes only. Proceed at your own risk.

## Prerequisites

- **Node.js (v16 or higher)**: The script requires Node.js to run. Make sure you have Node.js version 16 or above installed on your system.
- **npm (Node Package Manager)**: Comes with Node.js and is used for managing dependencies.

## Installation

### 1. Clone the Repository

First, clone this repository to your local machine using Git:

```bash
git clone https://github.com/charlest1121/randomcatpfpdiscord.git
cd randomcatpfpdiscord
```

### 2. Install Dependencies

Inside the project directory, install the required npm packages:

```bash
npm install
```

### 3. Configuration

Replace `"AUTH_TOKEN"` in the script with your Discord account token. For security reasons, it's recommended to use environment variables or a configuration file to store sensitive information like your Discord token.

## Usage

To run the script, navigate to your project directory in the terminal and execute:

```bash
node randomcat.js
```

The script will start, and your Discord self-bot will periodically update its profile picture with a new random cat image.

## Additional Notes

- **Token Security**: Never share your Discord token or store it in a publicly accessible location.
- **Modifications**: Feel free to customize the script to fit your preferences. You can adjust the image fetching interval, image types, and more by modifying the script's options.
- **Updates & Maintenance**: Keep an eye on the dependencies for any updates or security fixes. Regularly update your Node.js version to ensure compatibility.

## Contributing

Contributions to improve the script or documentation are welcome. Please follow the standard GitHub fork and pull request workflow.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details. The GNU GPL is a copyleft license that allows users to modify and share all versions of the licensed code but requires all modifications and derivatives to be open-sourced under the same license.

By using, distributing, or contributing to this project, you agree to the terms and conditions of this license.
