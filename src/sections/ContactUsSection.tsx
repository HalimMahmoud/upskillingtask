/* eslint-disable no-irregular-whitespace */
import ContactImage from "../assets/Group 539.svg";
import MailIcon from "../assets/ic_round-mail.svg";
import PhoneIcon from "../assets/ic_round-call.svg";
import Form from "../components/Form";
export default function ContactUsSection() {
  return (
    <div className="bg-white">
      <img
        src={ContactImage}
        className="py-12 mx-auto w-[45%] lg:w-auto"
        alt="contact us"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-15 container mx-auto">
        <Form />
        <div className="my-auto">
          <div className="p-5 mx-auto w-fit  lg:ml-8">
            <img className="inline pr-5" src={MailIcon} alt="mail icon" />
            <span className="inline">upskilling.eg1@gmail.com</span>
          </div>

          <div className="p-5 mx-auto w-fit lg:ml-8">
            <img className="inline  pr-5" src={PhoneIcon} alt="phone icon" />
            <p className="inline">{`+20 115 493 2137`}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#0C1E49] h-[145px]"></div>
    </div>
  );
}
