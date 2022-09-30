import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Cases } from '../components/Cases';
import { Blog } from '../components/Blog';
import { Team } from '../components/Team';
import { Callback } from '../components/Callback';
import { Footer } from '../components/Footer';
import { HomePageContainer } from '../components/Container/Container.styled';

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HomePageContainer>
          <Hero />
        </HomePageContainer>
        <About />
        <Cases />
        <Blog />
        <Team />
        <Callback />
        <Footer />
      </main>
    </>
  );
};
