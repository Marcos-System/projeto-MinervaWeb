function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "lucas123"){
        location.href = "minerva/";
    }
    else{
        document.getElementById('mensagemerro').style.display = "block";
    }}

function mostraraviso(){
    document.getElementById('tabela').style.display = "flex";
    document.getElementById('btnmostra').style.display = "none";
    document.getElementById('btnoculta').style.display = "flex";
}

function ocultaaviso(){
    document.getElementById('tabela').style.display = "none";
    document.getElementById('btnmostra').style.display = "flex";
    document.getElementById('btnoculta').style.display = "none";
}

var dataa = [];

        function jogaraviso() {
            var data = document.getElementById('data').value;
        var hora = document.getElementById('hora').value;
        var aviso = document.getElementById('aviso').value;

            if (data && hora && aviso) {
                var newData = {
                    data: data,
                    hora: hora,
                    aviso: aviso
                };

                dataa.push(newData);

                
                document.getElementById("data").value = "";
                document.getElementById("hora").value = "";
                document.getElementById("aviso").value = "";

                
                atualizar();
            }
        }

        function atualizar() {
            var table = document.getElementById("tabelabela");
            
            table.innerHTML = "<tr><th>Data</th><th>Horário</th><th>Aviso</th><th>Função</th></tr>";

            for (var i = 0; i < dataa.length; i++) {
                var row = table.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);

                cell1.innerHTML = dataa[i].data;
                cell2.innerHTML = dataa[i].hora;
                cell3.innerHTML = dataa[i].aviso;
                cell4.innerHTML = "<button onclick='editar(" + i + ")'></button><img src='{% static '//minerva/static/minerva/js/editar.png' %}''><button onclick='deletar(" + i + ")'><img src='//minerva/static/minerva/js/excluir.png' width='24px' class='lixeiro'></button>";
            }
        }

        function deletar(index) {
            dataa.splice(index, 1);
            atualizar();
        }

        function editar(index) {
            document.getElementById("data").value = dataa[index].data;
            document.getElementById("hora").value = dataa[index].hora;
            document.getElementById("aviso").value = dataa[index].aviso;

            // Remover a linha selecionada da tabela
            dataa.splice(index, 1);

            // Atualizar a tabela
            updateTable();
        }

        