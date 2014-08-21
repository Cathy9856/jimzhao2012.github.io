
#!/bin/sh

rm bridge.js.zip; 
zip bridge.js.zip bridge.js; 
minjs bridge.js bridge.min.js; 
rm bridge.min.zip;
zip bridge.min.zip  bridge.min.js;
cp bridge.js demo/bridge.js;
rm demo.zip;
zip -r demo.zip demo;
rm -rf tb;
mkdir tb;
cp bridge.js tb;
cp geo.js tb;
cd tb;
rm -rf ../../api;
yuidoc --themedir ../yui_theme -o ../../api .;
cd ..;
rm -rf tb;
cd ..;
git add --all;
git commit -m "modify js lib";
git push;
