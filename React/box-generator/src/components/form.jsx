import React from 'react'

const Form = props => {

    const submitBox = e =>{
        e.preventDefault();
        console.log(e)
        let colorBox = document.getElementById("colorInput")
        props.onNewBox(colorBox.value, document.getElementById("size").value)
        colorBox.value = ""
    }
    return (
        <form onSubmit = {submitBox}>
            <label htmlFor="colorInput">Color</label>
            <input type="text" name="colorInput" id="colorInput" />
            <input type="number" min="1" name="size" id="size"/>
            <input type="submit" value="Add" />
        </form>    
    )
}






export default Form;