import styled from 'styled-components';
import SavingGoalContent from './savingGoal/SavingGoalContent';

const MainPage = (): JSX.Element => {
  return (
    <>
      <Header>
        <Logo src={logoSrc} alt="Origin Logo" />
      </Header>
      <Body>
        <Text>
          {'Let’s'} plan your <strong>saving goal.</strong>
        </Text>
        <SavingGoalContent />
      </Body>
    </>
  );
};

const Header = styled.header`
  background: var(--neutral-white);
  height: 4vh;
  padding: 3vh;
`;
const Body = styled.section`
  background: var(--background);
  height: 90vh;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Logo = styled.img`
  height: 4vh;
`;
const Text = styled.p`
  color: var(--brand-color-primary);
  font-size: 1.2rem;
  line-height: 1.5em;
  margin: 4vh 0;
  @media (max-width: 550px) {
    margin: 3vh 0;
  }
`;
const logoSrc =
  'https://ext.frontusercontent.com/v1/proxy/Ve2QXYcGIL0WAPNi34UXtWshIk_YvTdf8o2BIKDtCU-sdX2X1KAvXCdLBxplaaOVw5dn-TB4QZgjW1ffKcXHDDnvaupD5-YXn20uJDDI_o1lV_VEoYT0hhF2IK_tNpCfSiZHh9o0RimrjUzliga22lIVnTjJP9oanJsrqsCZeM_LA0pIIldx5sJQd_FpMl0xWrplFMX8PL_JUh4Dbn7y18jqcIudvXzWOFUgH1oHbRKFoDsT14fZPyXT5MtEFIcZbbPviJMXS78C8OPihFRRNkthxXI2hTpay6exO4gjiv2V-HC82ZTECq6hwAaTANyR7H7-EumP3MQHzSqR#https://lh6.googleusercontent.com/iiBXDcPwarA9YveeS5NP_VFxpXO5NyD-bnAnj5_ycPxJCgeFf1DuW5G4RAf-FNMNNCzvi80npgVT8vuStGXmtDP982zRQLKI_yN5ecJ5-y3zMsZJNb3afpuOt6K_6_Y8IWFf0Xea';

export default MainPage;
