import styles from "./Filters.module.scss"
import useFilter from "./hooks/useFilter";
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const CustomTextField = styled(TextField)({
    '& input':{
        color: 'white',
    },
    '& label': {
      color: 'white',
     
    },
    '& label.Mui-focused': {
        color: '#f2f2f2',
    },
    '& button': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        color: 'white',
      '& fieldset': {
        borderColor: '#f2f2f2'
      },
      '&:hover fieldset': {
        borderColor: '#f2f2f2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f2f2f2',
      },
    },
  });

export const Filters = () => {
    const {  
        type,
        search,
        TYPES,
        handleSearch,
        handleType,
        onSearch
    } = useFilter();
   
  return (
    <div className={styles.container}>
        <CustomTextField size="small" select value={type} onChange={handleType} label="Types">
                <MenuItem key={'0999'} value={'default'} disabled>
                    Select a type
                </MenuItem>
            {TYPES.map((option, index) => (
                <MenuItem key={index} value={option}>
                    {option.toUpperCase()}
                </MenuItem>
            ))}
        </CustomTextField>
        <div>
            <CustomTextField 
                size="small" 
                value={search} 
                onChange={handleSearch} 
                label="Pokemon"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton color="primary" aria-label="upload picture" component="label" onClick={onSearch}>
                                <SearchIcon />
                            </IconButton>  
                        </InputAdornment>
                    )
                }}
            />
        </div>
    </div>
  )
}
