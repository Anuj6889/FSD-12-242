# EventLoop

 JS is synchronuous  and single threaded bydefault 
 ## There can be async behaviour
 -- with BrowerAPI --setTime, setInterval, setImmediate, nextTick

 --with promise

 --with event handlers

 --a function is not excuted immediatly but it must be excuted by run, it have some status
 at minor it may reslove 
## Call back
 --Call back function => that pass as argument or the paramenter to another function

 ## modern js is divided into 2  catogories 
 -- 1. common js ( .cjs) -> support oops -> require
       - priority ( nexTick, promise , setimmediate/setTimeout)
 -- 2. module js ( .mjs) -> follow modular approach -> import
       - priority (promise ,nextick ,setimmediate/setTimeout)

## FS MODEULE
-- it is directly communicate with operation on a file of folder are 
1. File -> rightFile , abndfile , readfile
2. Folder -> md
3. File metadat
   -> sht
   ->lsht
   ->rsht
4. watch -> watch 
5. stream

## CRUD PROJECT

assume we are making a cart related project 
1. user can addany project (id ,name , price ,qty ) into cart 
2. user can see all the items of cart 
3.  user can remove item from cart 
4. user can also updates