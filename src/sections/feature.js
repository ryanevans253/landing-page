/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Repotting Schedule",
    title: "Repotting Schedule",
    text:
      "Stay on top of how and when to repot your plants to keep them healthy and thriving.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Fertilization Information",
    title: "Fertilization Information",
    text:
      "Ensure your plants are getting the right kind of nutrition at the right time.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Propogation Guides",
    title: "Propogation Guides",
    text:
      "Learn how to turn one plant into many with our simple guides on propgation.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Plant Toxicity Alerts",
    title: "Plant Toxicity Alerts",
    text:
      "Know which plants may be harmful to your pets or other members of your household.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="More reasons to use Planted"
          title="Simple Plant Guides"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              imgSrc={item.imgSrc}
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
