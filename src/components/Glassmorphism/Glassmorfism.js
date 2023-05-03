import styled from "styled-components/macro";

const Card = styled.div`
  background: ${({ theme }) => theme.background};
  box-shadow: 0 8px 32px 0 ${({ theme }) => theme.boxShadow};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 300px;
  height: 400px;
  margin: 20px;
  color: ${({ theme }) => theme.color};
  transition: all 0.25s linear;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 40px 0 ${({ theme }) => theme.boxShadow};
  }
`;

const LightTheme = {
  background: "#fff",
  boxShadow: "rgba(0, 0, 0, 0.1)",
  border: "rgba(255, 255, 255, 0.18)",
  color: "#000"
};

const DarkTheme = {
  background: "#333",
  boxShadow: "rgba(255, 255, 255, 0.1)",
  border: "rgba(255, 255, 255, 0.18)",
  color: "#fff"
};

function GlassmorphismCard({ theme }) {
  return (
    <Card theme={theme === "light" ? LightTheme : DarkTheme}>
      <h2>Card Title</h2>
      <p>This is the card content. It can be anything you want.</p>
      <button>Click me</button>
    </Card>
  );
}

export default GlassmorphismCard;
