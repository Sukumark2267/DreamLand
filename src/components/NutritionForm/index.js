'use client';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import './NutritionForm.css';
import FormButton from './form-button';

export default function NutritionForm() {
  const formRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const nextField = (e) => {
    e.preventDefault();
    const nextIndex = currentStep + 1;
    const nextEl = formRef.current.querySelectorAll('.form-field')[nextIndex];

    if (nextEl) {
      gsap.fromTo(
        nextEl,
        { opacity: 0, y: -60 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
      setCurrentStep(nextIndex);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="nutrition-form" ref={formRef}>
      <div className="form-field" style={{ opacity: 1, transform: 'translateY(0)',}}>
        <h1 className="form-heading">Your Primary Health Goal?</h1>
        <input type="text" placeholder="Weight-loss, PCOS" required />
        <FormButton label="Next" onClick={nextField} />
      </div>

      <div className="form-field">
        <h1 className="form-heading">Any Medical conditions/food allergies</h1>
        <input type="text" required />
        <FormButton label="Next" onClick={nextField} />
      </div>

      <div className="form-field">
        <h1 className="form-heading">Height</h1>
        <input type="text" placeholder="Height in cm" />
        <h1 className="form-heading">Weight</h1>
        <input type="text" placeholder="Weight in kg" />
        <FormButton label="Next" onClick={nextField} />
      </div>

      <div className="form-field">
        <h1 className="form-heading">Anything specific you&apos;d like help with?</h1>
        <select required>
          <option value="">Select Service</option>
          <option value="consultation">Nutritional Consultation</option>
          <option value="diet-plan">Custom Diet Plan</option>
          <option value="follow-up">Follow-up Session</option>
        </select>
        <FormButton label="Next" onClick={nextField} />
      </div>

      <div className="form-field submit-button">
        <h1 className="form-heading">Ready to book a call?</h1>
        <button type="submit">Book !!</button>
      </div>
    </form>
  );
}
