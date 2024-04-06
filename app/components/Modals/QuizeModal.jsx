import React from 'react'
import Modal from './Modal';
import { Checkbox } from "@/components/ui/checkbox"


const QuizeModal = () => {
    
    const body=(
        <div className='flex flex-col gap-y-4'>
       <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          This is Option 1
        </label>
        
      </div>
    </div>
       <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          This is Option 1
        </label>
        
      </div>
    </div>
       <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          This is Option 1
        </label>
        
      </div>
    </div>
     
      

        </div>
    );
  return (
    <Modal
    body={body}
    buttonAction={'/'}
    dialogDescription={'This is a multi-choice a question'}
    dialogTitle={'This is a question'}
    buttonActionLabel={`Play`}
    primaryModalActionLabel={'Next'}
    key={'title'}
    />
  )
}

export default QuizeModal