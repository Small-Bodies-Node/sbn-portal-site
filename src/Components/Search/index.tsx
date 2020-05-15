import React from 'react';

import { useStyles } from './styles';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch } from 'react-redux';
import { fetchNameMatches } from '../../Redux/Thunks/fetchNameMatches';

const top100Films: any[] = [
  //
];

export const Search = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event', event.target.value);
    const inputText = event.target.value;
    dispatch(fetchNameMatches(inputText));
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} noValidate autoComplete="off">
        <div className={classes.textFieldWrapper}>
          <Autocomplete
            id="combo-box-demo"
            freeSolo
            options={top100Films}
            getOptionLabel={(option: typeof top100Films[number]) => option.title}
            style={{ width: 300 }}
            renderInput={(params: any) => (
              <TextField //
                onChange={handleTextChange}
                {...params}
                id="search-field"
                variant="outlined"
                helperText="" // Goes underneath
                placeholder="E.g. Elst-Pizarro"
                label="SBN Search"
                fullWidth
                InputLabelProps={{ shrink: true }} // Forces label to be already shifted upwards
                style={{ margin: 0 }}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};
