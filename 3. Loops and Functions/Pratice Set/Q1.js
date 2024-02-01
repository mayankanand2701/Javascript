let marks={
    "Science":99,
    "Maths":100,
    "History":90
}
for(let i=0;i<Object.keys(marks).length;i++)
{
    console.log("The marks of "+Object.keys(marks)[i]+ "are "+marks[Object.keys(marks)[i]])
}