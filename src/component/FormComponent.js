4cqximport React from 'react'
function FormComponent (props){
    return(
        <main>
          <form>
            <input type="text" placeholder="First Name" name="firstName" value={props.firstName} onChange={props.handleChange}/><br/><br/>
            <input type="text" placeholder="Last Name" name="lastName" value={props.lastName} onChange={props.handleChange}/><br/><br/>
            <input type="number" placeholder="age" name="age" value={props.age} onChange={props.handleChange}/><br/><br/>
            <label><input type="radio" name="gender" value="male" onChange={props.handleChange} checked={props.gender==="male"}/>Male</label><br/><br/>
            <label><input type="radio" name="gender" value="female" onChange={props.handleChange} checked={props.gender==="female"}/>FeMale</label><br/><br/>
            <select name="location" onChange={props.handleChange}><label>Destinations:</label>
            <option value=""> --Please select a Destination--</option>
            <option value="canada"> Canada</option>
            <option value="london">London</option>
            <option value="nepal">Nepal</option>
            </select>
            <label><input type="checkbox" name="isVegan" checked={props.diet.isVegan} onChange={props.handleChange}/>Isvegan?</label>
            <label><input type="checkbox" name="isLactose" checked={props.diet.isLactose} onChange={props.handleChange} />Lactose Intoreant?</label>
            <label><input type="checkbox" name="eatsFish" checked={props.diet.eatsFish} onChange={props.handleChange}/>eats fish?</label>
          </form>
      <h1> your name is {props.firstName} {props.lastName} you are {props.age} years old and you are a {props.gender} and you would like to got to {props.location}
      <br/>
      eats fish : {props.diet.eatsFish? "yes": "no"}
      <br/>
      Is vegan : {props.diet.isVegan? "yes": "no"}
      <br/>
      Is Lactose Intoreant : {props.diet.isLactosed5gfvt890/\;i?/+ "yes": "no"}
      </h1>
        </main>
        )
}
export default FormComponent