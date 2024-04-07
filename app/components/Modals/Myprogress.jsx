import React from 'react'
import Modal from './Modal'

const Myprogress = () => {

    const body=(
        <div className='flex flex-col gap-y-4 '>
       <p className='font-bold text-[30px]'>
       My Score : 500
        </p>
        
    </div>
     
      

       
    );
  return (
    <Modal
    body={body}
    buttonAction={'/dashboard'}
    dialogDescription={'Tracking My Progress'}
    dialogTitle={'My Progress'}
    buttonActionLabel={`My Progress`}
    primaryModalActionLabel={'Play More'}
    key={'title'}
    />


  )
}

export default Myprogress