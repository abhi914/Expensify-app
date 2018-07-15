class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    };

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };            
        });
    };


    render() {
        return (
        <div>            
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {
                    this.state.visibility ? 'Hide details' : 'show details'
                }
            </button>
            <p>
              {
               this.state.visibility ? "This is some text" : " "
              }
            </p>
        </div>

        );
    };
};


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));




// const appRoot = document.getElementById('app');

// let visibility = false;


// const onToggleDetails = () => {
//     visibility = !visibility;
//     render() ;
// }


// const render = () => {

//     const template = (
        // <div>
    
        //     <h1>Visibility Toggle</h1>
        //     <button onClick={onToggleDetails}>
        //     {
        //         visibility ? 'Hide details' : 'show details'
        //     }
        //     </button>
        //     <p>
        //     {
        //       visibility ? "This is some text" : " "
        //     }
        //     </p>
        //     </div>
//     );

//     ReactDOM.render(template,appRoot);

// }

// render();

