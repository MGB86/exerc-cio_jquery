$(function(){
    // Define o valor minímo para a data atual
    var hoje = new Date();
    var dia = ("0" + hoje.getDate()).slice(-2);
    var mes = ("0" + (hoje.getMonth() + 1)).slice(-2);
    var ano = hoje.getFullYear();
    var dataAtual = ano + "-" + mes + "-" + dia;

    // Define o valor mínimo do campo de entrada de data para a data atual
    $('#data-tarefa').attr('min', dataAtual);

    $("header button").click(function(){
        $("form").slideDown();
    })

    $("form #btn-voltar").click(function(){
        $("form").slideUp();
    })

    $("form #btn-submit").click(function(e){
        e.preventDefault();
        var nomeTarefa = $('#nome-tarefa').val();
        var dataTarefa = $('#data-tarefa').val().split("-");

        if(nomeTarefa === '' || dataTarefa[0] === ''){
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Cria um novo objeto Date com ano, mês e dia
        var data = new Date(dataTarefa[0], dataTarefa[1] - 1, dataTarefa[2]);

        // Formata a data para "dd/mm/aaaa"
        var dia = ("0" + data.getDate()).slice(-2);
        var mes = ("0" + (data.getMonth() + 1)).slice(-2);
        var ano = data.getFullYear();
        var dataFormatada = dia + "/" + mes + "/" + ano;

        $('#tabela-tarefas').append('<tr><td><input type="checkbox" class="check"></td><td class="titulo">' + nomeTarefa + '</td><td>' + dataFormatada + '</td></tr>');
        $('#nome-tarefa').val('');
        $('#data-tarefa').val('');
    })
    // Aplica o efeito 'line-through' sobre a tarefa concluida ou reverte o efeito
    $('#tabela-tarefas').on("click", ".check", function(){
        var linha = $(this).closest('tr');
        if(this.checked){
            linha.addClass("line-through")
        }else{
            linha.removeClass("line-through")
        }
    })
})
