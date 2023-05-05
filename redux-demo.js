const redux=require("redux");

const counterGainer=(state ={counter :0} ,action) =>{
    if(action.type === "increment"){
        return {
            counter:state.counter +2,
        };
    }

    if(action.type === "decrement"){
        return {
            counter:state.counter - 2,
        };
    }
    return state;
}

const store=redux.createStore(counterGainer);

const counterSubscriber =()=>{
    const latestState=store.getState();
    console.log(latestState);
}

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});