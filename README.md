# PurdueBrightspace Chromium extension
A Chromium Extension to improve Purdue's implementation of Brightspace and Purdue Web Authentication

## Use

To use this extension, put your Purdue 2FA password in [login.js](./login.js) where it says "password here", and put your purdue username in the username field in the same file.

## Install

In Chrome or any other chromium web browser, open the extensions settings page in your browser, make sure `developer mode` is enabled, and then click `load unpacked` and select the folder that contains the [`manifest.json`](./manifest.json) file.

Refresh a Brightspace page (or myPurdue login) and it should just work!
