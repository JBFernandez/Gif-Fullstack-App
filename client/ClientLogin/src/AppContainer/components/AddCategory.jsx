import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( (categories) => {
                return [inputValue, ...categories]
            } )
        }
    }

  return (
    <form onSubmit={ handleSubmit }> {/*form would be the grouping element, we dont need the fragment */}
            <p> { inputValue } </p>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange } //e is the event
            /> {/* input */}
    </form>
  )
}
