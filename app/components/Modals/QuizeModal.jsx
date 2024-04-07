"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";



const QuizeModal =  ({quiz}) => {


  const body = (
    <div className="flex flex-col gap-y-4">
      
      
        {quiz.map((dat)=>(
          <div>
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
        </div>
        ))}
        
      
    </div>
  );
  return (
    <Modal
      body={body}
      buttonAction={"/dashboard"}
      dialogDescription={"This is a multi-choice a question"}
      dialogTitle={'Multiple Choice Question'}
      buttonActionLabel={`Play`}
      primaryModalActionLabel={"Submit"}
      key={"title"}
      type={'quiz'}
    />
  );
};

export default QuizeModal;
