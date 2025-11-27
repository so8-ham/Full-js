const classInfo={
    classes: [
        {
            className: "Math",
            teacher: "Mr. Smith",
            students: ["Alice", "Bob", "Charlie"]
        },
        {
        className: "Science",
        teacher: "Mrs. Johnson",
        students: ["David", "Eva", "Frank"]
    },
    {
        className: "History",
        teacher: "Mr. Brown",
        students: ["Grace", "Hannah", "Ian"]
    }
]
};
for(let i=0;i<classInfo.classes.length;i++){
    console.log(classInfo.classes[i].className);
}