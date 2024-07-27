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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137459815";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_11_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMixcbiAgICAgICAgMjE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk3LFxuICAgICAgICA0MixcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc3LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU5LFxuICAgICAgICA1LFxuICAgICAgICAzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQxLFxuICAgICAgICA1MixcbiAgICAgICAgODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTkxLFxuICAgICAgICA5NyxcbiAgICAgICAgODksXG4gICAgICAgIDM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9lbElKajV5dUMycFdKOFJhTUNSL29SMXRnZVpsYk1tQXJBclJtVGNEeWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzNzQ1OTgxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzBERTJGNDVDNDA0MjE3NkM5NjIzMUMyQzNDODM3OUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTIxODg2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZwZTQ2NW04UzFHeExTUUxIRkh4d0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmJhMzNlMDctZWIwNC00YzEyLWE4MWEtZjQ3ZmJlOWJmY2RlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDksXG4gICAgICAxMTMsXG4gICAgICA5MyxcbiAgICAgIDgyLFxuICAgICAgMTUzLFxuICAgICAgNDEsXG4gICAgICAxMzEsXG4gICAgICAxMTAsXG4gICAgICAyMDYsXG4gICAgICAxNTQsXG4gICAgICAxNDgsXG4gICAgICAxMSxcbiAgICAgIDgzLFxuICAgICAgMjMyLFxuICAgICAgMTQ5LFxuICAgICAgMTU5LFxuICAgICAgMjQwLFxuICAgICAgMjA0LFxuICAgICAgMjA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDE4MixcbiAgICAgIDIxMixcbiAgICAgIDc0LFxuICAgICAgMTIxLFxuICAgICAgMTIyLFxuICAgICAgMTg1LFxuICAgICAgMzgsXG4gICAgICA1LFxuICAgICAgMjQ0LFxuICAgICAgNDYsXG4gICAgICAxMDMsXG4gICAgICA4OCxcbiAgICAgIDE5OSxcbiAgICAgIDE3MyxcbiAgICAgIDEwMCxcbiAgICAgIDE2OCxcbiAgICAgIDIyNyxcbiAgICAgIDIxLFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNRTERWNFcxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM3NDU5ODE1OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVmFsIPCTg7VcIixcbiAgICBcImxpZFwiOiBcIjMxODQzMzQwNTUwMTQ0OjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xDWXozd1FsdjJWdFFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYWtNRnovZ2lUamlNL3BOc0o3RjVIRGpMdFpBUVhMb1FlbTRmQ1RXMERTRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5UmJueHVmUGk4MEgxNXFCM0RwWXllQy95YnE1K3c1K1NZaHdjSmVSRUFVUHhKVkprMTJCYUdjajBNaWErcEYxT1JYRjM2MHlFMWJ2eHdGWXNrMkpDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUZ01iRnkzSUhzUmFSeGRYRTM2M0s5d0NRMGE5Q3ZIcFdrMFlJK2c4Y3dEazZQSmZ0OFlhSHpRS2sxc2c1anEvektuTlQ3d0FrbFdEK1IxV3p2cC9pUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM3NDU5ODE1OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTIxODgxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm4zXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCbjMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIYUt5UlNpays2WFBabDVQN2U4UTVreHd5ZmhDVTFwbGU0QzJxYUdzejJ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2MTM0NDMwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
