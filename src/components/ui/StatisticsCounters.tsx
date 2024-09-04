import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import CardWithCounter from "./CardWithCounter";

const StatisticsCounters = ({
  counter1,
  counter2,
  counter3
}:{
  counter1:number,
  counter2:number,
  counter3:number
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
          <CardWithCounter index={0}  value={counter1}/>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 1 }}>
          <CardWithCounter index={1} value={counter2}/>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <CardWithCounter index={2} value={counter3} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default StatisticsCounters;
