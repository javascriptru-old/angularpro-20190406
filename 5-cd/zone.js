
const oldSetTimeout = setTimeout;
setTimeout = (callback, timer) => {
    console.log('START!');
    oldSetTimeout(() => {
        callback()
        console.log('DONE!');
    }, timer);
}

//----------


setTimeout(_ => {
    console.log('FINISH!');
}, 3000);