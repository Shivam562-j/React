import { useState } from 'react';
import './App.css';

function App() {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
    if (isOpen2) {
      setIsOpen2(false);
    }
    if (isOpen3) {
      setIsOpen3(false);
    }
    if (isOpen4) {
      setIsOpen4(false);
    }
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
    if (isOpen1) {
      setIsOpen1(false);
    }
    if (isOpen3) {
      setIsOpen3(false);
    }
    if (isOpen4) {
      setIsOpen4(false);
    }
  };

  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
    if (isOpen1) {
      setIsOpen1(false);
    }
    if (isOpen2) {
      setIsOpen2(false);
    }
    if (isOpen4) {
      setIsOpen4(false);
    }
  };

  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
    if (isOpen1) {
      setIsOpen1(false);
    }
    if (isOpen2) {
      setIsOpen2(false);
    }
    if (isOpen3) {
      setIsOpen3(false);
    }
  };

  return (
    <div>
      <div className='container'>
        <h1 className='heading'>Some Important Questions</h1>
        <div className='accordion'>
          <h2 onClick={toggleAccordion1}>What is HTML?</h2>
          {isOpen1 && (
            <div className="accordion-content">
              <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.</p>
              <p>It defines the meaning and structure of web content.</p>
            </div>
          )}
        </div>

        <div className='accordion'>
          <h2 onClick={toggleAccordion2}>What is CSS?</h2>
          {isOpen2 && (
            <div className="accordion-content">
              <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.</p>
              <p>CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
            </div>
          )}
        </div>

        <div className='accordion'>
          <h2 onClick={toggleAccordion3}>What is JavaScript?</h2>
          {isOpen3 && (
            <div className="accordion-content">
              <p>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>
              <p>As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
            </div>
          )}
        </div>

        <div className='accordion'>
          <h2 onClick={toggleAccordion4}>What is React Js?</h2>
          {isOpen4 && (
            <div className="accordion-content">
              <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. </p>
              <p>It is maintained by Meta and a community of individual developers and companies.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
