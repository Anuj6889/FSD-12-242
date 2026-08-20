import {EventEmitter } from "events";


 const form = new EventEmitter ();


 form.on("Submit", (uname, password) => {
    console.log( `form submitted`);
    console.log(`user name: ${uname}`);
    console.log( `user password: ${password}`);
 })

 
 form.emit("submit", "abc@abc.com", "2783299")