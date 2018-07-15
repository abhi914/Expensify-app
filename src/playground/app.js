class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        
        this.state = {
            title: "Indecision Application",
            subtitle: "Put your life in the hands of the Computer",
            options:  []
        };
    }

    componentWillMount() {
        // console.log('Componenent Rendered');

        try {
            const options = this.state.options;
            const json = localStorage.getItem('options');
            
            if(options) {
                const option = JSON.parse(json);
                this.setState(() => ({options: option}));
            }
        }
        catch(e) {
            
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('Component Updated');
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options) ;
            localStorage.setItem('options',json);
        }
        
    }

    // componentWillUnmount() {
    //     console.log(`component Removed`);

    // }

    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    };

    handleDeleteOption(optionToRemove) {
        // console.log(`HDO: ${optionToRemove}`);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )

        }))
    } 
    
    handlePick() {
        const randomNum = Math.round(Math.random() * (this.state.options.length -1));
        const option = this.state.options[randomNum] ;
        alert(option);
    };

    handleAddOption(option) {
        if(!option){
            return  `Enter Valid string`;
        }
        else if(this.state.options.indexOf(option) > -1) {
            return `this option already exist` ;
        }
        else {
            this.setState((prevState) => ({options: prevState.options.concat([option])}));
        }
        
    };



    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle}/>
                <Action
                  hasOptions = {this.state.options.length <= 0}
                  handlePick = {this.handlePick}
                />
                <Options
                     options={this.state.options}
                     handleDeleteOptions={this.handleDeleteOptions}
                     handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}
// Child Component and siblings of eachOther
const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}


// class Header extends React.Component {
//     render() {
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Options = (props) => {
        return (
            <div>
              <button onClick={props.handleDeleteOptions}>Remove All</button>
              {props.options.length === 0 && <p>Please get an option to get Started</p>}
                {props.options.map((option) => 
                    <Option
                         key={option}
                         option={option}
                         handleDeleteOption={props.handleDeleteOption}
                    />
                )}
            </div>
        );
}

// class Options extends React.Component {
   
//     render() {
//         return (
//             <div>
//               <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {this.props.options.map((option) => <Option key={option} option={option}/>)}
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    } 

    handleAddOption(e) { 
        e.preventDefault() ;
        const option =  e.target.elements.option.value.trim() ;
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({error}));

        if(!error) {
            e.target.elements.option.value = "";
        }
        
    } 
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.handleAddOption}>
                    <input type="text" name="option" />
                    <button type="submit">Add Option</button>
                    </form>
            </div>
        );
    }
}

const Action = (props) => {
    return (
        <div>
            <button
             onClick={props.handlePick}
             disabled ={props.hasOptions}
            >
             What should I do?
            
            </button>
        </div>
    );
}

// class Action extends React.Component {
    
//     render() {
//         return (
//             <div>
//                 <button
//                  onClick={this.props.handlePick}
//                  disabled ={this.props.hasOptions}
//                 >
//                  What should I do?
                
//                 </button>
//             </div>
//         );
//     }
// }

//child Component of Options

const Option = (props) => {
    return (
        <div>
            <p >{props.option} <button onClick={() => props.handleDeleteOption(props.option)}>Remove</button></p>
        </div>
    );
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p >{this.props.option} </p>
                
//             </div>
//         )
//     }
// }



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));