const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_01_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyLFxuICAgICAgICAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNixcbiAgICAgICAgODcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjExLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgODQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldJRmpTaUhYQTRlUXpKWDREWnMycSt6R09iaXNRVFRoaG1zbnJMU1NuT3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZUQkJqRjd4VFd5cXB4ZzFyUnBfckFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTc3OTJjNDYtM2VhOS00MmQwLThhNjAtNDBhMzIxMmJkZmRhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDkyLFxuICAgICAgMTM5LFxuICAgICAgMTQ0LFxuICAgICAgMTg1LFxuICAgICAgODQsXG4gICAgICAxNTcsXG4gICAgICAyMjksXG4gICAgICA0OCxcbiAgICAgIDE2MCxcbiAgICAgIDE1MCxcbiAgICAgIDQwLFxuICAgICAgMTAyLFxuICAgICAgMzgsXG4gICAgICA5MixcbiAgICAgIDc3LFxuICAgICAgNDgsXG4gICAgICAxNDAsXG4gICAgICAyMTcsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAyNDAsXG4gICAgICA5MCxcbiAgICAgIDIyOCxcbiAgICAgIDI1NSxcbiAgICAgIDEyMixcbiAgICAgIDIxOCxcbiAgICAgIDI1MixcbiAgICAgIDE4NCxcbiAgICAgIDE4MixcbiAgICAgIDIxLFxuICAgICAgMTYzLFxuICAgICAgMTUzLFxuICAgICAgMTA4LFxuICAgICAgMTY1LFxuICAgICAgMjQyLFxuICAgICAgMTY3LFxuICAgICAgMTg0LFxuICAgICAgMTIsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOENSMkM3M1pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzY4ODIzNjc6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYxMDI3NTc2MjQyMjA3OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08zUjdlTUNFTVRLMTdzR0dBOGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZzJ1Z25KdGRwYVBhMHUzckVZakZHOTNzdzhBZ01hcHFvTG9rcVFPdm1Gaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJldzN4YXdzbjgxb3plcVl4VUVObC9lMXRmektzcXhQdUpZekZHdXMxWFRwYkw4aGZmKzRtK0haMDNNWmdqaFd5RjlnZm96b05kTDB1TUtwT0pTN01Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6MDZ2YlhLaDE0VWpZV2RQVlVnWEd2Q1hXRUhSeXRtMUFHNU9oS0dpUkpmajBVUktMQXdvb2paTG42NjdDNkZNNW9jTDBPcjZyb0NML01yZEg3eWRoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM2ODgyMzY3OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1Nzc5NjU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRG9TXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEb1MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1em1ITFF0Z0xuL3NyWTFPSnAxV1I2RlI4ZXRBbUduUjNEU0t2SWo1dk44PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc0NjI4NTI5MyxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw5XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
