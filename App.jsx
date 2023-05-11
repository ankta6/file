import { useRef, useState } from "react";
import "./App.css";
import FormInput from "./component/FormInput";

function App() {
  const [values,setValues] = useState({
    userName  : "",
    Email  : "",
    password  : "",
    confirmPassword  : "",
  });
 const input =[
  {
    id:1,
    name:"userName",
    type:"text",
    placeholder:"UserName",
    errorMessage:"Username should include special character and shouldn't include special character",
    label : "Username",
    require : true,
    pattern: "^[A-Za-z0-9]{3,16}$",

  },
  {
    id:2,
    name:"Email",
    type:"Email",
    placeholder:"Email",
    errorMessage:"Should be include valid email",
    label : "Email",
    require : true,
    pattern: "/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/",

  },
  {
    id:3,
    name:"birthday",
    type:"Date",
    placeholder:"birthday",
    errorMessage:"please write correct birthdate not valid",
    label : "birthday",
    require : true,
    pattern: "Anku",


  },
  {
    id:4,
    name:"Password",
    type:"Password",
    placeholder:"Password",
    errorMessage:"password is not correct",
    label : "Password",
    require : true,
    pattern: "Anku",

  },
  {
    id:5,
    name:"confirmPassword",
    type:"Password",
    placeholder:"confirm Password",
    errorMessage:" password are not same ",
    label : "confirm Password",
    require : true,
    pattern: values.password,

  },
 ]
  function handleClick(e) {
    e.preventDefault();
  }
  const onChange = (e)=>{
    setValues({...values,[e.target.name] :e.target.value })
  }
  console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleClick}>
    <h1>Register</h1>
        {input.map((input)=>(<FormInput key={input.id} {...input}  value ={values[input.name]} onChange={onChange}/>))}
        
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
