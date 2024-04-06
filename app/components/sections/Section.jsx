import React from 'react'
import SectionHeader from './SectionHeader'

const Section = ({
  title,
useButton,
label,
action,
body,
key
}) => {
  return (
    <div key={key} className='px-4 pt-8 flex justify-center flex-col items-center'>
        <SectionHeader 
            title={title}
            useButton={useButton}
            label={label}
            action={action}
        />
      {body}
    </div>
  )
}

export default Section