module.exports.GetUserParametersEx = (strName) => {
    console.log("Class Package Version Called GetUserParametersEx");
    let query = null;
    
    try
    {
        query = "SELECT I.USERGRPID, U.ID, U.NAME, U.PWD, I.GRADE, I.GRADE2, I.ALLOWEDPLANTID FROM USERGRPTBL T, USERGRPINFO I, USERTBL U " +
            "WHERE T.USERGRPID = I.USERGRPID AND U.ID = T.USERID ";
        
        if(strName != "")
                query += "and U.NAME='" + strName + "' ";
                
        query += "ORDER BY I.USERGRPID, T.USERID";
    }
    catch(e) 
    {
        console.log("Error in GetUserParametersEx or replying to a message");
    }
    return query;
}