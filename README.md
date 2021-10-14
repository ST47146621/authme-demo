# Authme demo


## 1. in angular.json configurations
### set pageA and pageB configurations
![](https://i.imgur.com/gsJ3SLF.jpg)

## 2. add pageA and pageB routing
![](https://i.imgur.com/y6Ns0Ki.jpg)
### app-routing have two pages routing.  
### app-routing-pageA only have pageA's routing.  
### app-routing-pageB only have pageB's routing.

## 3. in package.json scripts
### add build:pageA and build:pageB scripts
![](https://i.imgur.com/CSvYEhN.jpg)

## Let's start build!!
### default build
default build: **npm run build**  
Lazy Chunk Files have two js files.  

![](https://i.imgur.com/yDWysZR.jpg)

### only page a
build only page a: **npm run build:pageA**  
Lazy Chunk Files only have page a js. 

![](https://i.imgur.com/3FmhAfZ.jpg)

### only page b
build only page b: **npm run build:pageB**  
Lazy Chunk Files only have page b js. 

![](https://i.imgur.com/zQrieXK.jpg)
