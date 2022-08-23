const fs = require("fs");
const studentDetails = require("./studentDetailMasaiSchool.json");

const studentArray = [];

const getStudentDetails = (studentArray) => {
  const newObjectArray = [];
  studentArray.forEach((studentCode) => {
      for (singleStudent of studentDetails) {
        // console.log(studentCode);
        // console.log(singleStudent.Code);
      if (singleStudent.Code !==null && singleStudent.Code == studentCode) {
    //    let singleStudentObject ={
    //         // Code: studentCode,
    //         // Contact: singleStudent.Contact,
    //         email: singleStudent["Email"]
    //     }
        fs.appendFileSync(`arrayStudent3.txt`, singleStudent["Email"]+"\n" )
        // newObjectArray.push(singleStudentObject);
      }
    }
  });
//   date = new Date
//   date = (date+" ").split(" ");
//   fs.writeFileSync(`arrayStudent2.json`, JSON.stringify(newObjectArray));

};
getStudentDetails(studentArray);