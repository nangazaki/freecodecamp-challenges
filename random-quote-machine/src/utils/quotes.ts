export function returnQuote() {
  const quotes = [
    {
      id: 1,
      author: "Jonas Savimbi",
      quote:
        "Tem vezes que é preciso fazer guerra, para que quando haver paz seja definitiva.",
    },
    {
      id: 2,
      author: "Dr. António Agostinho Neto",
      quote: "A menos que o sol brilhe não pode haver a luz do dia.",
    },
    {
      id: 3,
      author: "Sombo – Zâmbia",
      quote: "Nós temos um desejo mais profundo, um anseio por um mundo melhor. E por causa disto, temos uma vontade verdadeira de fazer melhor.",
    },
    {
      id: 4,
      author: "Ida – Gâmbia",
      quote: "Essa é uma das coisas estamos aprendendo aqui: a falar. E agora temos que ser escutados. Somos o futuro. Em resumo, é isto que eu sou. Eu sou o futuro. O futuro africano.",
    },
    {
      id: 5,
      author: "Maryam- Nigéria",
      quote: "O africano é conhecido por ser o protetor de seus irmãos e é isto que eu sou. Espero que com isto, volte mais equipado para fazer mudanças. Espero que um dia eu seja a mudança.",
    },
    {
      id: 6,
      author: "Thabang – África do Sul",
      quote: "Nós temos que ter orgulho em ser quem somos. Almejar a excelência. Quando fizermos isso, a América estará pronta para nos ajudar.",
    },
    {
      id: 7,
      author: "Jonas Savimbi",
      quote:
        "Eu nao defino o Angolano pela cor, seja ele branco, preto ou mulato, eu defino o Angolano como aquele que ama Angola e luta por ela.",
    },
    {
      id: 8,
      author: "Sombo, Zâmbia",
      quote: "Sou uma jovem mulher que quer conquistar o mundo. Sou uma jovem mulher que acredita que pode contribuir com seu continente, seu país, sua comunidade e sua família.”",
    },
    {
      id: 9,
      author: "Nelson Mandela",
      quote: "Sempre parece impossível, até que seja feito.",
    },
    {
      id: 10,
      author: "Nelson Mandela",
      quote: "Não há nada como regressar a um lugar que está igual para descobrir o quanto a gente mudou.",
    },
    {
      id: 11,
      author: "Pepetela",
      quote: "A dor muito prolongada faz-nos cruéis e indiferentes à crueldade, o que é ainda pior.",
    },
    {
      id: 12,
      author: "Pepetela",
      quote: "Porque é que a afirmação dum homem tem de se fazer sempre em oposição a todos os outros?",
    },
    {
      id: 13,
      author: "",
      quote: "",
    },
    {
      id: 14,
      author: "",
      quote: "",
    },
    {
      id: 15,
      author: "",
      quote: "",
    },
  ];

  const key = Math.floor(Math.random() * 14);

  return quotes[key];
}