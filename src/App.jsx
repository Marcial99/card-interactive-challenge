import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    number: "",
    ccv: "",
    month: "",
    year: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "number") {
      if (e.target.value.length > 28) return;
      let number = e.target.value;
      let num = Array.from(number);
      if (num.length % 4 === 0 && num.length <= 27) {
        number += "    ";
        console.log(num.length);
        console.log(number);
      }
      setForm({ ...form, number: number });
      return;
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-desktop bg-no-repeat min-w-full min-h-screen flex flex-row items-center justify-center gap-20 font-space">
      <div className="flex flex-col gap-5">
        <div className="mr-20 relative">
          <img src="/images/bg-card-front.png" alt="" />
          <div className=" absolute bottom-20 px-6 text-white text-3xl  font-light">
            {form.number}
          </div>
          <div className=" absolute flex flex-row justify-between   bottom-10 px-6 w-full">
            <div className="text-white">{form.name}</div>
            <div className="text-white">
              {form.month}/{form.year}
            </div>
          </div>
        </div>
        <div className="ml-20 relative">
          <img src="/images/bg-card-back.png" alt="" className="relative" />
          <div className="absolute top-[110px] right-16 text-white ">
            {form.ccv}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/4">
        <div className="mb-5">
          <label htmlFor="name" className="uppercase text-sm block">
            Cardholder name
          </label>
          <input
            type="text"
            className=" px-2 py-1 border-black border-[1px] rounded-lg w-full"
            onChange={handleChange}
            id="name"
            name="name"
            value={form.name}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="number" className="uppercase text-sm block">
            Card Number
          </label>
          <input
            type="text"
            className=" px-2 py-1 border-black border-[1px] rounded-lg w-full"
            onChange={handleChange}
            id="number"
            name="number"
            value={form.number}
          />
        </div>
        <div className="mb-5 grid grid-cols-3 gap-3">
          <div className="col-span-2 uppercase text-sm block bg-red-50">
            EXP. DATE (MM/YY)
          </div>
          <div className="col-span-1 uppercase text-sm block">CCV</div>
          <div className="col-span-1">
            <input
              type="text"
              className=" px-2 py-1 border-black border-[1px] rounded-lg w-full"
              onChange={handleChange}
              id="month"
              name="month"
              value={form.month}
              placeholder="MM"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              className=" px-2 py-1 border-black border-[1px] rounded-lg  w-full"
              onChange={handleChange}
              id="year"
              name="year"
              value={form.yaer}
              placeholder="YY"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              className=" px-2 py-1 border-black border-[1px] rounded-lg  w-full"
              onChange={handleChange}
              id="ccv"
              name="ccv"
              value={form.ccv}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
