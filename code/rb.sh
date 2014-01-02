
#!/bin/sh

rm bridge.js.zip; 
tar -cvzf bridge.js.zip bridge.js; 
minjs bridge.js bridge.min.js; 
tar -cvzf bridge.min.zip  bridge.min.js;
cp bridge.js demo/bridge.js;
rm demo.zip;
tar -cvzf demo.zip demo;

