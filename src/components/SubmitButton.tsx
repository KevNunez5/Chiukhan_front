import React from "react";
import "./SubmitButton.css";

interface SubmitButtonProps {
    quiz: {
        preguntas: {
            pregunta: string;
            opciones: string[];
            respuestaCorrecta: number;
        }[];
    };
    userAnswers: (number | null)[];
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ quiz, userAnswers }) => {
    const handleSubmit = () => {
        quiz.preguntas.forEach((pregunta, index) => {
            const selected = userAnswers[index];
            const correct = pregunta.respuestaCorrecta;
            console.log(`Pregunta: ${pregunta.pregunta}`);
            console.log(`Tu respuesta: ${selected !== null ? pregunta.opciones[selected] : "No respondida"}`);
            console.log(`Respuesta correcta: ${pregunta.opciones[correct]}`);
            console.log(selected === correct ? "✅ Correcta" : "❌ Incorrecta");
            console.log("--------------");
        });
    };

    return (
        <button className="submit-button" onClick={handleSubmit}>
            Enviar respuestas
        </button>
    );
};

export default SubmitButton;
