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


import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Admin from "../screens/adminDashboard";




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
  centered : {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    // height:'100vh' /* Center the element horizontally */
  },
  center : {
    textAlign: 'center',
    width:'100%' /* Center the text within the child element */
    // height:'70%' /* Center the text within the child element */
  },
  inputWrapper: {
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

export default function AddItem(props) {
  let navigate = useNavigate();
  const [category, setCategory] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [name, setName] = React.useState("");
  const [files, setFiles] = useState([]);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const setOpen = () => {
    setIsOpen(!isOpen);
  };
  const submit= () =>{
    console.log(files)
    console.log(name)
    console.log(price)
    console.log(category)
    let formdata = new FormData()
    formdata.append('itemImage', files[0]); 
    formdata.append('name', name);
    formdata.append('price', price);
    formdata.append('category', category);

    apicall(formdata)
  }
    // let body = JSON.parse(JSON.stringify({
    //   files,name,price,category                                                                                                                     
    // }));
    const apicall = (formdata) =>{
    console.log(formdata)
    axios
      .post("http://localhost:3001/addItem",formdata, {
        // body:formdata,
        headers: { 'Content-Type': 'multipart/form-data' },
        data:formdata
      })
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

      console.log(acceptedFiles)
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


        {/* <Navbar open={isOpen} setOpen={setOpen} /> */}
        {/* <Admin/> */}
        
        
    <div style={{marginTop:'15vh'}}>
      
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
        <Button variant="contained" onClick={add}>Add Item</Button>
              <Button variant="contained" color="primary" onClick={update}>Update Item</Button>
              <Button variant="contained" color="secondary" onClick={deletes}>Delete Item</Button>

              </div>
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
                    <p>Upload Item Image</p>
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
                          {/* <aside >{thumbs}</aside> */}

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
                  label="Item Name"
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
                  <FormControl
                    variant="outlined"
                    style={{ width: "49%", marginBottom: 10 }}
                  >
                    <CustomTextFieldL
                  style={{ flex: 1 }}
                  fullWidth
                  label="Item Price"
                  variant="outlined"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
                  </FormControl>
                </div>
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
