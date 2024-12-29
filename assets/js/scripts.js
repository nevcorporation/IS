    var jso = {
        "doc":[
            {
                "name":"Coal",
                "files":[
                    {
                        "name":"Basic Coal Drill Instructions",
                        "data": {
                            "html": "<h1>Coal Drill Setup and use</h1> <hr> <h3>Setup:</h3> <p>Please buy these 3 items before following these instructions</p> <div style='margin-left: 10pt;'> <li>Solar Panels</li> <li>Truck Depos</li> <li>Coal Drills</li> </div> <p>To get started place down all these items in this order:</p> <img src='assets/images/Screenshot 2024-12-04 065142.png'> <p>Next use the cable tool which looks like this:</p> <img src='assets/images/Screenshot 2024-12-04 065156.png' alt=''> <p>Click on the power node on the solar panel and then drag it over to the other power node on the coal drill then click on the power node. After you do this it should look like this:</p> <img src='assets/images/Screenshot 2024-12-04 065212.png'> <p>And this part of the coal drill should start turning:</p> <img src='assets/images/Screenshot 2024-12-04 065223.png'> <p>Then use this tool to make the pipes:</p> <img src='assets/images/Screenshot 2024-12-04 065250.png' alt=''> <p>Please buy the blocky short pipes to make a setup like this:</p> <img src='assets/images/Screenshot 2024-12-04 065441.png' alt=''> <p>Make sure that all the arrows face towards the yellow item node to take coal out of the drill</p> <p>If done correctly, your ui on the building should have bar that will start to fill up.</p> <img src='assets/images/Screenshot 2024-12-04 065422.png' alt=''> <p>Your whole setup should look like this:</p> <img src='assets/images/Screenshot 2024-12-04 065455.png' alt=''> <p>That is the coal drill setup.</p> <h3>Uses:</h3> <p>The coal drill is useful as it gets you started when you make a new world to earn money and then buy more drills and research stations but that is for another day, for now you can make as many coal drills as you want to get the design engraved in your brain.</p> <hr> <h2>Written by Industrialist Setups Editor</h2>"
                        }
                    }
                ]
            },
            {
                "name":"Research",
                "files":[
                    {
                        "name":"Research Stations",
                        "data": {
                            "html":"<h1>Research Stations</h1><hr><h3>What are Research Stations?</h3><p>Research stations are a feature in the game that help you get 'Research Points',</p><h3>How to setup</h3><p>First off you want to buy one of these:</p><img src='assets/images/Screenshot 2024-12-29 203150.png'><p>After you have bought a Research Station, place it anywhere you want like this:</p><img src='assets/images/Screenshot 2024-12-29 203203.png'><p>After this please place down a solar panel and connect the node on the solar panel to the node on the research station. If done correctly, your research station should light up[AT DAY] like this:</p><img src='assets/images/Screenshot 2024-12-29 203357.png'>"
                        }
                    },
                    {
                        "name":"RP",
                        "data":{
                            "html":"<h1>RP(Research Points)</h1><hr><h3>What are research Points?</h3><p>Research Points are an ingame currency that allow you to advance to higher tier items, you will notice your RP down in the bottom left corner of your screen:</p><img src='assets/images/Screenshot 2024-12-29 203512.png'><h3>How and Where do i use RP?</h3><p>You can use these points in the research menu. The research menu is on the left hand side of your screen:</p><img src='assets/images/Screenshot 2024-12-29 203450.png'><p>When you click the RP a menu will pop up which is where you can buy your way through the game.</p>"
                        }
                    }
                ]
            }
        ]
    }
    var folders = jso.doc;
    var fileholde = document.getElementById("fileholder");
    var page = document.getElementById("page");
    var block = document.getElementById("block");
    var close =document.getElementById("close");

folders.forEach(folder => {
    var die1 = document.createElement("div")
    var folicon = document.createElement("img")
    folicon.src = "assets/images/nigga.png"
    folicon.style.width = "20pt"
    die1.appendChild(folicon)
        die1.className = "is"
        var folderin = document.createElement("label");
        folderin.textContent = folder.name;
        folderin.value = "folder"
        var deltaline = document.createElement("div");
            deltaline.style.display = "none";
            deltaline.style.flexDirection = "column";
        die1.appendChild(folderin)
        fileholde.appendChild(die1)
        folder.files.forEach(file1 => {
            var die2 = document.createElement("div")
            die2.className = "is"
            var filicon = document.createElement("img");
            filicon.src = "assets/images/txt-file.png"
            die2.appendChild(filicon)
            fileholde.appendChild(deltaline)
            var a = document.createElement("a");
            a.href = "#"
            a.textContent = file1.name;
            a.addEventListener('click', () => {
                block.style.display = "block";
                page.style.display = "flex";
                var di = document.createElement("div");
                di.style.width = "100%";
                di.style.height = "100%";
                di.innerHTML = file1.data.html; 
                page.appendChild(di);
                close.addEventListener('click', () => {
                    page.style.display = "none";
                    block.style.display = "none";
                    page.removeChild(di)
                })
            })
            die2.appendChild(a);
            deltaline.appendChild(die2);
            fileholde.appendChild(deltaline);

        })
        folderin.addEventListener('click', () => {
            deltaline.style.display = deltaline.style.display == "flex" ? "none" : "flex";
        })
    })







function openlayer(old,layer) {
    var currentlayer = document.getElementById(old)
    currentlayer.style.display = "none";
    document.getElementById(layer).style.display = "block"
}


function closeMenu() {
    document.getElementById("page").style.display = "none";
    document.getElementById("block").style.display = "none"
}

function openmenu(menu) {
    var children = document.getElementById("page").children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.display = "none";  // Hide all children
    }
    document.getElementById(menu).style.display = "block"; // Show the selected menu
    document.getElementById("page").style.display = "block"; // Show the page
    document.getElementById("block").style.display = "block"; // Show the block
    document.getElementById("close").style.display = "block";
}


