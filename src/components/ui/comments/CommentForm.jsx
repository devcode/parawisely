import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Box,
  Stack,
  SimpleGrid,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Button,
} from '@chakra-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addComment } from '../../../actions/wisata';
import { setAlert } from '../../../actions/alert';
import Alert from '../Alert';

const ulasanSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Terlalu pendek!').required('Tidak boleh kosong'),
  email: Yup.string().email('Email tidak valid').required('Tidak boleh kosong'),
  comment: Yup.string()
    .min(10, 'Terlalu pendek!')
    .max(100, 'Terlalu panjang!')
    .required('Tidak boleh kosong'),
});

const CommentForm = ({ place_id, addComment, wisata: { place } }) => {
  return (
    <Box borderRadius="md" shadow="lg" p="2rem">
      <Alert />
      <Formik
        initialValues={{
          place_id: place.id,
          name: '',
          email: '',
          comment: '',
        }}
        validationSchema={ulasanSchema}
        onSubmit={async (values, actions) => {
          addComment(values);
          actions.resetForm();
        }}
      >
        {props => (
          <Form>
            <Stack spacing="1rem">
              <SimpleGrid spacing="2rem" columns={[1, 1, 2, 2]}>
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel>Nama</FormLabel>
                      <Input
                        {...field}
                        type="name"
                        placeholder="Masukan nama"
                        id="name"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel>Email</FormLabel>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Masukan email"
                        id="email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </SimpleGrid>
              <Field name="comment">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.comment && form.touched.comment}
                  >
                    <FormLabel>Comment</FormLabel>
                    <Textarea
                      {...field}
                      type="comment"
                      id="comment"
                      name="comment"
                    />
                    <FormErrorMessage>{form.errors.comment}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                type="submit"
                colorScheme="blue"
                isLoading={props.isSubmitting}
              >
                Kirim
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  wisata: state.wisata,
});

export default connect(mapStateToProps, { addComment, setAlert })(CommentForm);
