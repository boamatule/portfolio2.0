import React from "react";
import { FaCheckCircle, FaStripe, FaGoogle} from "react-icons/fa"; // Import the icon you want to use from React Icons
import { SkillsSetsContainer, SkillsSetWrapper } from "./SkillsSet.Styles";

const CoreSkills = () => {
  const leftItems = [
    { text: "Javascript", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2019%2F01%2FJavaScript_Logo-700x700.png&f=1&nofb=1&ipt=e81d380095c8dc8e3859d6e92aab840393d44c2e09b0d19fa3513ecb17b5bfe9&ipo=images" }, // Update list items to include text and icon
    { text: "Typescript", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2415%2FPNG%2F512%2Ftypescript_original_logo_icon_146317.png&f=1&nofb=1&ipt=efaf80b43af6c6f18aeadbeebcd7a717344a808e40deaf10607991dfb91cb090&ipo=images" },
    { text: "React", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--qo_Wp38Z--%2Fc_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_880%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fe0nl7ziy1la7bpwj7rsp.png&f=1&nofb=1&ipt=3c26ca2c41f18562089ca978579dd2b66b6b7a5f03aca676f86d5d90d84ecfac&ipo=images" },
    { text: "Next.js", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KhEi6z8wYQZVa0IFYmaUXAHaHa%26pid%3DApi&f=1&ipt=4f52ad933f5db121eadae5e6327d0c47774c656087b296d50433c8269134bf05&ipo=images" },
    { text: "Node.js", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F1*4VBxaeHaxTxjZiPbI7g3kw.jpeg&f=1&nofb=1&ipt=687006b16350db1eed0db51105810896cae215f8ea589516f62905081f99acbd&ipo=images" },
    { text: "GraphQL", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.S9IguTrmBrN5RSHQ_n08ywHaDy%26pid%3DApi&f=1&ipt=f454020c339749da31d876bd3d66adc238a73b003e0c85375f7f195988d3fa7f&ipo=images" },
    { text: "Styled-Components", imageSrc: "https://styled-components.com/logo.png" },
    { text: "Tailwind CSS", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DAd4ProxJ7RhaQ6iJZxoSAHaHT%26pid%3DApi&f=1&ipt=6b81e9cc37b3991c3fe96b633a4eb373fc63624e32981fca1955a96662df2602&ipo=images" },
    { text: "Redis", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.auth0.com%2Fblog%2Flogos%2Fredis-icon-logo.png&f=1&nofb=1&ipt=66008e9f801a080964b9659fbeb3b5e9c7b285cb458d4e673dbea563edb475e6&ipo=images" },
    { text: "AWS", imageSrc: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fd3gih7jbfe3jlq.cloudfront.net%2FAWS-Podcast-Title-Art.jpg&f=1&nofb=1&ipt=599a516ff8d990ec36ea71f074dc8747df88acadef73bd79d7a80c52d4e6307e&ipo=images" },
    { text: "Framer Motion", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--Z9BIV0rb--%2Fc_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_500%2Cq_auto%2Cw_1000%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffnvd55nw5uiyo7frz3oe.png&f=1&nofb=1&ipt=20af8a8b991d05be49ab02a813fcd382dd531c17fe0b8d6f7d35d4eb7d04b791&ipo=images" },
  ];

  return (
    <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   width: "100%",
      //   maxWidth: "1000px",
      //   margin: "0 auto",
      //   padding: "0 20px",
      // }}
    >
      <h2
        style={{
          color: "#4568dc",
          marginBottom: "20px",
        }}>Core Technologies:</h2>
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {leftItems.map(item => (
          <li key={item.text}>
            <img
              src={item.imageSrc}
              alt={item.text}
              style={{
                maxWidth: '100%',
                width: '26px',
                height: '26px',
                loading: 'lazy',
                borderRadius: '50%',
                border: '2px solid grey',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: "8px",
                marginTop: "8px"
              }}
            />
            <span
              style={{
                justifyItems: 'center',
                marginTop: '88px',
              }}
            >{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AnotherCoreSkills = () => {
  const rightItems = [
    { text: "Stripe", icon: FaStripe }, // Update list items to include text and icon
    { text: "Firebase", icon: FaGoogle },
    { text: "JWT", icon: FaCheckCircle },
    { text: "E2E Testing", icon: FaCheckCircle },
    { text: "PWAs", icon: FaCheckCircle },
    { text: "Performance Optimization", icon: FaCheckCircle },
    { text: "Responsive Web Design", icon: FaCheckCircle },
    { text: "Software Testing", icon: FaCheckCircle },
    { text: "Accessibility auditing", icon: FaCheckCircle }
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1000px",
        // margin: "0 auto",
        // padding: "0 0px",
      }}
    >
      <h2
        style={{
          color: "#4568dc",
          marginBottom: "20px",
        }}
      >Others:</h2>
      <ul
        style={{
          listStyle: "none",
        }}
      >

        {rightItems.map((item, index) => (
          <li key={index}>
            {React.createElement(item.icon, { style: { marginRight: "8px", loading: 'lazy' } })} {/* Render the icon using React.createElement */}
            {item.text}
          </li>
        ))}

      </ul>
    </div>
  );
};

const SkillsSet = () => {

  return (
    <SkillsSetsContainer>
      <SkillsSetWrapper>
        <CoreSkills />
      </SkillsSetWrapper>
      <SkillsSetWrapper>
        <AnotherCoreSkills />
      </SkillsSetWrapper>
    </SkillsSetsContainer>
  );
};

export default React.memo(SkillsSet);
