import Contacts from '@/components/common/Contacts/Contacts'
import EivaForm from '@/components/common/Form/EivaForm'
import { ENDPOINTS } from '@/lib/api'
import { getData } from '@/lib/getData'
import { Container, Spinner } from '@chakra-ui/react'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <main>
      <Suspense fallback={<Container h='100vh' display='flex' justifyContent='center' alignItems='center' maxW={{base:'100%',lg:'1280px'}} ><Spinner size='xl' color='heading' /></Container>}>
        <Contacts />
      </Suspense>
      <Suspense fallback={<Container h='100vh' display='flex' justifyContent='center' alignItems='center' maxW={{base:'100%',lg:'1280px'}} ><Spinner size='xl' color='heading' /></Container>}>
    <GetFormImages />
      </Suspense>
    </main>
  )
}

export default page

async function GetFormImages() {
  "use server";
  const data = await getData(ENDPOINTS.getFormBackgrounds());


  return <EivaForm bg={data.contacts_background ? data.contacts_background : "/form-bg.jpeg"} />;
}
