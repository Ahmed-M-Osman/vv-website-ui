import { useState } from "react";

const Input = ({ label, name, type = "text", ...rest }) => {

    return (
      <div className="relative z-0 w-full mb-12">
        <input
          {...rest}
          id={name}
          type={type}
          placeholder=" "
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label
          htmlFor={name}
          className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >
          {label}
        </label>
      </div>
    );
  };

function Form() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="w-full h-screen flex items-center justify-center m-12">
          <div className="max-w-md w-full m-auto mt-12 p-5 bg-white border rounded-xl">
            <strong className=" tracking-wide font-bold text-xl text-gray-600">Send us a message</strong>
            <form className="mt-5 pt-5">
              <Input
                label="Name"
                name="name"
                type="text"
                value={name}
                onChange={(v) => setName(v.target.value)}
              />
                <Input
                label="Email"
                name="email"
                type="textarea"
                value={email}
                onChange={(v) => setEmail(v.target.value)}
              />

                <div className="relative z-0 w-full mb-8">
                        <textarea
                        
                        id="Message"
                        placeholder=" "
                        rows='7'
                        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label
                        htmlFor="Message"
                        className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                        Message
                        </label>
                    </div>

             

              <button
                type="submit"
                className="tracking-widest text-sm bg-blue-500 px-4 py-2 rounded-full font-bold text-white hover:text-black hover:bg-white active:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )
    }


  export default Form;