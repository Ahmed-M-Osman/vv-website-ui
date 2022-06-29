import { useState } from "react";
import { useMutation, gql } from '@apollo/client';

const CREATE_POST = gql`
  mutation createFormSubmission(
    $email: String!
    $name: String!
    $body: String!
  ) {
    createFormSubmission(data: { email: $email, name: $name, body: $body }) {
      data {
        attributes {
          name
          email
          body
          status
        }
      }
    }
  }
`;

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

    // const [email, setEmail] = useState("");
    // const [name, setName] = useState("");
    // const [message, setMessage] = useState("");
    const [formPost, setFormPost] = useState({
      email: "",
      name: "",
      body: ""
  });

  const [createForm, {data, loading, error}] = useMutation(CREATE_POST, {
    variables: {
      email: formPost.email,
      name: formPost.name,
      body: formPost.body,
    },
  });



    return (
        <div className="md:w-full w-50 h-screen flex items-center justify-center m-12">
          <div className="max-w-md w-full m-auto mt-12 p-5 bg-white border rounded-xl">
            <strong className="tracking-wide font-bold text-xl text-gray-600">Send us a message</strong>
            <form className="flex-col mt-5 pt-5">
              <Input
                label="Name"
                name="name"
                type="text"
                value={formPost.name}
                onChange={(v) => setFormPost({...formPost, name: v.target.value})}
                
              />
                <Input
                label="Email"
                name="email"
                type="textarea"
                value={formPost.email}
                onChange={(v) => setFormPost({...formPost, email: v.target.value})}
              />

                <div className="relative z-0 w-full mb-8">
                        <textarea
                        
                        id="Message"
                        placeholder=" "
                        rows='7'
                        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        value={formPost.body}
                        onChange={(v) => setFormPost({...formPost, body: v.target.value})}
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
                className="tracking-widest text-sm bg-blue-500 justify-self-center md:px-4 py-2 rounded-full font-bold text-white hover:text-black hover:bg-white active:bg-blue-700"
                onClick={() => createForm()}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )
    }


  export default Form;