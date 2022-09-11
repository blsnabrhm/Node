const EventEmitter=require('events')
const customEmitter=new EventEmitter()

// on - listen for events
// emit - emit an event


customEmitter.on(`response`,(name, id)=>{    // response is the name of the event
    console.log(`data received with user ${name} and id ${id}`)
})

customEmitter.on(`response`,()=>{
    console.log(`event emitter second response`);
})

customEmitter.emit(`response`,'sanji',777)