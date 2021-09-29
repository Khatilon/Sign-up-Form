import React, {useState} from 'react'
import { ReactComponent as ErrorIcon } from './images/icon-error.svg'

function clsx(...str) {
  // console.log(str);
  return str.filter(Boolean).join(" ");
};

function Card({children, className}) {
  return (
    <div className={clsx("rounded-lg w-full shadow p-6 text-center", className)}>
      {children}
    </div>
  );
}

function TextField({ id, label, error }) {
  const [value, setValue] = useState('');
  console.log(error);
  // htmlFor will indicate to input's id and name indicate to form submit 
  return (
    <div>
      <div className={clsx("relative flex items-center", error && "text-red")}>
        <label
          htmlFor={id}
          className={clsx(
            "absolute px-3",
            "text-sm font-medium"
          )}>
          {value ? '' : label}
        </label> 
        <input
          type="text"
          className={clsx(
            "outline-none",
            "border w-full p-3 rounded",
            error ? "border-red" :  "border-blue-dark focus:border-blue border-opacity-10",
            )}
          id={id}
          name={id}
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        {error && (
           <ErrorIcon className="absolute right-0 w-6 mr-3"/>
        )}
      </div>
      {error && (
        <div className="flex justify-end text-sm text-red">
          <span>{error}</span>
        </div>
      )}
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

  const [formState, setFormState] = useState([
    { id: "first-name", error: false, errorMsg: "First Name cannot be empty", label: "First Name" },
    { id: "last-name", error: false, errorMsg: "Last Name cannot be empty", label: "Last Name" },
    { id: "email", error: false, errorMsg: "Looks like this is not an email", label: "Email" },
    { id: "password", error: false, errorMsg: "Password cannot be empty", label: "Password" },
  ]);

  /**
   * 
   * @param {Event} event 
   */
  
  function onSubmit(event) {

    event.preventDefault();

    const form = new FormData(event.target);
    // destruct data by input's name
    const data = Object.fromEntries(form.entries());
    // console.log(data);
    setFormState((formstate) => (
      formstate.map((state) => ({
        ...state,
        error: !Boolean(data[state.id])
      }))
    ));
  }

  return (
    // 這裡可以用container 也可以用max-w-7xl來代替
    <div className="h-full text-white px-4 gap-16 flex flex-col md:flex-row md:items-center container mx-auto">
      <article className="pt-24 md:pt-0 text-center md:text-left space-y-6 md:flex-1">
        <h1 className="font-bold text-3xl">Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </p>
      </article>

      <section className="grid gap-6 md:flex-1">
        <Card className="bg-blue">
          <p className="px-8">Try it free 7 days then $20/mo. thereafter</p>
        </Card>
        <Card className="bg-white text-blue-dark mb-32 md:mb-0">
          <form className="space-y-4" onSubmit={onSubmit}>
            {formState.map(({id, label, errorMsg, error}) => (
              <TextField
                key={id}
                id={id}
                label={label}
                error={error && errorMsg}
              />
            ))}
            <Button className="text-white">
              CLAIM YOUR FREE TRIAL
            </Button>
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
