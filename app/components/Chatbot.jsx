'use client'



import Script from 'next/script';

const Chatbot = () => {
  return (
    <>

        <div className=" z-[100] ">
        <Script src="https://cdn.botpress.cloud/webchat/v0/inject.js"/>
<Script src="https://mediafiles.botpress.cloud/99fad5b4-3f6d-4247-aac9-d8960970cef2/webchat/config.js" defer/>
        </div>

    </>
  )
}

export default Chatbot