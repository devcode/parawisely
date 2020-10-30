import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/core';
import SearchBar from './SearchBar';

import { getTypePlace, getPlaceByType } from '../../actions/wisata';

const FilterPanel = ({
  isWisataDearah = false,
  getPlaceByType,
  getTypePlace,
  wisata: {
    typePlace,
    filteredPlaces,
    filteredWisataDaerahPlaces,
    wisataDaerahDetail,
  },
}) => {
  useEffect(() => {
    getTypePlace();
  }, [getTypePlace]);

  const filterHandler = (typeId, islandId) => {
    if (isWisataDearah) {
      getPlaceByType(typeId, islandId);
    } else {
      getPlaceByType(typeId);
    }
  };

  return (
    <Stack minWidth="50vh" spacing="1rem">
      <Heading fontSize="14px">
        Total (
        {isWisataDearah
          ? filteredWisataDaerahPlaces?.places?.length
          : filteredPlaces?.length}
        )
      </Heading>
      <SearchBar where={isWisataDearah ? 'wisataDaerah' : 'filteredPlaces'} />
      <FormControl>
        <FormLabel>Kategori {wisataDaerahDetail?.id} </FormLabel>
        <Stack>
          <Select
            onChange={e => filterHandler(e.target.value, wisataDaerahDetail.id)}
          >
            <option value="0">Semua</option>
            {typePlace?.map((item, idx) => (
              <option value={item.id} key={`alsdklaskdl-${idx}`}>
                {item.type_name}
              </option>
            ))}
          </Select>
        </Stack>
      </FormControl>
    </Stack>
  );
};

FilterPanel.propTypes = {
  getPlaceByType: PropTypes.func.isRequired,
  getTypePlace: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  wisata: state.wisata,
});

export default connect(mapStateToProps, {
  getTypePlace,
  getPlaceByType,
})(FilterPanel);
