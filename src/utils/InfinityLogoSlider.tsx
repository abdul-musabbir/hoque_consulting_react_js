import styled, { css, keyframes } from "styled-components";

interface InfinitySliderProps {
  data: {
    url: string;
  }[];
  repeat: number;
}

export default function InfinityLogoSlider({
  data,
  repeat,
}: InfinitySliderProps) {
  // Duplicate the array `repeat` times for infinite scrolling effect
  const repeatedData = Array(repeat).fill(data).flat();

  return (
    <AppContainer>
      <Wrapper>
        <Text>With Great Outcomes.</Text>
        <Note>Our customers have gotten offers from awesome companies.</Note>
        <Marquee>
          <MarqueeGroup>
            {repeatedData.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el.url} alt={`Logo ${index + 1}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {repeatedData.map((el, index) => (
              <ImageGroup key={index + repeatedData.length}>
                <Image src={el.url} alt={`Logo ${index + 1}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin: 0 20px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 0px;
`;
