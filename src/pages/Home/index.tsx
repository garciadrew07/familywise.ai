import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import NewPoweredContent from "../../content/NewPoweredContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="family1.svg" 
        id="intro"
        titleSize="24px" // Customize the title size here
        contentSize="16px" // Customize the content size here


      />
      <ContentBlock
        direction="left"
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={IntroContent.button}
        icon="product-launch.svg" 
        id="middle"
        titleSize="24px" // Customize the title size here
        contentSize="16px" // Customize the content size here

      />
      <ContentBlock
        direction="right"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
         icon="graphs.svg"
        id="about"
        titleSize="24px" // Customize the title size here
        contentSize="16px" // Customize the content size here

      />
      <ContentBlock
        direction="left"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="family2.svg"
        id="family2"
        titleSize="24px" // Customize the title size here
        contentSize="16px" // Customize the content size here

      />
     <ContentBlock
        direction="right"
        title={ProductContent.title}
        // content={ProductContent.text.map(option => <p>{option}</p>)}
        content={ProductContent.text}
        icon="grandma.svg"
        id="product"
        titleSize="24px" // Customize the title size here
        contentSize="16px" // Customize the content size here

      />

      <ContentBlock
        direction="left"
        title={NewPoweredContent.title}
        content={NewPoweredContent.text}
        icon="poweredBy.jpg"
        id="poweredBy"
        titleSize="24px"
        contentSize="30px"
        style={{
          backgroundColor: '#d4e4f9', // Light blue background color
          boxShadow: '0 4px 8px rgba(212, 228, 249, 0.5)', // Light blue shadow
          padding: '20px', // Adjust padding as needed
          borderRadius: '10px', // Rounded corners
        }}
        minParaColors={['black', 'black', 'black', 'black']} // Black color for both MinPara texts
      />

        {/* <ContentBlock
          direction="left"
          title={NewPoweredContent.title}
          content={MiddleBlockContent.text}
          button={IntroContent.button}
          icon="family3.svg" 
          id="middle"
          titleSize="24px" // Customize the title size here
          contentSize="16px" // Customize the content size here

        /> */}




    </Container>
  );
};

export default Home;
