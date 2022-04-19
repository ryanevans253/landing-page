/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

//my icons

import bell from "assets/key-feature/bell.svg";
import drop from "assets/key-feature/drop.svg";
import sun from "assets/key-feature/sun.svg";
import search from "assets/key-feature/search.svg";

const data = [
  {
    id: 1,
    imgSrc: bell,
    altText: "Custom Reminders",
    title: "Custom Reminders",
    text:
      "Never forget to water or fertilize your plants with custom reminders and our automated watering system.",
  },
  {
    id: 2,
    imgSrc: sun,
    altText: "Light Sensors",
    title: "Light Sensors",
    text:
      "Our app comes with a light sensor so you can be sure your plants are getting just the right amount of light.",
  },
  {
    id: 3,
    imgSrc: drop,
    altText: "Moisture Meters",
    title: "Moisture Meters",
    text:
      "Our smart meters will check your soil's moisture levels so you know exactly when to water them.",
  },
  {
    id: 4,
    imgSrc: search,
    altText: "Plant Identification",
    title: "Plant Identification",
    text:
      "Quickly identify your plants and import their recommended care guide to get up and running quickly.",
  },
];

export default function KeyFeature() {
  return (
    <section id="feature" sx={{ variant: "section.keyFeature" }}>
      <Container>
        <SectionHeader
          slogan="Why get planted?"
          title="Never kill a plant again"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
