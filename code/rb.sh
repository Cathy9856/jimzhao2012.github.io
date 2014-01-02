
#!/bin/sh

rm bridge.js.zip; 
tar -cvzf bridge.js.zip bridge.js; 
minjs bridge.js bridge.min.js; 
tar -cvzf bridge.min.zip  bridge.min.js;
cp bridge.js demo/bridge.js;
rm demo.zip;
tar -cvzf demo.zip demo;
rm -rf tb;
mkdir tb;
cp bridge.js tb;
cd tb;
rm -rf ../../api;
yuidoc . -o ../../api;
cd ..;
rm -rf tb;
cd ..;
git add --all;
git commit -m "modify js lib";
git push;