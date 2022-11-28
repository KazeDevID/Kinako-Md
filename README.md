
## CATATAN
Dimohon untuk menambahkan kredits di bawah yah makasih
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)
<p align="center">
    <img src="https://i.ibb.co/PxSxQhd/20221103-171638.jpg" width="100%" style="margin-left: auto;margin-right: auto;display: block;">
</p>
<h1 align="center">Kinako-Md</h1>

<p align="center">
 <a href="#"><img title="KINAKO-MD" src="https://img.shields.io/badge/-KINAKO-MD-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/KazeDevID"><img title="Author" src="https://img.shields.io/badge/AUTHOR-KAZE-green?style=for-the-badge&logo=github"></a>
    
---------
## ```Connect With Me 📞``` <img src="https://github.com/siegrin/siegrin/blob/main/Assets/Handshake.gif" height="32px">
  <a href="https://wa.me/6282217590187">
    <img align="left" alt="SIEGRIN | Whastapp" width="26px" src="https://github.com/siegrin/siegrin/blob/main/Assets/Whatsapp.svg" />
  </a> &nbsp;&nbsp;
  <a href="https://www.instagram.com/lordagam23_/">
    <img align="left" alt="SIEGRIN | Instagram" width="24px" src="https://github.com/siegrin/siegrin/blob/main/Assets/Instagram.svg" />
  </a> &nbsp;&nbsp;
  <a href="https://www.youtube.com/@KazeDevID">
    <img align="left" alt="SIEGRIN | YouTube" width="26px" src="https://github.com/siegrin/siegrin/blob/main/Assets/Youtube.svg" />
  </a> &nbsp;&nbsp;
---------


#### a little about this bot
- [x] **Fast Respon** 
- [x] **Simple** 
- [x] **Multi Device**  
- [x] **No Apikey**
- [x] **No Enc**
- [x] **Work All Fiture**
---------
#### Some of the features include
- [x] Downloader 
- [x] Internet 
- [x] Game Rpg 
- [x] Nsfw 
- [x] Sticker 
- [x] Game 
- [x] Kerang Ajaib 
- [x] Quotes 
- [x] Anime 
- [x] Premium 
- [x] Tools 
- [x] Send Virtex 
- [x] Send Bug
- [x] 18+
- [x] React 
---------

## `SETTING`

- SETTING ALL [Here](https://github.com/KazeDevID/Kinako-Md/blob/master/config.js#L1)
---------

## ```Heroku Buildpack```
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/)

| BuildPack | LINK |
|--------|--------|
| **FFMPEG** |[here](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git) |
| **IMAGEMAGICK** | [here](https://github.com/mcollina/heroku-buildpack-imagemagick.git) |

## TERMUX USER
```bash
$ pkg upgrade && pkg update
$ pkg install git -y
$ pkg install nodejs -y
$ pkg install ffmpeg -y
$ pkg install imagemagick -y
$ git clone https://github.com/KazeDevID/Kinako-Md
$ cd Kinako-Md 
$ pkg install yarn
$ yarn install
$ node .
```
---------

## TERMUX WITH UBUNTU

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALLING REQUIRED PACKAGES ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALLING NODEJS & Kinako-Md]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/KazeDevID/Kinako-Md
cd Kinako-Md
npm install
npm update
```

---------

## FOR WINDOWS/VPS/RDP USER 💻

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/KazeDevID/Kinako-Md
cd Kinako-Md
npm install
npm update
```

---------

## Run 🏃

```bash
node .
```

---------

## ```Arguments node . [--options] [<session name>]```

## `--self`
* Activate self mode (Ignores other)

## `--pconly`
* If that chat not from private bot, bot will ignore

## `--gconly`
* If that chat not from group, bot will ignore

## `--swonly`
* If that chat not from status, bot will ignore

## `--prefix <prefixes>`
* `prefixes` are seperated by each character
Set prefix

## `--server`
* Used for [heroku](https://heroku.com/) or scan through website

## `--restrict`
* Enables restricted plugins (which can lead your number to be **banned** if used too often)
* Group Administration `add, kick`

## `--img`
* Enable image inspector through terminal

## `--autoread`
* If enabled, all incoming messages will be marked as read

## `--nyimak`
* No bot, just print received messages and add users to database

## `--test`
* **Development** Testing Mode

---------

## ```How To Customize Message Display```
```js
// Syntax
conn.sendButton(
      jid, // jid of the user to send the message to
      text, // text to send
      foooter, // footer to send
      buffer, // buffer to send (optional), if you want to send button image, location, etc
      buttons, // buttons to send, example [['text1', 'id1'], ['text2', 'id2']]
      quoted, // quoted message to send (optional)
      options // options to send, example { asLocation: true }
)

// example 
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', null, [
      ['Hello', 'hello'], ['Bye', 'bye']
])
// example button location
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', 'https://github.com/BochilGaming', 
      [['Hello', 'hello'], ['Bye', 'bye']], 
      null, { asLocation: true }
)
```
---------

### 📮 S&K
1. Jangan Di Jual
2. Jangan lupa beri bintang repo ini
3. Follow Github
4. Jangan salah gunakan repositori ini!
5. Jika Anda memiliki masalah, hubungi saya di nomor pemilik
6. Jan hapus credits

---------

## ```Thanks to ✨```
* [`BochilGaming`](https://github.com/bochilgaming)
* [`ImYanXiao`](https://github.com/ImYanXiao)
* [`KannaChann`](https://github.com/kannachann) 
* [`The.Sad.Boy01`](https://github.com/Kangsad01) 
* [`Papah-Chan`](https://github.com/FahriAdison) 

## ```Recode By ✏️```
## `KazeDevID`
[![KazeDevID](https://github.com/KazeDevID.png?size=70)](https://github.com/KazeDevID)
