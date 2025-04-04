import { Typography, Grid } from "@mui/material";
import { Section } from "./Section";
import { type ReactNode, useEffect, useState } from "react";

const quotes = [
  <>
    I'm a passionate product designer dedicated to creating{" "}
    <span>sustainable user experiences with purpose.</span>
  </>,
  <>
    A product that requires explanation{" "}
    <span>has already failed in design.</span>
  </>,
  <>
    Designers who don’t understand people{" "}
    <span>design stuff that doesn’t work.</span>
  </>,
  <>
    Creativity is allowing yourself to make mistakes.{" "}
    <span>Design is knowing which ones to keep.</span>
  </>,
  <>
    Design begins where aesthetics end:{" "}
    <span>at the moment something works&mdash;effortlessly.</span>
  </>,
  <>
    The challenge isn’t creating the design.{" "}
    <span>It’s dismantling the resistance around it.</span>
  </>,
  <>
    True beauty arises when every part is in its right place,{" "}
    <span>leaving nothing to add, subtract, or improve.</span>
  </>,
];

export const RandomQuote: React.FC = () => {
  const [quote, setQuote] = useState<ReactNode | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <Section padding={{ top: 5, bottom: 5 }}>
      <Grid container spacing={2}>
        <Grid>
          <Typography variant={"h1"}>{quote}</Typography>
        </Grid>
      </Grid>
    </Section>
  );
};
