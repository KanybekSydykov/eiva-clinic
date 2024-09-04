import Contacts from "@/components/common/Contacts/Contacts";
import AboutUs from "@/components/common/AboutUs/AboutUs";
import BirthCounter from "@/components/homepage/BirthCounter/BirthCounter";
import Directions from "@/components/homepage/Directions/Directions";
import Doctors from "@/components/homepage/Doctors/Doctors";
import Hero from "@/components/homepage/Hero";
import { Suspense } from "react";
import { ENDPOINTS } from "@/lib/api";
import { getData } from "@/lib/getData";
import { Container, Spinner } from "@chakra-ui/react";
import EivaForm from "@/components/common/Form/EivaForm";

export default function Home() {
  return (
    <main>
      <Suspense
        fallback={
          <Container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"100dvw"}
            h={"100dvh"}
          >
            <Spinner />
          </Container>
        }
      >
        <Hero />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Directions />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <MainDataFetch />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <GetFormImages />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <Contacts />
      </Suspense>
    </main>
  );
}

async function MainDataFetch() {
  "use server";
  const data = await getData(ENDPOINTS.getMainPage());

  return (
    <div>
      <Doctors
        title={data.our_specialists_title}
        doctors={data.our_specialists}
      />
      <AboutUs
        title={data.about_us_title}
        description={data.about_us_description}
        photo={data.about_us_photo || undefined}
      />
      <BirthCounter
        counter_title={data.counter_title}
        counter_sub_title={data.counter_sub_title}
        birth_counter={data.birth_counter}
        birth_counter_text={data.birth_counter_sub_title}
        boys_counter={data.boys_counter}
        girls_counter={data.girls_counter}
      />
    </div>
  );
}

async function GetFormImages() {
  "use server";
  const data = await getData(ENDPOINTS.getFormBackgrounds());

  return <EivaForm bg={data.main_background ? data.main_background : "/form-bg.jpeg"} />;
}
