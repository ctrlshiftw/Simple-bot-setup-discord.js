const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express')
const fs = require('fs')
const { keep_alive } = require("./keep_alive");
keepAlive();
//所有準備
const prefix = "!"
//prefix
client.on('ready', () => {
  console.log("I am ready")
  client.user.setUsername('Testbot001')
  client.user.setPresence({ activity: {name:"Your activity"}, status: "online"})
});
//機器人名字+狀態
client.on('message', message => {
  if(message.content === "ping") {
    message.channel.send("pong")
  }
    if(message.content === "embed test") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Title")
    .setDescription("Description")
    .setFooter("Footer")
    .setColor("RANDOM")
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    message.channel.send(embed)
    }
});
//機器人信息功能
client.on('message', message => {
  if(message.content === `${prefix}help`) {
    let embed = new Discord.MessageEmbed()
    .setTitle('Commands')
    .setDescription('ping\nembed test')
    .setFooter('help')
    .setColor("RANDOM")
    message.channel.send(embed)
  }
})
//help指令
client.login(process.env.token)
//機器人種子