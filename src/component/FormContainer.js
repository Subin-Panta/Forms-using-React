import React from 'react'
import FormComponent from './FormComponent'
class FormContainer extends React.Component{
constructor(){
  super()
  this.state={
    firstName: "",
    lastName: "",
    age: "",
    gender : "",
    location: "",
    diet : {
      isVegan :false,
      isLactose: false,
      eatsFish : false,
    }
  }
  this.handleChange=this.handleChange.bind(this)
}
handleChange(event) {
const {name , value,type, checked} = event.target
  type==="checkbox"? this.setState(prevState => {
    return{
      diet : {
        ...prevState.diet,  
        [name] : checked
      }
    }
  }):this.setState({
    [name] : value

})
}
render() {
  return(
 <FormComponent handleChange={this.handleChange}
 {...this.state}
 />
  )
}
}
export default FormContainer