import { Box, Center, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import SkillItem from "../components/Skills/SkillItem";

const Skills = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Box>
      <Center mb={"40px"}>
        <Heading>Skills</Heading>
      </Center>
      <Box pl={20} pr={20} h={"100vh"}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {arr.map((item) => {
            return <SkillItem />;
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
// Each skills card in the Skills section should have class="skills-card" and the following:
// Image : class="skills-card-img"
// Name : class="skills-card-name"