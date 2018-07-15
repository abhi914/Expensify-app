console.log(`app.js is enabled`);

const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision Application',
    subtitle: 'Put your life in the hands of a Computer',
    options: ['One','Two']
};

const onMakeDecision = () => {
    const randomNum = Math.round(Math.random() * (app.options.length -1));
    const option = app.options[randomNum] ;
    alert(option);

    console.log(randomNum);
}


const onFormSubmit = (e) => {
    e.preventDefault();

    console.log('Form Submitted');
    
    let option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = " ";
        renderIndecisionApp()
    }
};

const onRemoveAll = () => {
    if(app.options.length > 0) {
        app.options.length = 0;
        renderIndecisionApp();
    }
}

  

const renderIndecisionApp = () => {

    let template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length>0? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}> What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li> )
            } 
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Options</button>
    
            </form> 
        </div>
    );
    
    ReactDOM.render(template,appRoot); 
}


renderIndecisionApp();




