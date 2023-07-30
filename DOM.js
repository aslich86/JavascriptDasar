<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulasi</title>
</head>
<body>
    <div id="myDiv">
        <p>Hello, world!</p>
    </div>

    <script>
        const myDiv = document.getElementById("myDiv");
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "Halo semuanya!";
        myDiv.appendChild(newParagraph);
    </script>
</body>
</html>
