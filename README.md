# Telegram Caption Bot

![Telegram Caption Bot]([link_to_bot_image.png](https://cdn-icons-png.flaticon.com/512/4712/4712248.png))

A Telegram bot that adds captions to files and forwards them to a specified channel.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This Telegram bot is designed to add captions to files sent to it and automatically forward the captioned files to a specified channel. It's a simple yet powerful tool for enhancing the content sharing experience on Telegram.

## Features

- Add captions to files based on their filenames.
- Automatically forward captioned files to a specified channel.
- Support for files up to 4GB in size.

## Requirements

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your_username/telegram-caption-bot.git
   
## Configuration

Create a .env file in the project root and fill in the necessary credentials:

API_ID=your_api_id
API_HASH='your_api_hash'
STRING_SESSION='your_string_session'
TELEGRAM_BOT_TOKEN='your_bot_token'
CHANNEL_ID=@your_channel


## Usage

Start the bot by running:

nodemon index.js

## Contributing

If you'd like to contribute to this project, feel free to open an issue or submit a pull request. Your contributions are highly appreciated!

## Licence

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


