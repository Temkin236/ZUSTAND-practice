// src/components/Step3AboutYou.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { styles } from '../styles';

const aboutYouSchema = Yup.object({
  description: Yup.string()
    .min(50, 'Description must be at least 50 characters')
    .max(80, 'Description must be at most 80 characters')
    .required('Description is required'),
  hobbies: Yup.string().required('Hobbies are required'),
  university: Yup.string()
    .notOneOf(['Adama Science and Technology University'], 'Adama Science and Technology University is not allowed')
    .required('University is required'),
  department: Yup.string()
    .oneOf(
      [
        'Computer Engineering',
        'Electrical Engineering',
        'Mechanical Engineering',
        'Civil Engineering',
        'Chemical Engineering',
      ],
      'Department must be an engineering field'
    )
    .required('Department is required'),
  yearOfStudy: Yup.number()
    .min(1, 'Year of study must be at least 1')
    .max(5, 'Year of study must be at most 5')
    .required('Year of study is required'),
  interests: Yup.string().required('Interests are required'),
});


const universities = [
  'Adama Science and Technology University',
];

const departments = [
  'Computer Engineering',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Chemical Engineering',
];

const Step3AboutYou = ({ onSubmit, onNext, onBack }) => {
  return (
    <Formik
      initialValues={{
        description: '',
        hobbies: '',
        university: '',
        department: '',
        yearOfStudy: '',
        interests: '',
      }}
      validationSchema={aboutYouSchema}
      onSubmit={(values) => {
        onSubmit(values);
        onNext();
      }}
    >
      {() => (
        <Form style={styles.formContainer}>
          <h2>Step 3: About You</h2>

          {/* University */}
          <div style={styles.formGroup}>
            <label>University</label>
            <Field as="select" name="university" style={styles.input}>
              <option value="">Select your university</option>
              {universities.map((uni) => (
                <option key={uni} value={uni}>
                  {uni}
                </option>
              ))}
            </Field>
            <ErrorMessage name="university" component="div" style={styles.error} />
          </div>

          {/* Department */}
          <div style={styles.formGroup}>
            <label>Department</label>
            <Field as="select" name="department" style={styles.input}>
              <option value="">Select your department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </Field>
            <ErrorMessage name="department" component="div" style={styles.error} />
          </div>

          {/* Year of Study */}
          <div style={styles.formGroup}>
            <label>Year of Study</label>
            <Field name="yearOfStudy" type="number" placeholder="Enter your year of study" style={styles.input} />
            <ErrorMessage name="yearOfStudy" component="div" style={styles.error} />
          </div>

          {/* Describe Yourself */}
          <div style={styles.formGroup}>
            <label>Describe Yourself (50-80 words)</label>
            <Field name="description" as="textarea" placeholder="Write about yourself..." style={styles.textarea} />
            <ErrorMessage name="description" component="div" style={styles.error} />
          </div>

          {/* Hobbies */}
          <div style={styles.formGroup}>
            <label>Hobbies</label>
            <Field name="hobbies" as="textarea" placeholder="What are your hobbies?" style={styles.textarea} />
            <ErrorMessage name="hobbies" component="div" style={styles.error} />
          </div>

          {/* Interests */}
          <div style={styles.formGroup}>
            <label>Interests</label>
            <Field name="interests" as="textarea" placeholder="What are your interests?" style={styles.textarea} />
            <ErrorMessage name="interests" component="div" style={styles.error} />
          </div>

          {/* Navigation Buttons */}
          <div style={styles.buttonGroup}>
            <button type="button" onClick={onBack} style={styles.backButton}>
              Back
            </button>
            <button type="submit" style={styles.nextButton}>
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step3AboutYou;