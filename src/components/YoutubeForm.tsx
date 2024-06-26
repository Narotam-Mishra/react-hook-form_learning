
import { useForm, useFieldArray } from "react-hook-form"
import { DevTool } from '@hookform/devtools'

let renderCount = 0;

type Formvalue = {
  username: string,
  email: string,
  channel: string,
  social: {
    twitter: string,
    facebook: string
  },
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[];
  age: number;
  dob: Date
}

const YoutubeForm = () => {
  const form = useForm<Formvalue>({
    defaultValues: {
      username: "tsUser",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: ""
      },
      phoneNumbers: ["", ""],
      phNumbers: [{ number: ''}],
      age: 0,
      dob: new Date()
    }

    // defaultValues: async () => {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    //   const data = await response.json();
    //   return {
    //     username: "Batman",
    //     email: data.email,
    //     channel: "",
    //   }
    // }
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState

  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control
  })

  // const { name, ref, onChange, onBlur } = register("username");

  const onSubmit = (data: Formvalue) => {
    console.log('Form submitted!!', data);
  }

  renderCount++;
  return (
    <div>
      <h1>YouTube Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          {/* <input
          type="text"
          id="username"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        /> */}

          <p className="error">{errors.username?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
              // validate: (fieldValue) => {
              //   return (
              //     fieldValue !== "admin@example.com" ||
              //     "Enter a different email address"
              //   );
              // },

              validate: {
                notAdmin: (fieldValue) => {
                  return(
                    fieldValue !== "admin@example.com" || "Enter a different email address"
                  );
                },

                notBlackListed : (fieldValue) => {
                  return !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
                }
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: "Channel name is required",
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            {...register("social.twitter")}
          />
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook")}
          />
        </div>

        <div className="form-control">
          <label htmlFor="primary-phone">Primary Phone Number</label>
          <input
            type="text"
            id="facebook"
            {...register("phoneNumbers.0")}
          />
        </div>

        <div className="form-control">
          <label htmlFor="primary-phone">Secondary Phone Number</label>
          <input
            type="text"
            id="facebook"
            {...register("phoneNumbers.1")}
          />
        </div>

        <div>
          <label htmlFor="">List of phone numbers</label>
          <div>
            {
              fields.map((field, index) => {
                // here field refers to each object in the values array
                return (<div className="form-control" key={field.id}>
                  <input type="text" {...register(`phNumbers.${index}.number` as const)} />
                  {
                    index > 0 && (
                      <button type="button" onClick={() => remove(index)}>Remove</button>
                    )
                  }
                </div>)
              })
            }
            <button type="button" onClick={() => append({ number: "" })}>Add phone number</button>
          </div>
        </div>

        {/* age field */}
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: "Age is required",
            })}
          />
          <p className="error">{errors.age?.message}</p>
        </div>

        {/* adding DOB field */}
        <div className="form-control">
          <label htmlFor="dob">Date of birth</label>
          <input
            type="date"
            id="dob"
            {...register("dob", {
              valueAsDate: true,
              required: "DOB is required",
            })}
          />
          <p className="error">{errors.dob?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm