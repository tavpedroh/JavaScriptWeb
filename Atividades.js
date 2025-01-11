const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");
const botao9 = document.getElementById("botao9");
const botao10 = document.getElementById("botao10");

const botao5 = document.getElementById("botao5");

const texto = document.getElementById("texto");
const resultado = document.getElementById("resultado");

scrollar = () => {
    
}

Imprimir = (text) => {
    resultado.innerHTML = text;
}

botao1.onclick = () => {

    const frase = texto.value || '';
    let fraseInvertida = '';

    for(let i = frase.length - 1; i >= 0; i--){
        fraseInvertida += frase.charAt(i);
    }

    Imprimir(fraseInvertida);
}

botao2.onclick = () => {
    
        const frase = texto.value || '';
        let resultadoComNegrito = '';

        for (let i = 0; i < frase.length; i++) {
            let letra = frase.charAt(i).toLowerCase();
            if ('aeiouáéíóúãõ'.includes(letra)) {
                resultadoComNegrito += `<strong>${frase.charAt(i)}</strong>`;
            } else {
                resultadoComNegrito += frase.charAt(i);
            }
        }

        Imprimir(resultadoComNegrito);
}

botao3.onclick = () => {

    const frase = texto.value || '';
    const textoLimpo = frase.replace(/[.,!?;:"'()]/g, '').toLowerCase();
    const palavras = textoLimpo.split(/\s+/);
    const contagem = {};

    palavras.forEach(palavra => {
        if (palavra) {
            contagem[palavra] = (contagem[palavra] || 0) + 1;
        }
    });


    const tabela = Object.entries(contagem).map(([palavra, ocorrencias]) => {
        return { palavra, ocorrencias };
    });

    let htmlResultado = '<table border="1" cellspacing="0" cellpadding="5">';
        htmlResultado += '<tr><th>Palavra</th><th>Ocorrências</th></tr>';
    
    tabela.forEach(item => {
        htmlResultado += `<tr><td>${item.palavra}</td><td>${item.ocorrencias}</td></tr>`;
    });
    htmlResultado += '</table>';

    Imprimir(htmlResultado);

}

botao4.onclick = () => {

    const frase = texto.value || '';
    const textoLimpo = frase.replace(/[.,!?;:"'()]/g, '').toLowerCase();
    const palavras = textoLimpo.split(/\s+/);

    const contagem = {};
    
    palavras.forEach(palavra => {
        if (palavra) {
            contagem[palavra] = (contagem[palavra] || 0) + 1;
        }
    });

    let palavraMaisFrequente = '';
    let maiorOcorrencia = 0;

    for (const [palavra, ocorrencias] of Object.entries(contagem)) {
        if (ocorrencias > maiorOcorrencia) {
            palavraMaisFrequente = palavra;
            maiorOcorrencia = ocorrencias;
        }
    }

    let resposta = '';

    if (palavraMaisFrequente) {
        resposta = `
            <p>A palavra de maior ocorrência é: <strong>${palavraMaisFrequente}</strong>.   </p>
            <p> Ela aparece <strong>${maiorOcorrencia}</strong> vezes no texto.</p>
        `;
    } else {
        resposta = '<p>Nenhuma palavra encontrada no texto.</p>';
    }

    Imprimir(resposta);

}

botao9.onclick = () => {
    const frase = texto.value || '';
    let resposta = '';

    const temMinuscula = /[a-z]/.test(frase);
    const temMaiuscula = /[A-Z]/.test(frase);
    const temNumero = /[0-9]/.test(frase);
    const temEspecial = /[@#!$%&*()\-\+=.]/.test(frase);

    if (frase.length === 0) {
        resposta.textContent = '';
        
    } else if ((temMinuscula || temMaiuscula) && !(temNumero || temEspecial)) {
        resposta = 'Fraca';
        resultado.style.color = "red";
    } else if (temMinuscula && temMaiuscula && temNumero && !temEspecial) {
        resposta = 'Moderada';
        resultado.style.color = "orange";
    } else if (temMinuscula && temMaiuscula && temNumero && temEspecial) {
        resultado.style.color = "green";
        resposta = 'Forte';
    } else {
        resultado.style.color = "red";    
        resposta = 'Fraca';
    }

    Imprimir(resposta);
}

botao10.onclick = () => {

    const frase = texto.value || '';

    const mapaSubstituicao = {
        'T': 'P', 'P': 'T',
        'E': 'O', 'O': 'E',
        'N': 'L', 'L': 'N',
        'I': 'A', 'A': 'I',
        'S': 'R', 'R': 'S'
    };

    let fraseCodificada = '';

    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i];

        if (mapaSubstituicao[letra.toUpperCase()]) {
            if (letra === letra.toUpperCase()) {
                fraseCodificada += mapaSubstituicao[letra];
            } else {
                fraseCodificada += mapaSubstituicao[letra.toUpperCase()].toLowerCase();
            }
        } else {
            fraseCodificada += letra;
        }
    }

    Imprimir(fraseCodificada);

}

botao5.onclick = () => {

    const frase = texto.value || '';
    const procurar = document.getElementById('procurar').value;
    const substituir = document.getElementById('substituir').value;
    let resposta = '';

    if (!procurar) {
        resposta = '<p>Por favor, digite um termo para procurar.</p>';
        Imprimir(resposta);
        return;
    }

    const regex = new RegExp(procurar, 'gi'); 
    const textoAtualizado = frase.replace(regex, substituir);

            
    resposta = `
        <p><strong>Texto original:</strong> </p>
        <p>${frase}.</p>
        <p> <strong>Texto atualizado:</strong> </p>
        <p>${textoAtualizado}.</p>
    `;

    Imprimir(resposta);
}


//
//
//

const botao6 = document.getElementById("botao6");
const botao7 = document.getElementById("botao7");
const botao8 = document.getElementById("botao8");   


botao6.onclick = () => {

    const dataNascimento = document.getElementById('dataNascimento').value;
    let resposta = '';
    
    if (!dataNascimento) {
        resposta = '<p>Por favor, insira uma data de nascimento.</p>';
        Imprimir(resposta);
        return;
    }

    const dataNascimentoObj = new Date(dataNascimento);
    const dataAtual = new Date();
    const diferencaMilissegundos = dataAtual - dataNascimentoObj;
    const diasDeVida = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));

    resposta = `
        <p>Você viveu aproximadamente <strong>${diasDeVida}</strong> dias.</p>
    `;

    Imprimir(resposta);
}

botao7.onclick = () => {

    const dataInput = document.getElementById('data').value;
    const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dataInput.match(regexData);
    let resposta = '';

    if (!match) {
        resposta = '<p>Por favor, insira uma data válida no formato dd/mm/aaaa.</p>';
        Imprimir(resposta);
        return;
    }

    const dia = parseInt(match[1], 10);
    const mes = parseInt(match[2], 10);
    const ano = parseInt(match[3], 10);

    if (dia < 1 || dia > 31 || mes < 1 || mes > 12) {
        resposta = '<p>Data inválida. Por favor, insira uma data válida.</p>';
        Imprimir(resposta);
        return;
    }

    const mesesPorExtenso = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    const mesPorExtenso = mesesPorExtenso[mes - 1];

    if (!mesPorExtenso) {
        resposta = '<p>Data inválida. Por favor, insira uma data válida.</p>';
        Imprimir(resposta);
        return;
    }

    const dataPorExtenso = `${dia.toString().padStart(2, '0')} de ${mesPorExtenso} de ${ano}`;

    resposta = `
        <p>Data por extenso: <strong>${dataPorExtenso}</strong></p>
    `

    Imprimir(resposta);

}

botao8.onclick = () => {

    const data1Input = document.getElementById('data1').value;
    const data2Input = document.getElementById('data2').value;
    let resposta = '';

    const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const matchData1 = data1Input.match(regexData);
    const matchData2 = data2Input.match(regexData);

    if (!matchData1 || !matchData2) {
        resposta = '<p>Por favor, insira as datas no formato válido (dd/mm/aaaa).</p>';
        Imprimir(resposta);
        return;
    }

    const [dia1, mes1, ano1] = matchData1.slice(1).map(Number);
    const [dia2, mes2, ano2] = matchData2.slice(1).map(Number);

    const data1 = new Date(ano1, mes1 - 1, dia1);
    const data2 = new Date(ano2, mes2 - 1, dia2);

    const diferencaMilissegundos = Math.abs(data2 - data1);

    const semanas = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 7));

    resposta = `
        <p>A distância entre as datas é de aproximadamente <strong>${semanas}</strong> semanas.</p>
    `;

    Imprimir(resposta);

}