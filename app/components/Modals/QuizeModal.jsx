"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import axios from "axios";

const QuizeModal =  () => {
  const [quiz, setQuiz] = useState();
  const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
  
  axios.get(url)
  .then(function (response) {
      // handle success
      setQuiz(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  const body = (
    <div className="flex flex-col gap-y-4">
      
      
        {quiz?.map((dat)=>(
          <>
          <h3>{dat.question}</h3>
        <RadioGroup >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={dat.correct_answer} id="option-one" />
          <Label htmlFor="option-one">{dat.correct_answer}</Label>
        </div>
       { dat.incorrect_answers.map((inc)=>(
          <div className="flex items-center space-x-2">
          <RadioGroupItem value={inc} id="option-one" />
          <Label htmlFor="option-one">{inc}</Label>
        </div>
        ))}
        </RadioGroup>
        </>
        ))}
        
      
    </div>
  );
  return (
    <Modal
      body={body}
      buttonAction={"/"}
      dialogDescription={"This is a multi-choice a question"}
      dialogTitle={'quiz[0].category'}
      buttonActionLabel={`Play`}
      primaryModalActionLabel={"Next"}
      key={"title"}
    />
  );
};

export default QuizeModal;
