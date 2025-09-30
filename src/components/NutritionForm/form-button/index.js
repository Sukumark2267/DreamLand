'use client';
import React from 'react';
import './form-button.css';

export default function FormButton({ label = 'Save', onClick }) {
  return (
    <button onClick={onClick} className='form-button'>
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            className="icon"
          >
            <path
              fill="currentColor"
              d="M6.028 0v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z"
          />
          </svg>
        </div>
      </div>
      <span>{label}</span>
    </button>
  );
}
