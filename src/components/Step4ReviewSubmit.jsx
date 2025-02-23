// src/components/Step4ReviewSubmit.jsx
import { styles } from '../styles';

const Step4ReviewSubmit = ({ personalInfo, contactInfo, aboutYou, onSubmit, onBack }) => {
  return (
    <div style={styles.formContainer}>
      <h2>Step 4: Review & Submit</h2>
      <div style={styles.reviewSection}>
        <p><strong>Name:</strong> {personalInfo.name}</p>
        <p><strong>Email:</strong> {personalInfo.email}</p>
        <p><strong>Age:</strong> {personalInfo.age}</p>
        <p><strong>Phone:</strong> {personalInfo.phone}</p>
        <p><strong>Telegram:</strong> {contactInfo.telegram || 'Not provided'}</p>
        <p><strong>Description:</strong> {aboutYou.description}</p>
        <p><strong>Hobbies:</strong> {aboutYou.hobbies}</p>
      </div>
      <button type="button" onClick={onBack} style={styles.backButton}>Back</button>
      <button type="button" onClick={onSubmit} style={styles.submitButton}>Submit</button>
    </div>
  );
};

export default Step4ReviewSubmit;