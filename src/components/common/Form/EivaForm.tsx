"use client";

import { Suspense } from "react";
import FormCover from "./FormCover";
import { Container, Spinner } from "@chakra-ui/react";

const EivaForm = ({bg}: {bg: string}) => {
  return (
    <Suspense fallback={<Container display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Spinner size={"xl"} color={"heading"} />
    </Container>}>
      <FormCover bgImage={bg} />
    </Suspense>
  );
};

export default EivaForm;
