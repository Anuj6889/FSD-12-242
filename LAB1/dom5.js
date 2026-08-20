import { EventEmitter } from "events";

 class DomClass extends EventEmitter {
    addEventListener (eventName , callback){
        this.on(eventName, callback);

    }
    removeEventListener( eventName, callback){
        this.off( eventName, callback);
    }
    dispatchEvent ( eventName, eventData = {}){
        const event = {
            type: eventName,
            timespam: new Date(),
            ...eventData,
        };
        this.emit(eventName, event);
    }

 }
 const button = new DomClass();
 const handClick = (event) => {
   console.log (`Button clicked type: ${event.type} at ${event.timespam}`);
 };

 button.addEventListener("click", handClick);
 button.dispatchEvent("click", {
    target: "submitBtn",

 })
 button.removeEventListener("click", handClick);
 button.dispatchEvent("click", {
    target: "resetBtn",

 })