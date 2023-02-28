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
  
  import Navbar from "./Navbar";
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
    //   width:'100%'
    //   border:"5px solid black"
    },
    wrapper2: {
      display: "flex",
      flexDirection: "row",
      margin: "5px 50px ",
    //   marginLeft:"5px",
    //   width:'30%'
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
    centered : {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // height:'100vh' /* Center the element horizontally */
      },
      center : {
        textAlign: 'center',
        width:'50%' /* Center the text within the child element */
      }
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
  
  export default function DeleteItem(props) {
    let navigate = useNavigate();
    const [category, setCategory] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [target, setTarget] = React.useState("");
    const [ages, setAges] = React.useState(["10", "20", "30", "40"]);
    const [name, setName] = React.useState("");
    const [files, setFiles] = useState([]);
    const [data, setData] = useState([]);
    const [password, setPassword] = useState("");
    const [cPassword, setcPassword] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const setOpen = () => {
    setIsOpen(!isOpen);
  };

    // const [data, setData] = useState([]);

  const submit= () =>{
    let body = JSON.parse(JSON.stringify({
      name,password,target,category  
    }))
    ;
    console.log(body);
    axios
      .post("http://localhost:3001/deleteUser", {
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
   
  useEffect(() => {
    axios
      .get("http://localhost:3001/categories")
      .then((response) => {
        console.log(response.data, "products");
        setData(response.data);
        console.log(typeof data);
      })
      .catch((error) => {
        console.log(error);
        //   this.setState({ error: "Error retreiving Data" });
      });
  }, []);
  
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
      navigate("/admin/addItem")
    }
    const update=()=>{
      navigate("/admin/updateItem")
    }
    const deletes=()=>{
      navigate("/admin/deleteItem")
    }
    return (
        <div className={classes.centered}>
        <div className={classes.center}>

        {/* <Navbar open={isOpen} setOpen={setOpen} style={{top:"0%"}}/> */}
     
              <div style={({marginTop:'15vh'})}>
              <div
            className={classes.inputWrapper}
            style={{
              boxShadow: "#75B551 0px 1px 4px",
              zIndex: 10,
            }}
          >
              <div style={({marginTop:'5vh'})}>
              <div className={classes.wrapper2}>
        <Button variant="contained" onClick={add}>Add Item</Button>
              <Button variant="contained" color="primary" onClick={update}>Update Item</Button>
              <Button variant="contained" color="secondary" onClick={deletes}>Delete Item</Button>
                </div>
                </div>
        <div className={classes.wrapper}>

          
              <div
                style={{
                  padding: 8,
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <div style={{ width: "100%", marginRight: "1%" }}>
                  <CustomTextFieldL
                    style={{ flex: 1 }}
                    fullWidth
                    label="Admin Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row",marginTop:10 }}>
                  {/* <div style={{ width: "100%", marginTop: 20 }}> */}
                    <FormControl
                      variant="outlined"
                      style={{ width: "49%", flex:1,marginRight:10}}
                    >
                      <InputLabel
                        id="label"
                        style={{
                          color: "#00000088",
                        }}
                      >
                        Category
                      </InputLabel>
                      <Select
                        style={{
                          color: "#137dc4",
                        }}
                        
                        label="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        input={<OutlinedInputL label="Category" />}
                      >
                        {data.map((item, index) => {
                          return <MenuItem value={item.CATEGORY_ID}>{item.CATEGORY_NAME}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                    {/* </div> */}
                  <CustomTextFieldL
                    style={{ flex: 1 ,width:"49%"}}
                    fullWidth
                    label="Item Name"
                    variant="outlined"
                    value={target}
                    onChange={(e) => {
                      setTarget(e.target.value);
                    }}
                  />
                  </div>
  <div style={{ display: "flex", flexDirection: "row" ,width: "100%", marginTop: 10 }}>
  <CustomTextFieldL
                    type={password}
                    style={{ width: "100%",marginBottom:10 }}
                    
                    label="Admin Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
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
      
    );
  }
  