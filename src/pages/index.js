import About from '@/component/template/About';
import Menu from '@/component/template/Menu';
import Offer from '@/component/template/Offer';
import Services from '@/component/template/Services';
import Slider from '@/component/template/Slider';

function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer/>
      <Menu data={data.menu}/>
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:5000/services");
  const serviceData = await servicesResponse.json();

   const menuResponse = await fetch("http://localhost:5000/menuItem");
  const menuData = await menuResponse.json();

  return {
    props: {
      data: {
        services: serviceData,
        menu: menuData,
      }
    },
    revalidate: 60 * 60 * 12 
  };
}

export default Index;
