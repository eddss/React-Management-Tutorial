module.exports.InsertFacilityHistory2 = (facilityhistoryID, nFacilityID, strAddDate, strName, nDivision, strUserName,
    strWorkPart, strWorkUser, strStartDate, strEndDate, strEtc) => {
    console.log("Class Package Version Called InsertFacilityHistory2");
    let query = null;
    let strAddDate1, strStartDate1, strEndDate1;

    if(strAddDate == "")
        strAddDate1 = "NULL, ";
    else
        strAddDate1 = "DATE_FORMAT( '" + strAddDate + "', '%Y-%m-%d %H:%i:%s' ), ";

    if(strStartDate == "")
        strStartDate1 = "NULL, ";
    else
        strStartDate1 = "DATE_FORMAT( '" + strStartDate + "', '%Y-%m-%d %H:%i:%s' ), ";

    if(strEndDate == "")
        strEndDate1 = "NULL, ";
    else
        strEndDate1 = "DATE_FORMAT( '" + strEndDate + "', '%Y-%m-%d %H:%i:%s' ), ";

    try
    {
        query =
        "insert into FACILITY_HISTORY " +
        "values ( " + facilityhistoryID + ", " + nFacilityID + ", " + strAddDate1 + "'" + strName + "', " + nDivision + ", '" + strUserName + "', '" +
        strWorkPart + "', '" + strWorkUser + "', " + strStartDate1 + strEndDate1 + "'" + strEtc + "')";
    }
    catch(e)
    {
        System.out.println("Error in InsertFacilityHistory or replying to a message2");
    }
    return query;
};