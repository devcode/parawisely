import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

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

  const query = useQuery();
  const type = query.get('type');

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
        <FormLabel>Kategori </FormLabel>
        <Stack>
          <Select
            onChange={async e =>
              await filterHandler(e.target.value, wisataDaerahDetail.id)
            }
          >
            <option value="0">Semua</option>
            {typePlace?.map((item, idx) => (
              <option
                onChange={e => alert('asdkalsdkl')}
                selected={parseInt(type) === item.id ? true : false}
                value={item.id}
                key={`alsdklaskdl-${idx}`}
              >
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
