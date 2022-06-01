document.getElementById("Search").style.display = "none";
document.getElementById("WebPlayer").style.display = "none";
document.getElementById("DevIdeas").style.display = "none";
document.getElementById("aReference").style.display = "none";
document.getElementById("AskUs").style.display = "none";
document.getElementById("FollowUs").style.display = "none";

document.getElementById("aHome").addEventListener("click",function(){
document.getElementById("Home").style.display = "block";
document.getElementById("Search").style.display = "none";
document.getElementById("WebPlayer").style.display = "none";
document.getElementById("DevIdeas").style.display = "none";
document.getElementById("aReference").style.display = "none";
document.getElementById("AskUs").style.display = "none";
document.getElementById("FollowUs").style.display = "none";
});

document.getElementById("aSearch").addEventListener("click",function(){
    document.getElementById("Home").style.display = "none";
    document.getElementById("Search").style.display = "block";
    document.getElementById("WebPlayer").style.display = "none";
    document.getElementById("DevIdeas").style.display = "none";
    document.getElementById("aReference").style.display = "none";
    document.getElementById("AskUs").style.display = "none";
    document.getElementById("FollowUs").style.display = "none";
});

document.getElementById("aWebPlayer").addEventListener("click",function(){
    document.getElementById("Home").style.display = "none";
    document.getElementById("Search").style.display = "none";
    document.getElementById("WebPlayer").style.display = "block";
    document.getElementById("DevIdeas").style.display = "none";
    document.getElementById("aReference").style.display = "none";
    document.getElementById("AskUs").style.display = "none";
    document.getElementById("FollowUs").style.display = "none";
});

document.getElementById("aDevIdeas").addEventListener("click",function(){
    document.getElementById("Home").style.display = "none";
    document.getElementById("Search").style.display = "none";
    document.getElementById("WebPlayer").style.display = "none";
    document.getElementById("DevIdeas").style.display = "block";
    document.getElementById("AskUs").style.display = "none";
    document.getElementById("Reference").style.display = "block";
    document.getElementById("FollowUs").style.display = "none";
});  

document.getElementById("Reference").addEventListener("click",function(){
    document.getElementById("Home").style.display = "none";
    document.getElementById("Search").style.display = "none";
    document.getElementById("WebPlayer").style.display = "none";
    document.getElementById("DevIdeas").style.display = "block";
    document.getElementById("aReference").style.display = "block";
    document.getElementById("AskUs").style.display = "none";
    document.getElementById("FollowUs").style.display = "none";
});

document.getElementById("aAskUs").addEventListener("click",function(){
    document.getElementById("Home").style.display = "none";
    document.getElementById("Search").style.display = "none";
    document.getElementById("WebPlayer").style.display = "none";
    document.getElementById("DevIdeas").style.display = "none";
    document.getElementById("aReference").style.display = "none";
    document.getElementById("AskUs").style.display = "block";
    document.getElementById("FollowUs").style.display = "none";
});

document.getElementById("aFollowUs").addEventListener("click",function(){
    document.getElementById("Home").style.display = "none";
    document.getElementById("Search").style.display = "none";
    document.getElementById("WebPlayer").style.display = "none";
    document.getElementById("DevIdeas").style.display = "none";
    document.getElementById("aReference").style.display = "none";
    document.getElementById("AskUs").style.display = "none";
    document.getElementById("FollowUs").style.display = "block";
});


function gotoSearch(){
    window.open("https://ameyweb.github.io","_blank");
}

function gotoWebPlayer(){
    window.open("https://ameywebplayer.github.io","_blank");
}
