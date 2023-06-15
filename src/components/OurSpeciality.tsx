import SPEED from '../assets/Speed Improvement.svg';
import EXHAUST from '../assets/Exhaust.svg';
import ACCECORIES from '../assets/Accesories.svg';
import { CarouselItemSpeciality, CarouselSpeciality } from './SpecialitySlider';

export const OurSpeciality = () => {
  const items = [
    {
      id: 1,
      title: 'Seep Improvement',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.',
      illustration: SPEED,
    },
    {
      id: 2,
      title: 'Exhaust',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.',
      illustration: EXHAUST,
    },
    {
      id: 3,
      title: 'Accesories',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.',
      illustration: ACCECORIES,
    },
  ];
  return (
    <div className="bg-brand p-4 ">
      <div className="bg-white p-2 py-8">
        <h1 className="text-brand text-center text-3xl uppercase">
          Our Speciality
        </h1>
        <p className="text-sm text-center my-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam.
        </p>
        <CarouselSpeciality
          items={items}
          renderItem={({ item, isSnapPoint }) => (
            <CarouselItemSpeciality key={item.id} isSnapPoint={isSnapPoint}>
              <div className="px-4 flex flex-col gap-4 justify-center items-center">
                <img
                  className="w-24"
                  src={item.illustration}
                  alt={item.title}
                />
                <h1 className="text-xs text-black">{item.title}</h1>
                <p className="text-xs text-center text-gray-400 font-rubik font-light">
                  {item.description}
                </p>
              </div>
            </CarouselItemSpeciality>
          )}
        />
      </div>
    </div>
  );
};
