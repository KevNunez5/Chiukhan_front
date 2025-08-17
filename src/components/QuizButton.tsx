import React from 'react';
import './QuizButton.css';

interface BlueButtonProps {
  nombre: string;
  value?: boolean;
}

const QuizButton: React.FC<BlueButtonProps> = ({ nombre }) => {
  return (
    <div>
      <button className="quiz-button">
        {nombre}
      </button>
    </div>
  );
};

export default QuizButton;