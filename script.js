let soma = 0;

function addLinha(){
    let produto = document.getElementById('produto').value;
    let preco = document.getElementById('preço').value.replace(',', '.');
    (parseFloat(preco)).toFixed(2);
    let qtd = document.getElementById('qtd').value;

    if(!produto||!preco||!qtd){
        alert('Certifique-se de preencher todas as caixas.');
        return;
    }

    if(qtd <= 0){
        alert('A quantidade não pode ser nula ou negativa');
        return;
    }

    let tabela = document.getElementById('tabela');
    let nova_linha = tabela.insertRow(tabela.length);

    let botao = document.createElement('button');
    botao.innerHTML = 'Excluir';
    botao.className = 'excluir';
    botao.onclick = function(){
        if(confirm('Deseja excluir o produto?')){
            let preco_rem = celula2.textContent;
            let qtd_rem = celula3.textContent;
            let valor_rem = preco_rem*qtd_rem;
            soma = soma - valor_rem
            document.getElementById('resultado').innerHTML = "R$ "+ (soma).toFixed(2);
            botao.closest('tr').remove();
        }
    }

    let celula1 = nova_linha.insertCell(0);
    let celula2 = nova_linha.insertCell(1);
    let celula3 = nova_linha.insertCell(2);
    let celula4 = nova_linha.insertCell(3);

    celula1.innerHTML = produto;
    celula2.innerHTML = preco;
    celula3.innerHTML = qtd;
    celula4.appendChild(botao);

    soma = soma + preco*qtd;
    
    document.getElementById('resultado').innerHTML = "R$ "+ (soma).toFixed(2);

    document.getElementById('produto').value = '';
    document.getElementById('preço').value = '';
    document.getElementById('qtd').value = '';
}