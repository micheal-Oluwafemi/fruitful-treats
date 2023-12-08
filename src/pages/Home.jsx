import Showcase from '../components/Showcase';
import Enjoy from '../components/Enjoy';
import About from '../components/About';
import Popular from '../components/Popular';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = ({ theme }) => {
  return (
    <div className='md:px-20 xl:px-[35rem] px-4 w-full'>
      <Showcase theme={theme} />
      <Enjoy />
      <About theme={theme} />
      <Popular />
      <CTA />
      <Footer theme={theme} />
    </div>
  );
};

export default Home;
