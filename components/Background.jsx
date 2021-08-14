import styled from "styled-components";
function Background() {
  return (
    <div>
      <Section>
        <Bg>
          <span>
            <h1>Olympian & <br /> Paralympian <br />
             Online <br /> Experiences</h1>
            <a href="#" className="btn btn-light">
              Explore Now
            </a>
          </span>
        </Bg>
      </Section>
    </div>
  );
}

export default Background;

const Section = styled.div`
  background: linear-gradient(rgba(10, 12, 44, 0.5) 3rem, transparent 10rem)
      center center / cover,
    url(/images/bghero.jpg) left bottom / cover;
  height: fit-content;
  color: #ffff;
  padding: 15rem 3rem 6rem;
  
 @media (max-width: 36rem) {
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(images/hero-sm.jpg);
    background-position: center, bottom left;
    background-size: cover, cover;
    align-items: flex-start;
    padding-top: 7.5rem;
    height: 75vh;
    max-height: 720px;
  }
`;

const Bg = styled.div`
  display: 1200px;
  margin: 0px auto;
  span {
    max-width: 40%;
  }
  h1{
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.5rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  .btn{
    --color: var(--dark);
    --bgcolor: var(--light);
    display: inline-block;
    white-space: nowrap;
    padding: .75rem 1.5rem;
    font-size: 1.15rem;
    font-weight: 600;
    color: #000;
    background: #fff;
    border-radius: .66rem;   
    transition: all .2s;   
    box-shadow: 0 .5rem 1.5rem -.5rem currentColor;
}

`;
