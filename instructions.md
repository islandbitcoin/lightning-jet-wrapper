# Welcome to Lightning Jet!

### This is a tool for working with the balance of your satoshis on LND 

**Lightning Jet is command-line only service; an SSH Key is required to use this service.**

**IMPORTANT** 
When this service is started it will automatically start rebalancing attempts. *Rebalancing may spend your satoshis!* 
Please review https://github.com/itsneski/lightning-jet for more details.

## Setup 
Please note: for EOS v0.3.1 and above the default ssh user has changed from "root" to "start9", you will need to add `sudo` to the beginning of each command below.
> 1. SSH into this Embassy (add a new SSH Key if needed)
>
> 2. Run the following command to enter the `lightning-jet.embassy` container:
>
>    `docker exec -it lightning-jet.embassy /bin/bash`

**You should now be able to run Lightning Jet commands.**

## Logs
Please note: for EOS v0.3.1 and above the default ssh user has changed from "root" to "start9", you will need to add `sudo` to the beginning of each command below.

To access logs on Lightning Jet, you can run any of the following commands: 
> 1. `docker exec lightning-jet.embassy cat /tmp/rebalancer.log`
> 1. `docker exec lightning-jet.embassy cat /tmp/htlc-logger.log`
> 1. `docker exec lightning-jet.embassy cat /tmp/launcher.log`
> 1. `docker exec lightning-jet.embassy cat /tmp/telegram.log`

## Telegram Bot

Lightning Jet telegram bot (Jet bot) will notify you about important events such as changes in fees for your remote peers.

To create Jet bot: initiate a conversation with BotFather on your Telegram app. Then, select the bot's name (e.g., JET bot) and bot's username (e.g., JET_bot).

Copy the telegram token from the Telegram app chat with BotFather (right under 'Use this token to access the HTTP API:'). Paste this token in the `Telegram API Token` field in your config window.

Start your Lightning Jet service, then open a chat with the bot you just created in your Telegram app and type /start. This will kick off the communication between the Telegram bot with Jet. You only need to do this step once.
## Run the command `jet help` for more information.
