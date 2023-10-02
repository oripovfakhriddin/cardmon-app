import { Suspense, lazy, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { v4 as randomId } from "uuid"

import { otherDebts as constDebts} from "./constants/const";
import { otherDebt as constDebt } from "./constants/const";
import { LOCALSTORAGEOTHERSKEY } from "./constants/const";


import Layout from "./components/main-layout/layout/layout";
import LoginPage from "./pages/LoginPage";
import { toast } from "react-toastify";

const HomePage = lazy(() => import("./pages/HomePage"));
const MyDebtsPage = lazy(() => import("./pages/MyDebtsPage"));
const OthersDebtsPage = lazy(() => import("./pages/OthersDebtsPage"));
const OtherDebtPage = lazy(() => import("./pages/OtherDebtPage"));

function App() {
  const [otherDebts, setOtherDebts] = useState(JSON.parse(localStorage.getItem(LOCALSTORAGEOTHERSKEY)) || constDebts)
  const [otherDebt, setOtherDebt] = useState(constDebt)
  const [searchOtherDebts, setSearchOtherDebts] = useState("");
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const [validated, setValidated] = useState(false);


const handleSearchOtherDebts = (e) => {
  setSearchOtherDebts(e.target.value.trim().toLowerCase());
}


const handleClose = () => {
  setShow(false);
};
const handleShow = () => {
  setShow(true);
  setSelected(null);
  setOtherDebt(constDebt)
}

const handleOtherDebtor = (e) => {
  console.log(e.target.id);
  console.log(e.target.value);
  setOtherDebt( { ...otherDebt, [e.target.id]: e.target.value } )
  console.log(otherDebt);
}

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (form.checkValidity()) {
    let newOtherDebts
    let newOtherDebt = {...otherDebt, amount: +otherDebt.amount, id: randomId()}
    if (selected === null) {
      newOtherDebts = [ ...otherDebts, newOtherDebt ];
      toast.success("Added succesfuly", {
        autoClose: 1500,
      });
    } else {
      newOtherDebts = otherDebts.map((otherDebt)=>{
        if (otherDebt.id === selected) {
          return newOtherDebt;
        }
        else {
          return otherDebt;
        }
      });
      toast.info("Edited succesfuly", {
        autoClose: 1500,
      })
    }
    
    localStorage.setItem(LOCALSTORAGEOTHERSKEY, JSON.stringify(newOtherDebts));
    setOtherDebts(newOtherDebts)
    handleClose()
  }

  setValidated(true);
};

const editOtherDebt = (id) => {
  let otherDebt = otherDebts.find((otherDebt)=>otherDebt.id === id)
  setOtherDebt(otherDebt)
  setSelected(id);
  setShow(true);
}

const deleteOtherDebt = (id) => {
  let checkDelete = window.confirm("Are you sure you want to delete this debtor?")
  if (checkDelete) {
    let newOtherDebts = otherDebts.filter((otherDebt)=> otherDebt.id !== id);
    localStorage.setItem(LOCALSTORAGEOTHERSKEY, JSON.stringify(newOtherDebts));
    setOtherDebts(newOtherDebts)
    toast.success("Deleted succesfuly", {
      autoClose: 1500,
    })
  }
}

  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="home" element={<HomePage />} />
            <Route path="mydebts" element={<MyDebtsPage />} />
            <Route path="othersdebts" element={ <OthersDebtsPage 
                otherDebts={otherDebts} 
                otherDebt={otherDebt}
                searchOtherDebts = { searchOtherDebts }
                show =  { show }
                selected = { selected }
                validated = { validated }
                handleOtherDebtor={handleOtherDebtor}
                handleSubmit = { handleSubmit }
                handleClose = { handleClose }
                handleShow = { handleShow }
                editOtherDebt = { editOtherDebt }
                deleteOtherDebt = { deleteOtherDebt }
                handleSearchOtherDebts = { handleSearchOtherDebts }  />} />
            <Route path="othersdebts/:othersDebtsId" element={ <OtherDebtPage 
                otherDebts = { otherDebts } /> }  />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
