<!DOCTYPE html>
<html>
<head>
    <title>Event Handling</title>
</head>
<body>
    <button id="btn">Klik Saya!</button>

    <script>
        const button = document.getElementById("btn");
        button.addEventListener("click", function() {
            alert("Tombol telah diklik!");
        });
    </script>
</body>
</html>
