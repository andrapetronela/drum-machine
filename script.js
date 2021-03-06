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
        display.textContent = 'heater-1';
    } 
    handleW() {
        document.getElementById('W').play();
        display.textContent = 'heater-2';
    } 
    handleE() {
        document.getElementById('E').play(); 
        display.textContent = 'heater-3';
    } 
    handleA() {
        document.getElementById('A').play();
        display.textContent = 'heater-4';
    } 
    handleS() {
        document.getElementById('S').play();
        display.textContent = 'heater-5';
    } 
    handleD() {
        document.getElementById('D').play(); 
        display.textContent = 'heater-6';
    } 
    handleZ() {
        document.getElementById('Z').play(); 
        display.textContent = 'heater-7';
    }
    handleX() {
        document.getElementById('X').play();
        display.textContent = 'heater-8';
    } 
    handleC() {
        document.getElementById('C').play();
        display.textContent = 'heater-9';
    } 
    
    keyboard(ev) {        
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
        const display = document.getElementById('display-text');
    }
        
    render() {
        return (
            <div id="wrapper">
                <div id="drum-machine">
                    <div className="drum-pad" id="Heater-1" onClick={this.handleQ}>Q
                        <audio className="clip" id="Q" src="q.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-2" onClick={this.handleW}>W
                        <audio className="clip" id="W" src="w.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-3" onClick={this.handleE}>E
                        <audio className="clip" id="E" src="e.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-4" onClick={this.handleA}>A
                        <audio className="clip" id="A" src="a.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-5" onClick={this.handleS}>S
                        <audio className="clip" id="S" src="s.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-6" onClick={this.handleD}>D
                        <audio className="clip" id="D" src="d.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-7" onClick={this.handleZ}>Z
                        <audio className="clip" id="Z" src="z.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-8" onClick={this.handleX}>X
                        <audio className="clip" id="X" src="x.mp3" type="audio/mp3" />
                    </div>
                    <div className="drum-pad" id="Heater-9" onClick={this.handleC}>C
                        <audio className="clip" id="C" src="c.mp3" type="audio/mp3" />
                    </div>
                <div id="display">
                    <p id="display-text"></p>
                </div>
            </div>
            <p id="song-link">Full song can be found <a href="https://www.youtube.com/watch?v=mfJhMfOPWdE" target="_blank"> here</a>.</p>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));