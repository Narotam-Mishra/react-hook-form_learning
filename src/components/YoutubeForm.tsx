
import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools'

let renderCount = 0;

type Formvalue = {
  username: string,
  email: string,
  channel: string
}

const YoutubeForm = () => {
  const form = useForm<Formvalue>();
  const { register, control, handleSubmit } = form;
  // const { name, ref, onChange, onBlur } = register("username");

  const onSubmit = (data: Formvalue) => {
    console.log('Form submitted!!', data);
  }

  renderCount++;
  return (
    <div>
      <h1>YouTube Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: 'Username is required',
            }
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


        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email", {
          pattern: {
            value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Invalid email format',
          }
        })} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel", {
          required: 'Channel name is required'
        })} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm