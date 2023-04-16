import React, { useState, useEffect } from "react";
import { makeStyles, withStyles, TextField } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

const useStyles = makeStyles((theme) => ({

  wrapper: {
    alignItems: "center",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "7vh 0vh",
    // height: "100vh",
    justifyContent: "center",
  },
   centered : {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    // height:'100vh' /* Center the element horizontally */
  },
  center : {
    textAlign: 'center',
    width:'100%' /* Center the text within the child element */
  },
  inputWrapper: {
    width: "70%",
    height: "500px",
    display: "flex",
    flexDirection: "row",
    top: 10,
    padding: 8,
    borderRadius: 8,
    background: "#FFFFFF",
    boxShadow: "#75B551 0px 1px 4px",
  },
  inputForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "55%",
    //  paddingTop:50,
    // marginTop:50,
    // marginBottom:50,
    // marginRight:50,
    margin: 20,
    backgroundColor: "rgba(158, 225, 226, .40)",
    backdropFilter: "blur(5px)",
    borderRadius: 10,
  },
  logoForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5%",
    width: "50%",
    marginRight: "10px",
  },
  submit: {
    padding: 5,
    background: "#75B551",
    color: "white",
    fontSize: "1.5rem",
    transition: "all .2s ease-in-out",
    textAlign: "center",
    marginRight: 15,
    "&:hover": {
      cursor: "pointer",
      textDecoration: "none",
      transform: "scale(1.03)",
    },
  },
}));

const CustomTextField = withStyles({
  root: {
    padding: 0,
    "& label.Mui-focused": {
      color: "#00000088",
    },
    "& label": {
      color: "#00000088",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#75B551",
    },

    "& .MuiInput-underline:before": {
      borderBottomColor: " #75B551",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderBottomColor: "#75B551",
      },
      "&:hover fieldset": {
        borderColor: "#75B551",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#75B551",
      },
    },
  },
})(TextField);

export default function Success(props) {
  const location = useLocation();
  console.log(location.state) 
  const {
    id
  } = props;
  let navigate = useNavigate();
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div  className={classes.centered}>
    <div className={classes.center}>

      <div className={classes.wrapper}>
        <div className={classes.inputWrapper}>
          <div className={classes.logoForm}>
            <img
              src="http://craftizen.org/wp-content/uploads/2019/02/successful_payment_388054.png"
              style={{ height: "50%", width: "50%" }}
            />
          </div>
          <div className={classes.inputForm}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{ width: "50%", marginBottom: "5%", marginRight: "5%" }}
              >
                <CustomTextField
                  variant="outlined"
                  style={{ flex: 1 }}
                  fullWidth
                  readOnly
                  id="input-with-icon-textfield"
                  label="Username"
                  value={location.state.name}
            
                />
              </div>
              <div style={{ width: "50%", marginBottom: "5%" }}>
                <CustomTextField
                  variant="outlined"
                  style={{ flex: 1 }}
                  fullWidth
                  readOnly
                  id="input-with-icon-textfield"
                  label="Email"
                  value={location.state.email}
                 
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{ width: "50%", marginBottom: "5%", marginRight: "5%" }}
              >
                <CustomTextField
                  variant="outlined"
                  style={{ flex: 1 }}
                  fullWidth
                  id="input-with-icon-textfield"
                  label="Number"
                  readOnly={true}
                  value={location.state.number}
                  
                />
              </div>
              <div style={{ width: "50%", marginBottom: "10%" }}>
                <CustomTextField
                  variant="outlined"
                  style={{ flex: 1 }}
                  fullWidth
                  readOnly={true}
                  id="input-with-icon-textfield"
                  label="Credit"
                  value={location.state.credit}
                  
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "99%",
                marginTop: "30%",
              }}
            >
              <div
                className={classes.submit}
                style={{
                  backgroundColor: "#75B551",
                }}
                onClick={()=>{navigate("/home")}}
              >
                Return To Home
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
