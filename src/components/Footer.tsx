import LOGO_WHITE from '../assets/LogoWhite.svg';
import FOOTER_LEFT from '../assets/footerleft.svg';
import FOOTER_RIGHT from '../assets/footerright.svg';

const navigation = {
  footer: [
    { name: 'Who We Are', href: '#' },
    { name: 'Our Value', href: '#' },
    { name: 'The Perks', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <div className="bg-tosca-dark py-5">
      <div className="p-4 mb-20">
        <img className="pb-3" src={LOGO_WHITE} alt="logo-white" />
        <div className="bg-white p-6 my-8">
          <div>
            <select
              id="dropdown"
              name="dropdown"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand sm:text-sm sm:leading-6"
              defaultValue="TECHNOLOGY DEPARTMENT"
            >
              <option>TECHNOLOGY DEPARTMENT</option>
              <option>TECHNOLOGY DEPARTMENT 2</option>
              <option>TECHNOLOGY DEPARTMENT 3</option>
            </select>
          </div>
          <h6 className="text-brand text-sm max-w-[200px] pt-8">
            Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa
            Barat
          </h6>
        </div>
      </div>
      <div className="relative py-8 ">
        <div className="mt-10 md:mt-0 p-4">
          <ul role="list" className="mt-6 space-y-4 absolute z-20 bottom-12">
            {navigation.footer.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-light leading-6 text-gray-300 hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <img
          className="absolute bottom-0"
          src={FOOTER_LEFT}
          alt="footer-left"
        />
        <img
          className="absolute bottom-0"
          src={FOOTER_RIGHT}
          alt="footer-right"
        />
      </div>
    </div>
  );
};
