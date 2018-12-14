class App extends React.Component {
    constructor(props) {
        super(props);
    this.handleQ = this.handleQ.bind(this);
    this.handleW = this.handleW.bind(this);
    this.handleE = this.handleE.bind(this);
    this.handleA = this.handleA.bind(this);
    this.handleS = this.handleS.bind(this);
    this.handleD = this.handleD.bind(this);
    this.handleZ = this.handleZ.bind(this);
    this.handleX = this.handleX.bind(this);
    this.handleC = this.handleC.bind(this);
    this.keyboard = this.keyboard.bind(this);
    }
    

    handleQ() {
        document.getElementById('Q').play();    
    } 
    handleW() {
        document.getElementById('W').play();    
    } 
    handleE() {
        document.getElementById('E').play();    
    } 
    handleA() {
        document.getElementById('A').play();    
    } 
    handleS() {
        document.getElementById('S').play();    
    } 
    handleD() {
        document.getElementById('D').play();    
    } 
    handleZ() {
        document.getElementById('Z').play();    
    }
    handleX() {
        document.getElementById('X').play();    
    } 
    handleC() {
        document.getElementById('C').play();    
    } 
    
    keyboard(ev) {
        if (ev.keyCode === 81) {
            this.handleQ();
        } else if (ev.keyCode === 87) {
            this.handleW();
        }
        
        switch(ev.keyCode) {
            case 81:
                this.handleQ();
                break;
            case 87:
                this.handleW();
                break;
            case 69:
                this.handleE();
                break;
            case 65:
                this.handleA();
                break;
            case 83:
                this.handleS();
                break;
            case 68:
                this.handleD();
                break;
            case 90:
                this.handleZ();
                break;
            case 88:
                this.handleX();
                break;
            case 67:
                this.handleC();
                break;
        }
    }
    
    componentDidMount() {
        document.addEventListener("keydown", this.keyboard);
    }
    
    
    render() {
        return (
            <div id="drum-machine">
                Helllllooo
                <div id="display">
                    <div className="drum-pad" id="Heater-1" onClick={this.handleQ}>Q
                        <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-2" onClick={this.handleW}>W
                        <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-3" onClick={this.handleE}>E
                        <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-4" onClick={this.handleA}>A
                        <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-5" onClick={this.handleS}>S
                        <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-6" onClick={this.handleD}>D
                        <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-7" onClick={this.handleZ}>Z
                        <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-8" onClick={this.handleX}>X
                        <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-9" onClick={this.handleC}>C
                        <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));