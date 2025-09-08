import logo from "../assets/logo.png";


export default function AboutICSI() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-red-800 mb-8">
        About The ICSI
      </h2>

      {/* Image + Content */}
      <div className="max-w-5xl w-full flex flex-col items-center">
        {/* Image */}
        <img
          src={logo}
          alt="ICSI Building"
          className="rounded-md shadow-md w-full md:w-1/4 mb-6"
        />

        {/* Content */}
        <p className="text-gray-700 text-justify leading-relaxed max-w-4xl">
          The Institute of Company Secretaries of India (ICSI) is a premier
          professional body, established under an act of Parliament (The Company
          Secretaries Act, 1980), to regulate and develop the profession of
          Company Secretaries. ICSI functions under the jurisdiction of the
          Ministry of Corporate Affairs, Government of India. The Institute
          provides top-quality education to the students of Company Secretaries
          (CS) Course and best quality set standards to CS Members.
          <br />
          <br />
          Headquartered in New Delhi, the ICSI has a nationwide presence with
          four Regional Offices in New Delhi, Chennai, Kolkata and Mumbai, 73
          Chapter Offices spread all across the country and Centre for Corporate
          Governance, Research and Training (CCGRT) in Mumbai, Hyderabad and
          Kolkata. The Institute also has six overseas centres at Australia,
          Canada, Singapore, UAE, UK and USA. With over 75,000 members and
          around 200,000 students, the ICSI has the largest membership and
          student base of Company Secretaries in the world.
          <br />
          <br />
          As an inclusive body on the global governance map, the ICSI has been
          taking various initiatives for the growth and development of the
          profession. ICSI has been contributing to the initiatives of
          Government of India that have potential to excel the social-economic
          growth of India.
        </p>
      </div>
    </div>
  );
}
