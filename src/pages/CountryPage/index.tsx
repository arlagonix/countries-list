import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Svg from "../../global/Svg";
import { useTheme } from "styled-components";
import { Layout, HeaderContainer, Emoji, Header, GoBack } from "./index.styled";

function CountryPage() {
  const theme = useTheme();
  return (
    <>
      <Navigation />
      <Layout>
        <HeaderContainer>
          <GoBack>
            <Svg icon="arrowBack" width="48" height="48" fill={theme.colors.countryPage.header} />
          </GoBack>
          <Header>Netherlands</Header>
          <Emoji>🇳🇱</Emoji>
        </HeaderContainer>

        <article>
          <h3>General information</h3>
          <table>
            <tbody>
              <tr>
                <th>Official name</th>
                <td>Kingdom of the Netherlands</td>
              </tr>
              <tr>
                <th>Common name</th>
                <td>Netherlands</td>
              </tr>
            </tbody>
          </table>
        </article>
      </Layout>
      <Footer />
    </>
  );
}

export default CountryPage;
