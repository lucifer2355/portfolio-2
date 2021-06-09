import React from "react";
import TextField from "@material-ui/core/TextField";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";

const styles = (theme) => ({
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "white",
  },
});

const contact = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-1 mb-10'>
        <Title title='CONTACT ME' />

        <div className='mt-10'>
          <h1 className='text-2xl font-extralight'>Get In Touch</h1>

          <div>
            <TextField
              id='outlined-basic'
              label='outlined'
              variant='outlined'
              color='secondary'
              style={{
                background: "transparent",
                outline: "none",
                border: "1px solid #ccc",
                borderRadius: 10,
                overflow: "hidden",
                
              }}
              InputProps={{
                style: {
                  color: "#ccc",
                  fontFamily: "sans-serif",
                  
                },
              }}
              InputLabelProps={{
                style: { color: "#ccc", fontSize: "1rem", },
              }}
              className='focus:border-0'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
