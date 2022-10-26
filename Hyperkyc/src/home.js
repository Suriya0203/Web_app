function main(){
  const accessToken='Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImE0NmIxMCIsImhhc2giOiI1MGY4ZjAzNTZiNWI1YzE2ODM2OTE5NzBkYTc0OTIwYzQwYjNiN2I1MjlmN2Q3MWY3MTkzZDdmNzhiMjUxNGMwIiwiaWF0IjoxNjY2MTYzNTQwLCJleHAiOjE2NjYyNDk5NDAsImp0aSI6IjY5ZGUzNzhhLTA2NDctNDRmMS05NmI4LTU0N2Q5MTQzMGViMiJ9.G-eGcdbvZZX5yqYSEIB_ZXRYy5L7K-V6E8RleEb_Ut58zLOVfTGaSa3V654YD8AxI1pwWzM0WUZmVF9rwpugrYT2p43E0vBI3dcd5R0kKx4m2_d5Z5dRxWl26QsJARJAk7Ak8coRjiXsJQT-EJ828VJeonh0X-hiv2cQZk3Xzo8';
  const workflowId='digi-ocr-flow';
  const  transactionId="1234567suriya"
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
export default main