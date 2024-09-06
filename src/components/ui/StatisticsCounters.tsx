import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import CardWithCounter from "./CardWithCounter";

const StatisticsCounters = ({
  counter1,
  counter2,
  counter3
}:{
  counter1: { title: string; value: number },
  counter2: { title: string; value: number },
  counter3: { title: string; value: number }
}) => {
  return (
    <Container 
    maxW={{
      base: "container.xl",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    }}
     pb={"60px"}>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        gap="10px"
      >
        <GridItem colSpan={{ base: 1, lg: 1 }}>
          <CardWithCounter index={0} title={counter1.title}   value={counter1.value}/>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 1 }}>
          <CardWithCounter index={1} title={counter2.title} value={counter2.value}/>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <CardWithCounter index={2} title={counter3.title} value={counter3.value} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default StatisticsCounters;
