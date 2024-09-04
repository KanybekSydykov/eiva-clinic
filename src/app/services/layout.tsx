import LayoutTabs from '@/components/ui/LayoutTabs'
import { ENDPOINTS } from '@/lib/api'
import { getData } from '@/lib/getData'
import { Container, Spinner } from '@chakra-ui/react'
import React, { Suspense } from 'react'

const layout = ({children,params} : {children: React.ReactNode,params: {slug: string}}) => {
  return (
    <>
  <Suspense
  fallback={
    <Container
    h="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    maxW={{ base: "100%", lg: "1280px" }}
  >
    <Spinner size="xl" color="heading" />
  </Container>
  }
  >
    <GetServiceCategories />
  </Suspense>
    {children}
    </>
  )
}

export default layout

async function GetServiceCategories(){
  const data = await getData(ENDPOINTS.getServiceCategories());
  return (
    <LayoutTabs content={data} />
  )
}