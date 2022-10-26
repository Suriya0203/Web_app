import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";
import main from './home'
import Dashboard from './dashboard';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom'
function App() {
  const Call=()=>{
    const accessToken='Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjBlYzEzYyIsImhhc2giOiJiMzRkNTdiNTU0ZDdkNTZmNDlmODNjMDgzZTI3YzhhZGVmOWI0NjczMjYyMzQ2MzNkMmJlMGQ2NTAzYTY5NGVmIiwiaWF0IjoxNjY2MjQ0MzMwLCJleHAiOjE2NjYyNTIzMzAsImp0aSI6IjA0MjExZjYzLTFkZDctNGZiNy1hODE2LTYyMGVjZjkxYTU1YiJ9.aWSlkLuhrhI0oUilHBnEzGiWdQ17o1I09u2TBsoCdLg6ox2xCwoCt7kG4BaUxGqZJybuS5ccfeLXpVPZfwyWZzoGyAPXXX9R8BqfXjWSPrpk2jw2IL4-UfyRNrA2kUwS3hd4W7SG1-DXBDRdDP8uMTevUBPPnOAMiL_hYq4URVU';
    const workflowId='workflow_Kv1JfvS';
    const  transactionId="checking1234"
      const hyperKycConfig = new window.HyperKycConfig(accessToken, workflowId, transactionId);
      const handler = (HyperKycResult) => {
          switch(HyperKycResult.status) {
            case "user_cancelled":
                // user cancelled
            break;
            case "error":
              // failure
            break;
            case "auto_approved":
            case "auto_declined":
            case "needs_review":
              // workflow success
            break;
              }
      }
      window.HyperKYCModule.launch(hyperKycConfig, handler); 
  }
  return (
    <BrowserRouter>
    <Routes>
    <Route 
            exact path = '/'
                      element = { < Dashboard /> }
                  />
                      <Route 
            exact path = '/flow'
                      element = { < Call /> }
                  />
    </Routes>
    </BrowserRouter>
  //   <button onClick={call}>
  //   Click me!
  // </button>
  );
}

export default App;
