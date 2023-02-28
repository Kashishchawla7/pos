import React, {
    useState,
    useEffect,
    useMemo,
    createContext,
    createRef,
    useContext,
  } from "react";
  import { makeStyles, withStyles } from "@material-ui/core/styles";
  import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    OutlinedInput as MuiOutlinedInput,
    Button
  } from "@material-ui/core";
  
  import Navbar from "../components/Navbar";
  import toast, { Toaster } from 'react-hot-toast';
  import { Link, useNavigate } from "react-router-dom";



  
  import { useDropzone } from "react-dropzone";
  import Dropzone from "react-dropzone";
  import axios from "axios";
  
  
  const useStyles = makeStyles((theme) => ({
    
    wrapper: {
      display: "flex",
      flexDirection: "column",
      margin: "5px 50px",
    },
    wrapper2: {
      display: "flex",
      flexDirection: "row",
      margin: "5px 50px ",
      marginLeft:"5px",
      width:'30%'
    },
    inputWrapper: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#FFFFFF88",
      padding: 8,
      borderRadius: 8,
    },
    inputWrapper2: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#FFFFFF88",
      padding: 8,
      borderRadius: 8,
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
    inputForm: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    imagePicker: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
  
    selection: {
      width: "100%",
    },
    select: {
      color: "#000000",
    },
  
    submit: {
      padding: "10px 50px",
      color: "#FFFFFF",
      borderRadius: 5,
      fontSize: "1.7rem",
      transition: "all .2s ease-in-out",
      "&:hover": {
        cursor: "pointer",
        textDecoration: "none",
        transform: "scale(1.03)",
      },
    },
    progressBar: {
      paddingRight: "10px",
      textAlign: "right",
    },
    progress: {
      background: "#ffffff88",
    },
  }));
  
  const OutlinedInputL = withStyles((theme) => ({
    notchedOutline: {
      borderColor: "#00000088 !important",
    },
  }))(MuiOutlinedInput);
  const OutlinedInputD = withStyles((theme) => ({
    notchedOutline: {
      borderColor: "#49b675AA !important",
    },
  }))(MuiOutlinedInput);
  
  const CustomTextFieldL = withStyles({
    root: {
      padding: 0,
      "& label.Mui-focused": {
        color: "#00000088",
      },
      "& label": {
        color: "#00000088",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#00000088",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#00000088",
        },
        "&:hover fieldset": {
          borderColor: "#00000088",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#00000088",
        },
      },
    },
  })(TextField);
  
  export default function AddUser(props) {
    let navigate = useNavigate();
    const [role, setRole] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [ages, setAges] = React.useState(["10", "20", "30", "40"]);
    const [name, setName] = React.useState("");
    const [files, setFiles] = useState([]);
    const [password, setPassword] = useState([]);
    const [cPassword, setcPassword] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const setOpen = () => {
    setIsOpen(!isOpen);
  };

    // const [data, setData] = useState([]);
  const data = [{
    id:1,
    value:"Admin"
  },{
    id:2,
    value:"Salesman"
  }]
  const submit= () =>{
    let body = JSON.parse(JSON.stringify({
      email,name,password,cPassword,role                                                                                                                     
    }));
    axios
      .post("http://localhost:3001/addUser", {
        body: body,
      })
      .then((response)=>{
        var msg = JSON.parse(JSON.stringify(response.data.result));
          if (response.status == 200) {
            toast.success(msg)
              console.log(msg)
          }
          else{
            toast.error(msg)
          }
      })
      console.log(body)
  }
    // useEffect(() => {
    //   axios
    //     .get("http://localhost:3001/categories")
    //     .then((response) => {
    //       console.log(response.data, "products");
    //       setData(response.data);
    //       console.log(typeof data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       //   this.setState({ error: "Error retreiving Data" });
    //     });
    // }, []);
  
    const {
      getRootProps,
      getInputProps,
      isFocused,
      isDragAccept,
      acceptedFiles,
    } = useDropzone({
      accept: { "image/*": [] },
      maxFiles: 1,
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )
        );
      }
    });
  
    const baseStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderRadius: 2,
      borderColor: "#00000088",
      borderStyle: "dashed",
      backgroundColor: "#FFFFFFAA",
      color: "#75B551",
      height: "100%",
      fontSize: "1.2rem",
      transition: "border .24s ease-in-out",
    };
  
    const focusedStyle = {
      borderColor: "#00000088",
    };
  
    const acceptStyle = {
      borderColor: "#00000088",
    };
  
    const style = useMemo(
      () => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
      }),
      [isFocused, isDragAccept]
    );
    const classes = useStyles();
    const add=()=>{
      navigate("/admin/addUser")
    }
    const update=()=>{
      navigate("/admin/updateUser")
    }
    const deletes=()=>{
      navigate("/admin/deleteUser")
    }
    return (
        <div className={classes.centered}>
        <div className={classes.center}>


        {/* <Navbar open={isOpen} setOpen={setOpen} style={{top:"0%"}}/> */}
     
                  
              <div style={({marginTop:'15vh'})}>
              
        <div className={classes.wrapper}>


          <div
            className={classes.inputWrapper}
            style={{
              boxShadow: "#75B551 0px 1px 4px",
              zIndex: 10,
            }}
          >
            <div style={({marginTop:'5vh'})}>
            <div className={classes.wrapper2}>
        <Button variant="contained" onClick={add}>Add User</Button>
              <Button variant="contained" color="primary" onClick={update}>Update User</Button>
              <Button variant="contained" color="secondary" onClick={deletes}>Delete User</Button>

              </div>
                {/* <h1>Add User</h1> */}
                </div>
            <div className={classes.inputForm}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "33%",
                  padding: 8,
                  maxHeight: "75vh",
                }}
              >
                <div className={classes.imagePicker}>
                  {files.length == 0 ? (
                    <div {...getRootProps({ style })}>
                      <input {...getInputProps()} />
                      <p>Upload User Image</p>
                    </div>
                  ) : (
                    <div {...getRootProps({ style })} className={classes.image}>
                      <img
                        src={files[0].preview}
                        style={{
                          height: "100%",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                        // Revoke data uri after image is loaded
                        onLoad={() => {
                          URL.revokeObjectURL(files[0].preview);
                        }}
                      />
                      <input {...getInputProps()} />
                    </div>
                  )}
                </div>
              </div>
              <div
                style={{
                  padding: 8,
                  display: "flex",
                  flexDirection: "column",
                  width: "66%",
                }}
              >
                <div style={{ width: "49%", marginRight: "1%" }}>
                  <CustomTextFieldL
                    style={{ flex: 1 }}
                    fullWidth
                    label="User Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ width: "100%", marginTop: 20 }}>
                    <FormControl
                      variant="outlined"
                      style={{ width: "49%", marginBottom: 10,marginRight:"2%" }}
                    >
                      <InputLabel
                        id="label"
                        style={{
                          color: "#00000088",
                        }}
                      >
                        Role
                      </InputLabel>
                      <Select
                        style={{
                          color: "#137dc4",
                        }}
                        
                        label="Role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        input={<OutlinedInputL label="role" />}
                      >
                        {data.map((item, index) => {
                          return <MenuItem value={item.id}>{item.value}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                    <FormControl
                      variant="outlined"
                      style={{ width: "49%", marginBottom: 10 }}
                    >
                      <CustomTextFieldL
                    style={{ flex: 1 }}
                    fullWidth
                    label="User Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                    </FormControl>
                  </div>
                </div>
  <div style={{ display: "flex", flexDirection: "row" ,width: "100%", marginTop: 10 }}>
  <CustomTextFieldL
                    type={password}
                    style={{ width: "49%",marginBottom:10 ,marginRight:"2%"}}
                    
                    label="User Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
  <CustomTextFieldL
                    type={password}
                    style={{ width: "49%",marginBottom:10 }}
                    
                    label="Confirm User Password"
                    variant="outlined"
                    value={cPassword}
                    onChange={(e) => {
                      setcPassword(e.target.value);
                    }}
                  />
  </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    width: "99%",
                  }}
                >
                  <div
                    className={classes.submit}
                    style={{
                      backgroundColor: "#75B551",
                    }}
                    onClick={submit}
                  >
                    Submit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
  