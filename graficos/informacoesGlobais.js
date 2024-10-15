const url = 'https://raw.githubusercontent.com/eduhort2/projeto5/main/api/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `No Brasil, o futebol é mais do que um esporte; é uma verdadeira paixão que une milhões de torcedores em torno de seus clubes. Nesta apresentação, iremos explorar as maiores torcidas do país, revelando a magnitude do amor e da dedicação que os fãs têm por suas equipes. O gráfico que será exibido a seguir apresentará a quantidade estimada de torcedores de cada um dos principais clubes, demonstrando não apenas a popularidade, mas também o impacto cultural e social que essas torcidas exercem em nossas vidas. 
A escala do gráfico foi definida em milhões de torcedores, permitindo uma visualização clara das diferenças entre as torcidas e destacando os clubes que lideram essa apaixonante competição. Preparem-se para descobrir quais são as maiores torcidas do Brasil e entender o fenômeno que faz do futebol uma parte indissociável da identidade nacional.  .`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
