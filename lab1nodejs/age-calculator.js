function getAge(dateString)
{
    var today = new Date();
    var birthDate = new Date(dateString);
    if(birthDate.getFullYear() === 2021){
        throw new Error("Invalid date");

        // age="please enter a valid year";
}else
    {
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
    }
    return age;


}
function main (name,birthdate){
    var age=getAge(birthdate);
    return `"Hello" ${name} ${age}`;
}

module.exports = {
    main: main
}
