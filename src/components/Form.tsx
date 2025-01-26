import { ChangeEvent, FormEvent, useState } from "react";
import { Send } from "./Buttons";
interface FormDataInteface {
  name: "";
  email: "";
  phone: "";
}

export default function Form() {
  const [formData, setFormData] = useState<FormDataInteface>({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://upskilling-egypt.com:3001/contact", {
        // if url in the task is failling - try to post to test server
        // install deps first with : npm i express cors bodyParser & run : node nodeserver.js
        // comment line 23 and uncomment line 27
        // const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.error("error: ", error);
    }
  };
  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        className="bg-[#CEDCFF] block rounded-[60px] py-3 px-5  my-5 mx-auto w-[375px]"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        className="bg-[#CEDCFF] block rounded-[60px] py-3 px-5  my-5 mx-auto w-[375px]"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone"
        className="bg-[#CEDCFF] block rounded-[60px] py-3 px-5 my-5  mx-auto w-[375px]"
        value={formData.phone}
        onChange={handleChange}
      />
      <Send />
    </form>
  );
}
