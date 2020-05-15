import React from 'react';

import { useStyles } from './styles';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const top100Films: any[] = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 }
];

export const Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <form className={classes.form} noValidate autoComplete="off">
        <div className={classes.textFieldWrapper}>
          <TextField
            id="search-field"
            variant="outlined"
            defaultValue=""
            helperText="" // Goes underneath
            placeholder="E.g. Elst-Pizarro"
            label="SBN Search"
            fullWidth
            InputLabelProps={{ shrink: true }} // Forces label to be already shifted upwards
            style={{ margin: 0 }}
          />
        </div>

        <div className={classes.textFieldWrapper}>
          <Autocomplete
            id="combo-box-demo"
            freeSolo
            options={top100Films}
            getOptionLabel={(option: typeof top100Films[number]) => option.title}
            style={{ width: 300 }}
            renderInput={(params: any) => (
              <TextField //
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
