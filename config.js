const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349011346139";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348066279255";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_42_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc0LFxuICAgICAgICA5MixcbiAgICAgICAgMjE5LFxuICAgICAgICA0NixcbiAgICAgICAgOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA5OCxcbiAgICAgICAgMixcbiAgICAgICAgMjEwLFxuICAgICAgICA4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTksXG4gICAgICAgIDk5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODksXG4gICAgICAgIDYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4LFxuICAgICAgICA3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMixcbiAgICAgICAgMTc2LFxuICAgICAgICAzNixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU2LFxuICAgICAgICA1LFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSkk3a0tpcjB2U005bllmaXJ4dkVBL2QvNUJlNGU1bjBQK0lINnVVc3hwYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieTR1UURUa2ZRQ20wR1JVYUNXOGw1QVwiLFxuICBcInBob25lSWRcIjogXCI0ZWM4Nzg1Ny1kNTAzLTQzMDgtOWNmZC01Nzc3N2ExM2M5ZjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAxMjUsXG4gICAgICAyNSxcbiAgICAgIDE3MixcbiAgICAgIDIxOSxcbiAgICAgIDE2NCxcbiAgICAgIDE5MixcbiAgICAgIDE2MixcbiAgICAgIDU1LFxuICAgICAgNjIsXG4gICAgICAyMjUsXG4gICAgICA5NSxcbiAgICAgIDEzNSxcbiAgICAgIDE0MSxcbiAgICAgIDE3OSxcbiAgICAgIDQwLFxuICAgICAgMTE1LFxuICAgICAgNTgsXG4gICAgICAxODksXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDE3NCxcbiAgICAgIDEwOCxcbiAgICAgIDU0LFxuICAgICAgMTA5LFxuICAgICAgMjU1LFxuICAgICAgMTExLFxuICAgICAgMTA3LFxuICAgICAgMjM3LFxuICAgICAgMjA5LFxuICAgICAgMTQ4LFxuICAgICAgMTMxLFxuICAgICAgMjMwLFxuICAgICAgMjM3LFxuICAgICAgMTY1LFxuICAgICAgMjM4LFxuICAgICAgMTU1LFxuICAgICAgMTU3LFxuICAgICAgMTYyLFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXJteWM4Q0VJUGwxN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5TEMzQ0NLNUF0aEJDVDBrK2J1ZGh1Z21NdWh4Vm45WmVtZnNWTk9TM1MwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk95Sk95M0tReTZHVW13cEtiN3A1WXNnQlArVlhOcnFBaUJBNzVZdXowenlTcmNJM0lXdXJ3c0VlckNGUnhldW0wTTJsa2laV2x4RFFzcEdqVU0xQ0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkc2QVFNUmRMQ0pCdGJld3hpMkhNNVdVa0RqMzBSZmh5WGp4NS9wd3RKcWNGZ3dUV2Fhd1g5b0ZxZGRXYjBGR3pCaWxjWTBQaWVqTy9UVWxoZE04MWdBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2NjI3OTI1NTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2VyZW5hYWFcIixcbiAgICBcImxpZFwiOiBcIjEyMjMyMTE3MTk1OTgzNzo2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2NjI3OTI1NTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMyMDAxMzZcbn0iCn0="  // PUT your SESSION_ID 

 
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "tumi-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
