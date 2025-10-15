import About from '@/component/template/About';
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
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:5000/services");
  const serviceData = await servicesResponse.json();

  return {
    props: {
      data: {
        services: serviceData
      }
    },
    revalidate: 60 * 60 * 12 // بازسازی هر 12 ساعت
  };
}

export default Index;
