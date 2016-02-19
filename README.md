## Mor Naaman - Homepage
http://mornaaman.com

Clone the project
git clone git@github.com:<GIT URL>

Go into the folder and install the required package
npm install

Compile the source code
gulp

You will get a new folder called dist/ under the same folder with src/

If you want to preview you can run a simple server under dist/, e.g.
python -m SimpleHTTPServer
You can then visit the site at localhost:8000 

Go into the dist folder and upload the files to the server. Usually if you change the data only index.html will be updated. Also if you change any assets you should update the assets/ folder. 

scp index.html USER@SERVER:coursewww/s.tech.cornell.edu/htdocs
scp -r assets USER@SERVER:coursewww/s.tech.cornell.edu/htdocs
