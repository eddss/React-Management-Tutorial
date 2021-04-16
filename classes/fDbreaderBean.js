module.exports.GetFacilityBase = (code1, code2, code3, seq) => {
    console.log("Class Package Version Called GetFacilityBase");
    let query = null;
    
    try
    {
        query = "SELECT FACILITY_BASE.*, " +
        "(SELECT NAME FROM FACILITY_CODE WHERE CODE_01 = " + code1 + " AND CODE_02 = -1 AND CODE_03 = -1) AS CODE1_NAME, " +
        "(SELECT NAME FROM FACILITY_CODE WHERE CODE_01 = " + code1 + " AND CODE_02 = " + code2 + " AND CODE_03 = -1) AS CODE2_NAME, " +
        "(SELECT NAME FROM FACILITY_CODE WHERE CODE_01 = " + code1 + " AND CODE_02 = " + code2 + " AND CODE_03 = " + code3 + ") AS CODE3_NAME, " +
        "TAGTBL.NAME AS TAGNAME, TAGTBL.DESCRIPTION AS DESCRIPTION " +
        "FROM FACILITY_BASE  LEFT OUTER JOIN TAGTBL ON TAGTBL.TAGID = FACILITY_BASE.TAGID " +
        "WHERE CODE_01 = " + code1 + " AND CODE_02 = " + code2 + " AND CODE_03 = " + code3 +
        " AND SEQ = " + seq;
    }
    catch(e) 
    {
        console.log("Error in GetFacilityBase or replying to a message");
    }
    return query;
};

module.exports.GetFacilityHistory2 = (facilityHistoryID, facilityID) => {
    console.log("Class Package Version Called GetFacilityHistory2");
    let query = null;
    
    try
    {
        query = "SELECT FACILITYHISTORYID, FACILITYID, RECORDDATE, NAME, DIVISION, USERNAME, WORKPART, WORKUSER, " +
        "DATE_FORMAT(STARTDATE, '%Y-%m-%d %H:%i:%s') STARTDATE, DATE_FORMAT(ENDDATE, '%Y-%m-%d %H:%i:%s') ENDDATE, ETC " +
        "From FACILITY_HISTORY where FACILITYHISTORYID = " + facilityHistoryID + " and FACILITYID = " + facilityID + " order by FACILITYHISTORYID";
    }
    catch(e) 
    {
        console.log("Error in GetFacilityHistory2 or replying to a message");
    }
    return query;
};

module.exports.GetFacilityHistory3 = (nId, startDate1, startDate2, workpart) => {
    console.log("Class Package Version Called GetFacilityHistory3");
    let query = null;
    
    try
    {
        query = "Select "
					+ " FACILITYHISTORYID, FACILITYID, RECORDDATE, NAME, DIVISION, USERNAME, WORKPART, WORKUSER,"
					+ " to_char(STARTDATE, 'yyyy-mm-dd hh24:mi:ss') STARTDATE, "
					+ " to_char(ENDDATE, 'yyyy-mm-dd hh24:mi:ss') ENDDATE, ETC "
					+ " From FACILITY_HISTORY where FACILITYID = " + nId + " and "
					+ " STARTDATE >= DATE_FORMAT('" + startDate1 + "', '%Y-%m-%d %H:%i:%s') and "
					+ " STARTDATE <= DATE_FORMAT('" + startDate2 + "', ''%Y-%m-%d %H:%i:%s'') and "
					+ " (workpart like '%" + workpart + "%' or '" + workpart + "' = '전체' ) "
                    + " order by ENDDATE, STARTDATE, FACILITYHISTORYID";
    }
    catch(e) 
    {
        console.log("Error in GetFacilityHistory3 or replying to a message");
    }
    return query;
};

module.exports.GetFacilitySpec = (nId, nType) => {
    console.log("Class Package Version Called GetFacilitySpec");
    let query = null;
    let strTable = null;
    try
    {
        if(nType === 0) {
            strTable = "FACILITY_SPEC";
        }  else {
            strTable = "FACILITY_STOCK";
        }
        query = "Select * From "+ strTable + " where FACILITYID = " + nId + " order by FACILITYSPECID";
    }
    catch(e) 
    {
        console.log("Error in GetFacilitySpec or replying to a message");
    }
    return query;
};

module.exports.GetFacilityHistoryDateList = (nId, nType) => {
    console.log("Class Package Version Called GetFacilityHistoryDateList");
    let query = null;
    try
    {
        query ="select DATE_FORMAT(STARTDATE, '%Y-%m-%d %H:%i:%s') as STARTDATE from FACILITY_HISTORY where FACILITYID = " + facilityID + "order by STARTDATE desc";
    }
    catch(e) 
    {
        console.log("Error in GetFacilityHistoryDateList or replying to a message");
    }
    return query;
};