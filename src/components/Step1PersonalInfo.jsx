import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { styles } from '../styles';

const phoneRegex = /^(?:\+2519|\+2517|09|07)\d{8}$/;

const personalInfoSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  age: Yup.number()
    .min(18, 'Must be at least 18 years old')
    .required('Age is required'),
  phone: Yup.string()
    .matches(phoneRegex, 'Invalid Ethiopian phone number')
    .required('Phone is required'),
});

const Step1PersonalInfo = ({ onSubmit, onNext }) => {
  return (
    <Formik
      initialValues={{ name: '', email: '', age: '', phone: '' }}
      validationSchema={personalInfoSchema}
      onSubmit={(values) => {
        onSubmit(values);
        onNext();
      }}
      validateOnChange={false} // Disable validation on change
      validateOnBlur={true} // Enable validation on blur
    >
      {({ errors, touched }) => (
        <Form style={styles.formContainer}>
          <h2>Step 1: Personal Info</h2>

          {/* Name Field */}
          <div style={styles.formGroup}>
            <label>Name</label>
            <Field name="name" placeholder="Enter your name" style={styles.input} />
            {errors.name && touched.name ? (
              <div style={styles.error}>{errors.name}</div>
            ) : null}
          </div>

          {/* Email Field */}
          <div style={styles.formGroup}>
            <label>Email</label>
            <Field name="email" type="email" placeholder="Enter your email" style={styles.input} />
            {errors.email && touched.email ? (
              <div style={styles.error}>{errors.email}</div>
            ) : null}
          </div>

          {/* Age Field */}
          <div style={styles.formGroup}>
            <label>Age</label>
            <Field name="age" type="number" placeholder="Enter your age" style={styles.input} />
            {errors.age && touched.age ? (
              <div style={styles.error}>{errors.age}</div>
            ) : null}
          </div>

          {/* Phone Field */}
          <div style={styles.formGroup}>
            <label>Phone Number</label>
            <Field name="phone" placeholder="+2519XXXXXXXX or 09XXXXXXXX" style={styles.input} />
            {errors.phone && touched.phone ? (
              <div style={styles.error}>{errors.phone}</div>
            ) : null}
          </div>

          {/* Next Button */}
          <button type="submit" style={styles.nextButton}>
            Next
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Step1PersonalInfo;