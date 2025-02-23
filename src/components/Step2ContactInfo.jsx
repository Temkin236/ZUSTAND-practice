// src/components/Step2ContactInfo.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { styles } from '../styles';

const telegramRegex = /^@[a-zA-Z0-9_]{5,}$/;

const contactInfoSchema = Yup.object({
  telegram: Yup.string()
    .matches(telegramRegex, 'Invalid Telegram username (e.g., @username)')
    .nullable(),
});

const Step2ContactInfo = ({ onSubmit, onNext, onBack }) => {
  return (
    <Formik
      initialValues={{ telegram: '' }}
      validationSchema={contactInfoSchema}
      onSubmit={(values) => {
        onSubmit(values);
        onNext();
      }}
    >
      <Form style={styles.formContainer}>
        <h2>Step 2: Contact Info</h2>
        <div style={styles.formGroup}>
          <label>Telegram Username (optional)</label>
          <Field name="telegram" placeholder="@username" style={styles.input} />
          <ErrorMessage name="telegram" component="div" style={styles.error} />
        </div>
        <button type="button" onClick={onBack} style={styles.backButton}>Back</button>
        <button type="submit" style={styles.nextButton}>Next</button>
      </Form>
    </Formik>
  );
};

export default Step2ContactInfo;