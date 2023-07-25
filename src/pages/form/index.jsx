import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const formItems = [
    {
      label: "First Name",
      name: "firstName",
      var: "firstName",
      cssClass: { gridColumn: "span 2" },
    },
    {
      label: "Last Name",
      name: "lasttName",
      var: "lasttName",
      cssClass: { gridColumn: "span 2" },
    },
    {
      label: "Email",
      name: "email",
      var: "email",
      cssClass: { gridColumn: "span 4" },
    },
    {
      label: "Contact Number",
      name: "contact",
      var: "contact",
      cssClass: { gridColumn: "span 4" },
    },
    {
      label: "Address 1",
      name: "address1",
      var: "address1",
      cssClass: { gridColumn: "span 4" },
    },
    {
      label: "Address 2",
      name: "address2",
      var: "address2",
      cssClass: { gridColumn: "span 4" },
    },
  ];
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("* This Field Is Required"),
    lastName: yup.string().required("* This Field Is Required"),
    email: yup
      .string()
      .email("* The Email  is not valid")
      .required("* This Field Is Required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "* The Phone number is not valid")
      .required("* This Field Is Required"),
    address1: yup.string().required("* This Field Is Required"),
    address2: yup.string().required("* This Field Is Required"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subTitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          handleReset,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {formItems.map((res) => (
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label={res.label}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values[res.var]}
                  name={res.name}
                  error={!!touched[res.var] && !!errors[res.var]}
                  helperText={touched[res.var] && errors[res.var]}
                  sx={res.cssClass}
                />
              ))}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
              <Button
                sx={{ ml: 1 }}
                type="button"
                color="info"
                variant="contained"
                onClick={handleReset}
              >
                Reset Form
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
