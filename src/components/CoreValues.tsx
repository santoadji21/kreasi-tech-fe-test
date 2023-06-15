import COREVALUE_IMG from '../assets/core-values.svg';

export const CoreValues = () => {
  const coreValues = [
    {
      id: 1,
      title: 'Dedication',
      description:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
    },
    {
      id: 2,
      title: 'Intellectual Honesty',
      description:
        'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.',
    },
    {
      id: 3,
      title: 'Curiosity',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
    },
  ];
  return (
    <div className="py-4 bg-[#F8F8F8]">
      <h1 className="text-center text-brand text-4xl">Our Core Values</h1>
      <p className="px-4 mt-3 text-sm text-gray-400 font-light">
        Ridiculus laoreet libero pretium et, sit vel elementum convallis fames.
        Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit. In
        mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet
        enim.
      </p>

      {coreValues.map((coreValue) => (
        <div className="px-4 mt-8" key={coreValue.id}>
          <div className="flex items-start gap-2">
            <div className="w-1/5 h-1 bg-black max-w-[20px] mt-3" />
            <div>
              <h1 className="text-2xl text-black">{coreValue.title}</h1>
              <p className="text-sm text-gray-400 font-light">
                {coreValue.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      <img className="w-full mt-3" src={COREVALUE_IMG} alt="Core Value" />
    </div>
  );
};
