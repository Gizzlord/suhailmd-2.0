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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_21_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICA2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExLFxuICAgICAgICA4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MixcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMTgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDYsXG4gICAgICAgIDQxLFxuICAgICAgICAzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjNmJxWWlWanR2MC9ub2FsWEVnNkVsS3lNZHh0RDZMZDN4SVIrK1lsc1ZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCQ3loS3hoUlExLUZEMWZQMVBBZ1JnXCIsXG4gIFwicGhvbmVJZFwiOiBcImU0YWMxN2VhLWE3YTctNGY4My04M2MwLTUzZWRkMzMxNGEzMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDc5LFxuICAgICAgMTY0LFxuICAgICAgOCxcbiAgICAgIDIwOCxcbiAgICAgIDE0NixcbiAgICAgIDEyMSxcbiAgICAgIDYxLFxuICAgICAgNzQsXG4gICAgICAyOCxcbiAgICAgIDMsXG4gICAgICAyMjYsXG4gICAgICAzNixcbiAgICAgIDIxNixcbiAgICAgIDg5LFxuICAgICAgNjUsXG4gICAgICAyMzIsXG4gICAgICA3NyxcbiAgICAgIDYyLFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAxNTcsXG4gICAgICAxNTMsXG4gICAgICAxMDksXG4gICAgICAxNSxcbiAgICAgIDIzNSxcbiAgICAgIDM4LFxuICAgICAgOTQsXG4gICAgICAxLFxuICAgICAgODIsXG4gICAgICAxOTUsXG4gICAgICAxMjEsXG4gICAgICAyMzIsXG4gICAgICAxNjksXG4gICAgICA0MyxcbiAgICAgIDM2LFxuICAgICAgMjExLFxuICAgICAgMTIxLFxuICAgICAgMjE4LFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNNOUc0RkhLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM2ODgyMzY3OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MTAyNzU3NjI0MjIwNzozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPM1I3ZU1DRUlyVTE3c0dHQkFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImcydWduSnRkcGFQYTB1M3JFWWpGRzkzc3c4QWdNYXBxb0xva3FRT3ZtRms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMXFWSHY4dUFwd0ZTVUhjOHh5bXNaWkJNQVp3ZWJWTmd1bGtQbG13bjk3SmNaT05zM2xFN1JoY0JlWXEvWkhOb1JieEZ6WGxBUDh3QWcxZHNrWGNlQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQUZwWGxtZVJqejlsRFdrU2pzSHhCK2lHVnZtaHNmZ2JkaEl5K3dCeUtLYTM1TnlkN3lhTmtiM2VNYjRJZUVzUGF2cjhEWllNVzRZalBuU1ZWdDhuQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNjg4MjM2NzozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTc4MDg3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURvU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRG9TLmpzb24iOiAie1wia2V5RGF0YVwiOlwidXptSExRdGdMbi9zclkxT0pwMVdSNkZSOGV0QW1HblIzRFNLdklqNXZOOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NDYyODUyOTMsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsOV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
