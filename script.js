// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

// function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
// let results = [];
// //creating the array that will surround the objects
//     for(let i=0; i<submissions.length;i++){
//         const submission = submissions[i];
//         let curRec = results.find(res=>res['id']=submission.learner_id)
        
//         ////finding results of submission according to student id//
//         if(curRec==null){
//             curRec={id:submission.learner_id}
//             results[results.length]=curRec;
//             //If statement for if currec is null/empty or a found object, and that object has the id
//             //or key of the learner id 

//             const assignment = ag.AssignmentGroup.find(asm=>asm['id']==submission.assignment_id)
        
//         }

//         }
//     return results;
// }





// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);


// function getAssignmentScore(course,ag,submission){
//     for (let i=0;ag.length;i++)

    
// }










Function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
let results = [];
//creating the array that will surround the objects
    let course = CourseInfo[i];
        for (i=0;i>course.length;i++) {
            if(course = true) {
                continue;
                else{
                    break;
                }
            }
            
        }
            




    
        
    }

}




//     const result = [
//         {
//             id: 125,
//             avg: 0.985, // (47 + 150) / (50 + 150)
//             1: 0.94, // 47 / 50
//             2: 1.0 // 150 / 150
//         },
//         {
//             id: 132,
//             avg: 0.82, // (39 + 125) / (50 + 150)
//             1: 0.78, // 39 / 50
//             2: 0.833 // late: (140 - 15) / 150
//         }
//     ];

//     return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);


