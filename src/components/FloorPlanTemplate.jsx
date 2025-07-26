import PropTypes from 'prop-types';

function FloorPlanTemplate({ title, brands, contacts,image }) {
  return (
    <div className="w-full flex flex-col items-center sm:p-4 md:p-6 ">
      <div className="flex flex-col lg:flex-row mx-auto w-full md:w-10/12 items-center justify-center gap-10 md:gap-16">
        <div className="flex flex-col justify-start p-4 gap-2 w-full lg:w-auto items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl flex items-center w-full mb-4 uppercase tracking-wider justify-center text-center">
            {title}
          </h2>
          <div className="overflow-x-auto">
            <table className="border w-[330px] sm:w-[400px] md:w-[480px] rounded-lg">
              <tbody className="rounded-lg">
                <tr className="border border-[#1a1a1d]">
                  <th className="border-r font-semibold py-2 bg-[#1a1a1d] text-white border-[#1a1a1d]">Brands</th>
                  {/* <th className="bg-[#1a1a1d] font-semibold text-white">Contact</th> */}
                </tr>
                {brands.map((brand, index) => (
                  <tr key={index} className="border border-[#1a1a1d]">
                    <td className="uppercase py-3 px-2 md:px-6 border-r border-[#1a1a1d]">{brand}</td>
                    {/* <td className="px-2 md:px-6">{contacts[index]}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {title != "Kiosk (Atrium Level)" && <div className="min-h-56 md:min-h-[400px] w-full md:w-[467px]  overflow-hidden">
          <img src={image} className="object-cover" alt="" />
        </div>}
      </div>
    </div>
  );
}

FloorPlanTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  brands: PropTypes.arrayOf(PropTypes.string).isRequired,
  contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FloorPlanTemplate;
