
import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools'

let renderCount = 0;

type Formvalue = {
  username: string,
  email: string,
  channel: string
}

const YoutubeForm = () => {
  const form = useForm<Formvalue>({
    // defaultValues: {
    //   username: "tsUser",
    //   email: "",
    //   channel: "",
    // }

    defaultValues: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json();
      return {
        username: "Batman",
        email: data.email,
        channel: "",
      }
    }
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState

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
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm