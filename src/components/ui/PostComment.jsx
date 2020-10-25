import React from 'react';
import {
  Stack,
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

const PostComment = () => {
  return (
    <Box borderRadius="md" shadow="lg" p="2rem">
      <Formik
        initialValues={{
          place_id: 1,
          name: '',
          email: '',
          comment: '',
        }}
        validationSchema={ulasanSchema}
        onSubmit={async (values, actions) => {
          const res = await createComment(values);
          console.log(res);
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

export default PostComment;

// import React from 'react';
// import {
//   SimpleGrid,
//   Box,
//   Heading,
//   Stack,
//   FormControl,
//   Input,
//   FormLabel,
//   Textarea,
//   Button,
//   FormErrorMessage,
// } from '@chakra-ui/core';
// import { useForm } from 'react-hook-form';

// const PostComment = () => {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data => {
//     console.log(data);
//   };

//   return (
//     <Box borderRadius="md" shadow="md" p="2rem">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Heading fontSize="24px">Tambah ulasan</Heading>

//         <Stack spacing="1rem" mt="2rem">
//           <SimpleGrid spacing="2rem" columns={[1, 1, 2, 2]}>
//             <FormControl id="nama" isInvalid={errors.nama}>
//               <FormLabel>Nama</FormLabel>
//               <Input
//                 name="nama"
//                 type="text"
//                 ref={register({ required: 'true', minLength: 3 })}
//               />
//               <FormErrorMessage>
//                 {errors?.nama?.types?.required && (
//                   <p>nama tidak boleh kosong</p>
//                 )}
//               </FormErrorMessage>
//             </FormControl>
//             <FormControl id="email">
//               <FormLabel>Email</FormLabel>
//               <Input
//                 name="email"
//                 type="email"
//                 ref={register({ required: 'true' })}
//               />
//             </FormControl>
//           </SimpleGrid>
//           <FormControl id="email">
//             <FormLabel>Ulasan</FormLabel>
//             <Textarea
//               name="ulasan"
//               type="text"
//               ref={register({ required: 'true' })}
//             />
//           </FormControl>
//           <Button type="submit" colorScheme="blue">
//             Tambah
//           </Button>
//         </Stack>
//       </form>
//     </Box>
//   );
// };

// export default PostComment;
