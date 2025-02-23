// src/components/MultiStepForm.jsx
import React, { useState } from 'react';
import useFormStore from '../store.jsx';
import Step1PersonalInfo from './Step1PersonalInfo';
import Step2ContactInfo from './Step2ContactInfo';
import Step3AboutYou from './Step3AboutYou';
import Step4ReviewSubmit from './Step4ReviewSubmit';
import { styles } from '../styles.jsx';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const { personalInfo, contactInfo, aboutYou, setPersonalInfo, setContactInfo, setAboutYou, resetForm } = useFormStore();

  const handleSubmit = (values) => {
    if (step === 1) {
      setPersonalInfo(values);
      setStep(2);
    } else if (step === 2) {
      setContactInfo(values);
      setStep(3);
    } else if (step === 3) {
      setAboutYou(values);
      setStep(4);
    } else if (step === 4) {
      console.log('Final Form Data:', { ...personalInfo, ...contactInfo, ...aboutYou });
      resetForm();
      alert('Registration successful! Welcome to the CSEC community!');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1PersonalInfo onSubmit={setPersonalInfo} onNext={() => setStep(2)} />;
      case 2:
        return <Step2ContactInfo onSubmit={setContactInfo} onNext={() => setStep(3)} onBack={() => setStep(1)} />;
      case 3:
        return <Step3AboutYou onSubmit={setAboutYou} onNext={() => setStep(4)} onBack={() => setStep(2)} />;
      case 4:
        return (
          <Step4ReviewSubmit
            personalInfo={personalInfo}
            contactInfo={contactInfo}
            aboutYou={aboutYou}
            onSubmit={handleSubmit}
            onBack={() => setStep(3)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.multiStepForm}>
      <h1>CSEC Community Registration</h1>
      {renderStep()}
    </div>
  );
};

// Ensure this is the default export
export default MultiStepForm;