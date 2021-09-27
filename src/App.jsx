import React, {useState} from 'react'

function clsx(...str) {
  console.log(str);
  return str.filter(Boolean).join(" ");
};

function Card({children, className}) {
  return (
    <div className={clsx("rounded-l w-full shadow p-4 text-center", className)}>
      {children}
    </div>
  );
}

function TextField({ id, label }) {
  const [value, setValue] = useState('');

  // htmlFor will indicate to input's id and name indicate to form submit 
  return (
    <div className="relative flex items-center">
      <label htmlFor={id} className="absolute px-3">
        {value ? '' : label}
      </label> 
      <input
        type="text"
        className="border w-full p-3 rounded"
        id={id}
        name={id}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </div>
  );
}

function Button({children, className}) {
  return (
    <div className={clsx("rounded-l w-full p-4 bg-green text-center shadow-solid", className)}>
      {children}
    </div>
  );
}

function App() {

  return (
    <div className="text-white px-4 space-y-8">
      {/* articel */}
      <article className="pt-24 text-center space-y-6">
        <h1 className="font-bold text-3xl">Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </p>
      </article>

      <section className="grid gap-6">
        {/* form title */}
        <Card className="bg-blue">
          <p className="px-8">Try it free 7 days then $20/mo. thereafter</p>
        </Card>
        {/* form */}
        <Card className="bg-white text-blue-dark pb-32">
          <form action="" className="space-y-4">
            {/* First Name */}
            <TextField id="first-name" label="First Name"/>
            {/* Last Name */}
            <TextField id="last-name" label="Last Name"/>
            {/* Email Address */}
            <TextField id="email" label="Email"/>
            {/* Password */}
            <TextField id="password" label="Password"/>
            {/* submit */}
            <Button className="text-white">
              CLAIM YOUR FREE TRIAL
            </Button>
            {/* terms */}
          </form>
        </Card>
      </section>
    </div>
  )
}

export default App
