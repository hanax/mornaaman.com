## Mor Naaman - Homepage
http://mornaaman.com

### Installation: 

##### Clone the project
```
git clone git@github.com:\<GIT URL\>
```
or 
```
git clone https://github.com/sTechLab/mornaaman.com.git
```

##### Go into the folder and install the required package

```
npm install
sudo npm install -g gulp
```
### Update/compile

##### Pull the project
```
git pull https://github.com/sTechLab/mornaaman.com.git
```

##### Compile the source code

```
gulp
```

##### Update files on server

The compiled files are under the dist/ folder.

To preview run a simple server under dist/, e.g.
```
python -m SimpleHTTPServer
```
(view at localhost:8000 )

Go into the dist folder and upload updated files to the server, e.g.

```
scp index.html USER@SERVER:coursewww/mor/htdocs
scp main.js USER@SERVER:coursewww/mor/htdocs
scp -r assets USER@SERVER:coursewww/mor/htdocs
```

