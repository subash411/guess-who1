console.log('Here are all the available people:', people);

$(document).ready(readyNow);
function readyNow(){
    console.log('JQ');

    $(document).ready(postPicture);

};

function postPicture(){
    $('body').append(`
    <div id= "pic">

    <button data-number=0 id = "dev"><img src = "https://github.com/${people[0].githubUsername}.png?size=250">
    <button data-number=1 id = "dan"><img src = "https://github.com/${people[1].githubUsername}.png?size=250">
    <button data-number=2 id = "matt"><img src = "https://github.com/${people[2].githubUsername}.png?size=250">
    <button data-number=3 id = "chris"><img src = "https://github.com/${people[3].githubUsername}.png?size=250">
    <button data-number=4 id = "edan"><img src = "https://github.com/${people[4].githubUsername}.png?size=250">
    <button data-number=5 id = "liz"><img src = "https://github.com/${people[5].githubUsername}.png?size=250">
    <button data-number=6 id = "chris"><img src = "https://github.com/${people[6].githubUsername}.png?size=250">
    <button data-number=7 id = "subash"><img src = "https://github.com/${people[7].githubUsername}.png?size=250">


    </div>
    
    `);
}

