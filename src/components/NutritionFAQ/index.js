'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What does a nutritionist do?",
    answer: "A nutritionist helps you understand your dietary needs and creates personalized meal plans to achieve health goals."
  },
  {
    question: "How often should I consult a nutritionist?",
    answer: "It depends on your health goals, but most clients benefit from monthly check-ins."
  },
  {
    question: "Can a nutritionist help with weight loss?",
    answer: "Yes, they create sustainable and balanced diet strategies tailored for effective and healthy weight loss."
  },
  {
    question: "Can a nutritionist help with weight loss?",
    answer: "Yes, they create sustainable and balanced diet strategies tailored for effective and healthy weight loss."
  },
  {
    question: "Can a nutritionist help with weight loss?",
    answer: "Yes, they create sustainable and balanced diet strategies tailored for effective and healthy weight loss."
  },
];

export default function NutritionFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="bg-[#000]">
    <div className="w-full max-w-6xl p-6 mx-auto pt-10">
      <h2 className="text-3xl font-bold text-[#ffd700] mb-6">Nutritionist FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-black rounded-md">
            <button
              onClick={() => toggle(index)}
              className="border-2 border-[#000] w-full flex justify-between items-center px-5 py-4 text-left text-white bg-[#1a1a1a] hover:border-2 hover:border-[#ffd700] rounded-md transition duration-300"
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`px-4 pb-0 text-gray-300 text-sm overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-40 py-4 pb-4' : 'max-h-0'
              }`}
            >
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}
