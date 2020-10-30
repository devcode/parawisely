import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { InputGroup, InputRightElement, Input } from '@chakra-ui/core';
import { SearchIcon } from '@chakra-ui/icons';

import { WTF } from '../../actions/wisata';

const SearchBar = ({ dispatch, wisata, where }) => {
  const onChangeHandler = e => {
    dispatch(WTF({ value: e.target.value, where }));
  };

  return (
    <InputGroup>
      <InputRightElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        onChange={e => onChangeHandler(e)}
        type="phone"
        placeholder="Cari tempat"
      />
    </InputGroup>
  );
};

SearchBar.propTypes = {
  where: Proptypes.string.isRequired,
};

const mapStateToProps = state => ({
  wisata: state.wisata,
});

export default connect(mapStateToProps)(SearchBar);
