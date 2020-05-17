import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

import { useStyles } from './styles';
import { fetchNameMatches } from '../../Redux/Thunks/fetchNameMatches';
import { selectSearchResultsNameMatches } from '../../Redux/Selectors/search-results-selectors';
import { INameMatch, SearchResultsSelectObject } from '../../Redux/Actions/search-results-actions';

export const Search = () => {
  // State-ful params
  const dispatch = useDispatch();
  const classes = useStyles();
  const nameMatches = useSelector(selectSearchResultsNameMatches);
  const [typedText, setTypedText] = useState('');
  const [isNameMatched, setIsNameMatched] = useState(false);
  const helperText = isNameMatched ? '✓ Name Matched' : !!typedText.length ? 'No Match' : '';
  const lengthOfLongestName = lengthOfLongestNameMatch(nameMatches);

  // Effects
  useEffect(() => {
    dispatch(fetchNameMatches(typedText));
  }, [typedText, dispatch]);

  useEffect(() => {
    let nameMatch: INameMatch | undefined;
    if (!!typedText) {
      nameMatches.forEach((el) => {
        if (typedText.includes(el.name)) nameMatch = el;
      });
    }
    setIsNameMatched(!!nameMatch);
    dispatch(new SearchResultsSelectObject(nameMatch));
  }, [nameMatches, typedText, dispatch]);

  // Callbacks
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedText(event.target.value);
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} noValidate autoComplete="off">
        <div
          className={
            classes.textFieldWrapper +
            ' ' +
            (isNameMatched ? classes.highlightedTextFieldWrapper : '')
          }
        >
          <Autocomplete
            id="combo-box-demo"
            onSelect={handleTextChange}
            freeSolo
            options={nameMatches}
            getOptionLabel={(nameMatch) => {
              return nameMatch.name;
            }}
            renderOption={(nameMatch) => (
              <span className={classes.option}>
                {formatNameMatchOption(nameMatch, lengthOfLongestName)}
              </span>
            )}
            style={{ width: 300, margin: 0 }}
            renderInput={(params: any) => (
              <TextField //
                onChange={handleTextChange}
                {...params}
                id="search-field"
                variant="outlined"
                helperText={helperText}
                placeholder="E.g. Elst-Pizarro"
                label="SBN Search"
                fullWidth
                InputLabelProps={{ shrink: true }} // Forces label to be already shifted upwards
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};

/**
 * Find length of longest string in array of strings
 */
function lengthOfLongestNameMatch(input: INameMatch[]) {
  return input
    .map((el) => el.name.length)
    .reduce((acc, el) => {
      return Math.max(acc, el);
    }, 0);
}

/**
 * Returns string of white spaces to add to input text to make total length equal the totalLength argument
 */
function whiteSpaceBuffer(input: string, totalLength: number) {
  const wSpaces = totalLength - input.length;
  const result = ' '.repeat(wSpaces > 0 ? wSpaces : 0);
  return result;
}

/**
 * Maps INameMatch item to form: "Name    | Type"
 */
function formatNameMatchOption(nameMatch: INameMatch, lengthOfLongestName: number) {
  const namePart = nameMatch.name + whiteSpaceBuffer(nameMatch.name, lengthOfLongestName);
  const typePart = nameMatch.type[0].toUpperCase() + nameMatch.type.substring(1);
  return `${namePart} | ${typePart}`;
}
