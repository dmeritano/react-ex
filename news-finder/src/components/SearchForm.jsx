import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material"
import { CATEGORIES } from "../data"
import useNews from "../hooks/useNews"

const SearchForm = () => {
    
    const { category, handleChangeCategory } = useNews()

    return (
        <form>
        <FormControl fullWidth>
            <InputLabel>Categories</InputLabel>
            <Select 
                label='Category' 
                value={category}
                onChange={handleChangeCategory}
            >
            {CATEGORIES.map((cat) => (
                <MenuItem key={cat.value} value={cat.value}>
                {cat.label}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        </form>
    )
}

export default SearchForm
