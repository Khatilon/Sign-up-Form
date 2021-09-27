import React, {useState} from 'react'

function clsx(...str) {
  console.log(str);
  return str.filter(Boolean).join(" ");
};

function Card({children, className}) {
  return (
    <div className={clsx("rounded-lg w-full shadow p-6 text-center", className)}>
      {children}
    </div>
  );
}

function TextField({ id, label }) {
  const [value, setValue] = useState('');

  // htmlFor will indicate to input's id and name indicate to form submit 
  return (
    <div className="relative flex items-center">
      <label htmlFor={id} className="absolute px-3 text-sm font-medium">
        {value ? '' : label}
      </label> 
      <input
        type="text"
        className={clsx(
          "outline-none",
          "border border-opacity-10 w-full p-3 rounded",
          "border-blue-dark focus:border-blue"
          )}
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
    // 若button沒有預設的type, 則點下去後會換頁, 並在url上呈現form內的資料
    <button className={clsx("rounded-l w-full p-4 bg-green text-center shadow-solid", className)}>
      {children}
    </button>
  );
}

function App() {

  return (
    // 這裡可以用container 也可以用max-w-7xl來代替
    <div className="h-full text-white px-4 gap-16 flex flex-col md:flex-row md:items-center container mx-auto">
      {/* articel */}
      <article className="pt-24 md:pt-0 text-center md:text-left space-y-6 md:flex-1">
        <h1 className="font-bold text-3xl">Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </p>
      </article>

      <section className="grid gap-6 md:flex-1">
        {/* form title */}
        <Card className="bg-blue">
          <p className="px-8">Try it free 7 days then $20/mo. thereafter</p>
        </Card>
        {/* form */}
        <Card className="bg-white text-blue-dark mb-32 md:mb-0">
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
            <div>
              <p className="text-gray text-xs px-4">
                By clicking the button, you are agreeing to our
                <a href="#" className="text-red font-bold opacity-100">
                  Terms and 
                  Services
                </a>
              </p>
            </div>
          </form>
        </Card>
      </section>
    </div>
  )
}

export default App
