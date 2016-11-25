import React from 'react';



class App extends React.Component {

  constructor(){
    super(); // gives context of this within our component
    this.state ={
      txt:'This is from state',
      cat: 0
    }
  }
  update(e){
    this.setState({
      txt: e.target.value
    })
  }
  render(){
    let txt= this.state.txt

    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} ref=""/>
        <h2>{txt}</h2>
      </div>
    )
  }
}

// App.propTypes={
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

App.defaultProps ={
  txt: 'Hi This is from defaut props'
}
// const App= () => <h1>Hello Eggheads</h1>

export default App
