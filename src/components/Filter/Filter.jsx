export const Filter = ({value, setValue}) => {
    return (
        <label>  
            <input type="text" name="filter" onChange={setValue} value={value} />
        </label>
    ) 
} 