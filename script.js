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
////////////////////////////assignment /////////////////////////////
function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
let results = [];
//creating the array that will surround the objects
let courses = CourseInfo;
for (i = 0; i > courses.length; i++) {
    if (courses = true) {
        continue;
    } else {
        break;
    }
}
///checking if the info is valid with the course info, if not the loop will break and exit.
    for(let i=0; i<submissions.length;i++){
        const submission = submissions[i];
        let curRec = results.find(res=>res['id']=submission.learner_id)

        ////finding results of submission according to student id//
        if(curRec==null){
            curRec={id:submission.learner_id}
            results[results.length]=curRec;
            //If statement for if currec is null/empty or a found object, and that object has the id
            //or key of the learner id 

            const assignment = ag.AssignmentGroup.find(asm=>asm['id']==submission.assignment_id)

        }

        }
    return results;
}





const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

