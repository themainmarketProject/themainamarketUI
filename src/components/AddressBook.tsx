import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { createStyles } from "@material-ui/styles";
import { Paper } from "./styled/index";
import Header from "./header/Header";
import SideBar from "./SideBar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Country, State } from "country-state-city";
import useForm from "../lib/useForm";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        padding: '150px 0',
      "& > *": {
        margin: theme.spacing(3),

      },
    },
    input: {
      width: "33em",
    },
    select: {
        width: "15em"
    },
    formControl: {
      margin: theme.spacing(3),
      minWidth: 120,
    },
    header : {
        margin: "20px auto",
    }
  })
);

export default function AddressBook() {
  const [name, setName] = React.useState("Composed TextField");
  const { inputs, handleChange, resetForm } = useForm({
    houseNumber: "",
    streetName: "",
    city: "",
    state: "",
    country: "",
  });
  const classes = useStyles();

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // stop the form from submitting
    console.log(inputs);
    const token = localStorage.getItem("myToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    let url = "http://mainmarketapi.herokuapp.com/api/Contact/add-user-contact";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(inputs),
      headers,
    })
      .then((response) => response)
      .then((json) => console.log(json))
      .catch((error) => console.log("Form submit error", error));
  };

  return (
    <div>
      <Header />
      <div className="content">
        <SideBar />
        <Paper>
          <div className="card">
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={submitHandler}
            >
              <h2 className="header">Register Your Contact Address</h2>
              <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">
                  House Number
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  name="houseNumber"
                  value={inputs.houseNumber}
                  onChange={handleChange}
                  label="House Number"
                  className={classes.input}
                />
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">Address</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  name="streetName"
                  value={inputs.streetName}
                  onChange={handleChange}
                  label="Address"
                  className={classes.input}
                />
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="country"
                  value={inputs.country}
                  onChange={handleChange}
                  label="Country"
                  className={classes.select}
                >
                  {Country.getAllCountries().map((country) => {
                    return (
                      <MenuItem value={country.name}>{country.name}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  State
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="state"
                  value={inputs.state}
                  onChange={handleChange}
                  label="State"
                  className={classes.select}
                >
                  {State.getAllStates().map((state) => {
                    return <MenuItem value={state.name}>{state.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">City</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  name="city"
                  value={inputs.city}
                  onChange={handleChange}
                  label="City"
                  className={classes.input}
                />
              </FormControl>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </Paper>
      </div>
    </div>
  );
}
