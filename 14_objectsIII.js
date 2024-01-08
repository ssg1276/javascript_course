//Objects destructuring and JSON API

const course={
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor //accessing using (.) dot operator

//simple destructing without name changing
const {courseInstructor} = course
 console.log(courseInstructor);


const {courseInstructor: instructor} = course //destructing the courseInstructor --> instructor (new name)

console.log(instructor);

//Concept little bit of API's

//{}-->JSON format ignore for now--->data is like this from API
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
