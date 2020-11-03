import React, { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import '../../stylesheets/search.css';
import { Link, Redirect } from 'react-router-dom';
import { InputGroup, InputRightElement, Input } from '@chakra-ui/core';
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

  const getSuggestionValue = suggestion => `${suggestion.name_place}`;

  const renderSuggestion = suggestion => {
    return (
      <Link to={`/place/${suggestion.slug}`}>{suggestion.name_place}</Link>
    );
  };

  const renderSuggestionContainer = ({ containerProps, children, query }) => (
    <div {...containerProps}>{children}</div>
  );

  const [value, setValue] = useState('');
  const [suggestion, setSuggestion] = useState([]);

  const onChange = (e, { newValue, method }) => {
    setValue(newValue);
  };

  const onSuggestionRequested = ({ value }) => {
    const data = getSuggestion(value);
    setSuggestion(data);
  };

  const onSuggestionClearRequested = () => {
    setSuggestion([]);
  };

  const inputProps = {
    placeholder: 'Cari tempat',
    value,
    onChange: onChange,
    type: 'search',
  };

  const loadData = useCallback(() => {
    if (places.length === 0) {
      getPlace();
    }
  }, [getPlace, places.length]);

  const onSelectedSuggestion = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    return <Redirect to={`/place/${suggestion.slug}`} />;
  };

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
      onSuggestionSelected={onSelectedSuggestion}
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
