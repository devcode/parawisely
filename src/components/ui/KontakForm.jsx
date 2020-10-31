import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/core';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';
import Alert from './Alert';

import { sendContact } from '../../actions/wisata';

const kontakSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Terlalu pendek!').required('Tidak boleh kosong'),
  email: Yup.string().email('Email tidak valid').required('Tidak boleh kosong'),
  message: Yup.string()
    .min(10, 'Terlalu pendek!')
    .max(10000, 'Terlalu panjang!')
    .required('Tidak boleh kosong'),
});

const KontakForm = ({ sendContact, wisata }) => {
  return (
    <>
      <Alert />

      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: 'kontak',
          message: '',
        }}
        validationSchema={kontakSchema}
        onSubmit={async (values, actions) => {
          await sendContact(values);
          actions.resetForm();
        }}
      >
        {props => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>
                    Nama Lengkap <span style={{ color: '#10a0ff' }}>*</span>{' '}
                  </FormLabel>
                  <Input {...field} type="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                  className="mt-3"
                  id="email"
                >
                  <FormLabel>
                    Alamat Email <span style={{ color: '#10a0ff' }}>*</span>
                  </FormLabel>
                  <Input {...field} type="email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="message">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.message && form.touched.message}
                  className="mt-3"
                  id="pesan"
                >
                  <FormLabel>
                    Apa Pesanmu? <span style={{ color: '#10a0ff' }}>*</span>
                  </FormLabel>
                  <Textarea {...field} />
                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              isLoading={props.isSubmitting}
              type="submit"
              mt="1rem"
              isFullWidth
              colorScheme="blue"
            >
              Kirim
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

KontakForm.propTypes = {
  sendContact: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  wisata: state.wisata,
});

export default connect(mapStateToProps, { sendContact, setAlert })(KontakForm);
