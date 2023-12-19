"use client"

import React, { useState, useEffect } from 'react';

function App() {

    const questions = [
        {
            questionText: 'A sum of $10,000 invested for two years at the same rate of interest of r% per annum, can earn $C of compound interest, compounded annually, and $S of simple interest. If ratio of C to S is 11: 10, what is the value of C?',
            answerOptions: [
                { answerText: '$1000', isCorrect: false },
                { answerText: '$1200', isCorrect: false },
                { answerText: '$2000', isCorrect: false },
                { answerText: '$2400', isCorrect: false },
                { answerText: '$4400', isCorrect: true },
            ],
        },
        {
            questionText: 'A bag contains only red, blue, and green chips. One chip is drawn at random from the bag and put back, then again one chip is drawn at random from the bag and put back. The probability that both chips are red or that both chips are blue is 5/16. The probability that the first chip is red and the second chip is not red is 1/4. If one chip is drawn from the bag at random, what is the probability to draw a blue chip?',
            answerOptions: [
                { answerText: '1/16', isCorrect: false },
                { answerText: ' 1/8', isCorrect: false },
                { answerText: '1/4', isCorrect: true },
                { answerText: '1/2', isCorrect: false },
                { answerText: '2/3', isCorrect: false },
            ],
        },
        {
            questionText: 'A shop owner professes to sell his articles at certain cost price but he uses false weights with which he cheats by 10% while buying and by 10% while selling. What is his percentage profit?',
            answerOptions: [
                { answerText: '10.22%', isCorrect: false },
                { answerText: '20.22%', isCorrect: false },
                { answerText: '21.22%', isCorrect: false },
                { answerText: '22.22%', isCorrect: true },
                { answerText: 'Cant be calculated', isCorrect: false },
            ],
        },
        {
            questionText: 'One cup of nuts that contains exactly half peanuts and half cashews is added to a bowl of nuts that is exactly one third peanuts, one third cashews, and one third almonds. This results in a three-cup mixture of nuts. What fraction of the new nut mixture is peanuts?',
            answerOptions: [
                { answerText: '2/9', isCorrect: false },
                { answerText: '5/18', isCorrect: false },
                { answerText: '1/3', isCorrect: false },
                { answerText: '7/18 ', isCorrect: true },
                { answerText: '4/9 ', isCorrect: true },
            ],
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [showQues, setshowQues] = useState(false);

    const handleAnswerButtonClick = (isCorrect: any) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }

        const nextQuetions = currentQuestion + 1;
        if (nextQuetions < questions.length) {
            setCurrentQuestion(nextQuetions);
        }
        else {
            setShowScore(true);
        }
    }

    useEffect(() => {
        if (showScore) {
            (async () => {
                const response = await fetch('/api/questions', {
                    method: 'POST',
                    body: JSON.stringify({ score }),
                });
                const data = await response.json();

            })();
        }
    }, [showScore])

    useEffect(() => {
        (async () => {
            const response = await fetch('/api/questions', {
                method: 'GET',
            });
            const data = await response.json();
            debugger
            if (data.score !== undefined) {
                setshowQues(false);
                setScore(data?.score);

            } else {
                setshowQues(true);
            }
        })();
    }, [])

    return (
        <div className=' max-w-[2520px] mx-auto xl:px-20  md:px-10 sm:px-2 px-4 my-28'>
            {
                showQues === false ? <div className='score-section text-center  text-3xl mt-8'>
                    You scored {score} out of {questions.length}
                </div>
                    :
                    <>
                        <h1 className='header font-extrabold mb-4 text-7xl text-center'>Quiz</h1>
                        <div className="app">
                            {showScore ? (
                                <div className='score-section text-center  text-3xl mt-8'>
                                    You scored {score} out of {questions.length}
                                </div>
                            )
                                :
                                (
                                    <>
                                        <div className='question-section'>
                                            <div className='question-count mb-8'>
                                                <span className='font-bold italic text-4xl '>Question {currentQuestion + 1}</span>
                                            </div>
                                            <div className='question-text font-bold text-2xl'>
                                                {questions[currentQuestion].questionText}
                                            </div>
                                        </div>

                                        <div className='answer-section text-2xl mt-4'>
                                            {
                                                questions[currentQuestion].answerOptions.map((answerOptions) => (
                                                    <button className="text-2xl block mt-2" onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                                                ))
                                            }
                                        </div>
                                    </>
                                )}
                        </div>
                    </>


            }

        </div>
    );
}

export default App;