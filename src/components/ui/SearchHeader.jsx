import React, { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import '../../stylesheets/search.css';
import { Link } from 'react-router-dom';
import {
  InputGroup,
  InputRightElement,
  Input,
  Box,
  Text,
} from '@chakra-ui/core';
import { SearchIcon } from '@chakra-ui/icons';

import { getPlace } from '../../actions/wisata';

const SearchHeader = ({ getPlace, wisata: { places } }) => {
  const getSuggestion = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = value.length;
    const res =
      inputLength === 0
        ? []
        : places.filter(
            place =>
              place.name_place.toLowerCase().slice(0, inputLength) ===
              inputValue
          );
    return res;
  };

  const getSuggestionValue = suggestion =>
    `${suggestion.name_place}, ${suggestion.provinsi}`;

  const renderSuggestion = suggestion => {
    return (
      <Box>
        <Link to={`/place/${suggestion.slug}`}>{suggestion.name_place}</Link>
      </Box>
    );
  };

  const renderSuggestionContainer = ({ containerProps, children, query }) => (
    <div {...containerProps}>{children}</div>
  );

  const [value, setValue] = useState('');
  const [suggestion, setSuggestion] = useState([]);

  const onChange = (e, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionRequested = ({ value }) => {
    console.log({ value });
    const data = getSuggestion(value);
    console.log(data);
    setSuggestion(data);
  };

  const onSuggestionClearRequested = () => {
    setSuggestion([]);
  };

  const inputProps = {
    placeholder: 'Cari tempat',
    type: 'search',
    value,
    onChange: onChange,
  };

  const loadData = useCallback(() => {
    if (places.length === 0) {
      getPlace();
    }
  }, [getPlace, places.length]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const renderInputComponent = inputProps => (
    <InputGroup>
      <InputRightElement
        pointerEvents="none"
        children={<SearchIcon color="blue.300" />}
      />
      <Input
        {...inputProps}
        type="phone"
        placeholder="Cari tempat"
        fontSize="16px"
      />
    </InputGroup>
  );

  return (
    <Autosuggest
      renderInputComponent={renderInputComponent}
      suggestions={suggestion}
      onSuggestionsFetchRequested={onSuggestionRequested}
      onSuggestionsClearRequested={onSuggestionClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      renderSuggestionsContainer={renderSuggestionContainer}
      inputProps={inputProps}
    />
  );
};

SearchHeader.propTypes = {
  getPlace: PropTypes.func.isRequired,
  wisata: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  wisata: state.wisata,
});

export default connect(mapStateToProps, { getPlace })(SearchHeader);
