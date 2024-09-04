import EivaForm from '@/components/common/Form/EivaForm'
import Doctors from '@/components/homepage/Doctors/Doctors'
import { ENDPOINTS } from '@/lib/api'
import { getData } from '@/lib/getData'
import { Container, Spinner } from '@chakra-ui/react'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <main>
      <Suspense fallback={<Container h='100vh' display='flex' justifyContent='center' alignItems='center' maxW={{base:'100%',lg:'1280px'}} ><Spinner size='xl' color='heading' /></Container>}>
      <GetDoctorsData />
      </Suspense>
      <Suspense fallback={<Container h='100vh' display='flex' justifyContent='center' alignItems='center' maxW={{base:'100%',lg:'1280px'}} ><Spinner size='xl' color='heading' /></Container>}>
    <GetFormImages />
      </Suspense>
    </main>
  )
}

export default page

async function GetDoctorsData(){
  'use server';
  const data = await getData(ENDPOINTS.getDotcors())

  return(
    <Doctors hasLink={false} doctors={data} />

  )
  
}

async function GetFormImages() {
  "use server";
  const data = await getData(ENDPOINTS.getFormBackgrounds());

  return <EivaForm bg={data.doctors_background ? data.doctors_background : "/form-bg.jpeg"} />;
}
