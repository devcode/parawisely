import React from 'react';
import { Stack, Alert as AlertChakra, AlertIcon } from '@chakra-ui/core';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
  return (
    <Stack spacing={3} my={3}>
      {alerts.map((item, idx) => (
        <AlertChakra key={item.id} status={item.alertType}>
          <AlertIcon />
          {item.msg}
        </AlertChakra>
      ))}
    </Stack>
  );
};

Alert.propTypes = {
  alerts: Proptypes.array.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
