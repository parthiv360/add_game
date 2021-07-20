function App(){

    const [state, setState]= React.useState({
       num1 : Math.ceil(Math.random()*10),
       num2 : Math.ceil(Math.random()*10),
       response: "",
       score: 0,
       incorrect: false
    });

    function updateResponse(event){
        setState({
            ...state,
            response : event.target.value
        });
    }
    function inputKeyPress(event){
        if( event.key === "Enter"){
            const ans= parseInt(state.response);
            if(state.num1+ state.num2 === ans){
                setState({
                    ...state,
                    num1: Math.ceil(Math.random()*10),
                    num2: Math.ceil(Math.random()*10),
                    score: state.score+1,
                    response: "",
                    incorrect: false
                });
            }
            else{
                setState({
                    ...state,
                    score: state.score-1,
                    response: "",
                    incorrect: true
                });
            }
        }
    }

    if(state.score === 10){
        return(
            <div id="final">
                You Won!!!
                </div>
        );
    }
    return(
        <div>
        <div className={state.incorrect ? "incorrect": ""} id="problem">{state.num1}+{state.num2}</div>
        <input autoFocus={true} onKeyPress= {inputKeyPress} onChange= {updateResponse} value={state.response} />
        
        <div>Score is: {state.score}</div>
        </div>
    );
}
ReactDOM.render(<App />,document.querySelector("#app"));