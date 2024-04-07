import React from 'react'
import Modal from './Modal';
import { Combobox } from '../Combobox';

const ChooseTopic = () => {
    const  datas = [
        {
          value: "computer",
          label: "Computer",
        },
        {
          value: "mathematics",
          label: "Mathematics",
        },
        {
          value: "sports",
          label: "Sports",
        },
        {
          value: "history",
          label: "History",
        },
       
      ]
    const body=(
        <div>
       <Combobox
       datas={datas}/>
        </div>
    );
  return (
    <Modal
    body={body}
    buttonAction={'/dashboard'}
    dialogDescription={'Choose a new subject'}
    dialogTitle={'Choose New Subject'}
    buttonActionLabel={`+ Add new`}
    primaryModalActionLabel={'Confirm'}
    key={'title'}
    />
  )
}

export default ChooseTopic