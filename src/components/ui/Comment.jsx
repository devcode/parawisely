import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Heading,
  Stack,
  StackDivider,
  Text,
  SimpleGrid,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
} from '@chakra-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { createComment } from '../../api/fetchData';
import { addComment } from '../../actions/wisata';

const ulasanSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Terlalu pendek!')
    .max(13, 'Terlalu panjang!')
    .required('Tidak boleh kosong'),
  email: Yup.string().email('Email tidak valid').required('Tidak boleh kosong'),
  comment: Yup.string()
    .min(10, 'Terlalu pendek!')
    .max(100, 'Terlalu panjang!')
    .required('Tidak boleh kosong'),
});

const Comment = ({ addComment, wisata: { place }, place_id }) => {
  return (
    <>
      <Box borderRadius="md" shadow="lg" p="2rem">
        <Formik
          initialValues={{
            place_id,
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

      <Box borderRadius="md" shadow="md" p="2rem">
        <Heading fontSize="24px">
          Ulasan ({place?.data?.comments?.length}){' '}
        </Heading>

        <Stack
          spacing="2rem"
          divider={<StackDivider borderColor="gray.300" />}
          mt="2rem"
        >
          {place?.data?.comments?.map((item, index) => (
            <Stack key={index}>
              <Heading fontSize="18px">{item.name}</Heading>
              <Text>{item.comment}</Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </>
  );
};

Comment.proptTypes = {
  addComment: PropTypes.func.isRequired,
  place: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  wisata: state.wisata,
});

export default connect(mapStateToProps, {
  addComment,
})(Comment);
