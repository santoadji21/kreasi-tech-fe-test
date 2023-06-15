import { CoreValues } from './components/CoreValues';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import { OurSpeciality } from './components/OurSpeciality';
import { Carousel, CarouselItem } from './components/Slider';

function App() {
  const items = [
    {
      id: 1,
      title: 'Who we are',
      subTitle: 'Technology Company',
      description:
        'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
      id: 2,
      title: 'What we do',
      subTitle: 'Professional Brand Management',
      description:
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    },
    {
      id: 3,
      title: 'How we do',
      subTitle: 'Strategize, Design, Collaborate',
      description:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.',
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mb-5 mt-60 relative">
        <Carousel
          items={items}
          renderItem={({ item, isSnapPoint }) => (
            <CarouselItem key={item.id} isSnapPoint={isSnapPoint}>
              <div className="px-4 flex flex-col gap-3">
                <h1 className="text-2xl text-brand">{item.title}</h1>
                <h6 className="text-md ">{item.subTitle}</h6>
                <p className="text-xs leading-5 text-gray-400">
                  {item.description}
                </p>
              </div>
            </CarouselItem>
          )}
        />
      </div>
      <CoreValues />
      <OurSpeciality />
      <Footer />
    </div>
  );
}

export default App;
