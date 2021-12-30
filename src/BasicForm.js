import { Formik } from "formik";

export function BasicForm() {
  return (
    <div>
      <Formik intialValues={{ email: "sree@gmail.com", passowrd: "" }}
      onSubmit={(values)=>{
          console.log("onSubmit", values)
      }}
      >
        {(formik) => (
          <form>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
            />
            <input
              type="Password"
              id="password"
              name="passowrd"
              value={formik.values.passowrd}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your password"
            />
            <button>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
