import About from '@/component/template/About';
import Menu from '@/component/template/Menu';
import Offer from '@/component/template/Offer';
import Services from '@/component/template/Services';
import Slider from '@/component/template/Slider';

import servicesData from "../../data/services.json"
import menuData from "../../data/menuItem.json";

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
  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
      },
    },
    revalidate: 60 * 60 * 12, // هر 12 ساعت
  };
}

export default Index;
