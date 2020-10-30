import React, { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import { InputGroup, InputRightElement, Input } from '@chakra-ui/core';
import { SearchIcon } from '@chakra-ui/icons';

import { getPlace } from '../../actions/wisata';

const SearchHeader = ({ getPlace, wisata: { places } }) => {
  const getSuggestion = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = value.length;

    return inputLength === 0
      ? []
      : places.filter(
          place =>
            place.name_place.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = suggestion => suggestion.place_name;

  const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

  const [value, setValue] = useState('');
  const [suggestion, setSuggestion] = useState([]);

  const onChange = (e, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionRequested = ({ value }) => {
    setSuggestion(value);
  };

  const onSuggestionClearRequested = () => {
    setSuggestion([]);
  };

  const inputProps = {
    placeHolder: 'Cari tempat',
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

  return (
    // <InputGroup>
    //   <InputRightElement
    //     pointerEvents="none"
    //     children={<SearchIcon color="blue.300" />}
    //   />
    //   <Input type="phone" placeholder="Cari tempat" fontSize="16px" />
    // </InputGroup>
    <Autosuggest
      suggestions={suggestion}
      onSuggestionsFetchRequested={onSuggestionRequested}
      onSuggestionsClearRequested={onSuggestionClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
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
