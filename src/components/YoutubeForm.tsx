
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username")}
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
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm