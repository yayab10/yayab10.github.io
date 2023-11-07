{/* <div id="element1">Élément 1</div>
<div id="element2">Élément 2</div> */}


    const elem1 = document.getElementById("element1");
    const elem2 = document.getElementById("element2");

    elem1.addEventListener("click", function () {
        // Faites quelque chose lorsque elem1 est cliqué
    });

    elem2.addEventListener("click", function () {
        // Faites quelque chose lorsque elem2 est cliqué
    });

    window.scroll({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
      