import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="remove func" onClick={
        function(){
          setFuncShow(false);
        }
      }></input>
      <input type="button" value="remove comp" onClick={
        function(){
          setClassShow(false);
        }
      }></input>
      
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}
const funcStyle = 'color:blue';
let funcId = 0;
// Function Style Component
function FuncComp(props){
  const numberState = useState(props.initNumber);
  const number = numberState[0];
  const setNumber = numberState[1];

  // const dateState = useState((new Date()).toString());
  // const _date = dateState[0];
  // const setDate = dateState[1];

  const [_date, setDate] = useState((new Date()).toString());

  useEffect(function(){
    console.log('%cfunc => useEffect (Only componentDidMount) '+(++funcId), funcStyle);
    document.title = number;
    return function(){
    console.log('%cfunc => useEffect return (Only componentDidMount) '+(++funcId), funcStyle);
    }
  }, []);

  useEffect(function(){
    console.log('%cfunc => useEffect number '+(++funcId), funcStyle);
    document.title = number;
    return function(){
    console.log('%cfunc => useEffect number return '+(++funcId), funcStyle);
    }
  }, [number]);

  useEffect(function(){
    console.log('%cfunc => useEffect _date '+(++funcId), funcStyle);
    document.title = _date;
    return function(){
    console.log('%cfunc => useEffect _date return '+(++funcId), funcStyle);
    }
  }, [_date]);

    console.log('%cfunc => render '+(++funcId), funcStyle);
  // useEffect Id값 2씩 상승 시 index.js <React.StrictMode> 편집 필요
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={
          function(){
            setNumber(Math.random());
          }
        }></input>
        <input type="button" value="date" onClick={
          function(){
            setDate((new Date()).toString());
          }
        }></input>
    </div>
  )
}

// Class Style Component
const classStyle = 'color:red'
class ClassComp extends React.Component{
  state = {
    number: this.props.initNumber,
    date:(new Date()).toString()
  }
  componentWillMount(){
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount(){
    console.log('%cclass => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log('%cclass => componentWillUpdate', classStyle);
  }
  componentDidUpdate(nextProps, nextState){
    console.log('%cclass => componentDidUpdate', classStyle);
  }
  componentWillUnmount(nextProps, nextState){
    console.log('%cclass => componentWillUnmount', classStyle);
  }
  render(){
    console.log('%cclass => render', classStyle);
    return(
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Deate : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()})
          }.bind(this)
        }></input>
        <input type="button" value="date" onClick={
          function(){
            this.setState({date:(new Date()).toString()})
          }.bind(this)
        }></input>
      </div>
    )
  }
}

export default App;
