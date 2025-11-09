# Social Media Hub
[🇺🇸 English](./README.md) | [🇧🇷 Português](./README.pt.md)

![GitHub License](https://img.shields.io/github/license/emellybmuniz/social-media-hub)
![GitHub language count](https://img.shields.io/github/languages/count/emellybmuniz/social-media-hub)
![GitHub last commit](https://img.shields.io/github/last-commit/emellybmuniz/social-media-hub)
![GitHub repo size](https://img.shields.io/github/repo-size/emellybmuniz/social-media-hub)
![Project Status](https://img.shields.io/badge/Status%20-%20Completed%20-%20%234BC21E)

Um hub de redes sociais simples e interativo com design mobile-first. Apresenta uma interface de celular iPhone que exibe múltiplas plataformas sociais de forma responsiva. Este projeto foi desenvolvido com base no curso de HTML5 e CSS3 do "Curso em Vídeo". O objetivo principal foi testar iframes na prática.

---

### 📋 Índice
- [Visão Geral do Projeto](#-visão-geral-do-projeto)
- [Estrutura de Diretórios](#-estrutura-de-diretórios)
- [Destaques & Funcionalidades](#-destaques--funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Configuração](#-configuração)
- [Responsividade](#-responsividade)
- [Validação & Tratamento de Erros](#-validação--tratamento-de-erros)
- [API/Funcionalidades Avançadas](#-apifuncionalidades-avançadas)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Autora](#-autora)

---

## 🚀 Visão Geral do Projeto
[![Demonstração do Projeto](imagens/project-demo.gif)](https://emellybmuniz.github.io/social-media-hub/)

O Social Media Hub é uma interface web que simula a experiência de um dispositivo móvel para navegar por múltiplas plataformas de redes sociais. O projeto apresenta um frame de iPhone com um sistema de navegação interativa que permite aos usuários alternar entre diferentes redes sociais, que são carregadas dentro de um `iframe`.

**Contexto e Motivação:**
- Projeto educacional desenvolvido durante o curso de HTML5 e CSS3 do "Curso em Vídeo"
- Demonstra conceitos de design responsivo e integração de iframe
- Simula interface móvel usando apenas HTML e CSS
- **Público-alvo**: Estudantes de desenvolvimento web
- **Conceitos técnicos demonstrados**: CSS Grid, Flexbox, design responsivo, integração de iframe

## 📂 Estrutura de Diretórios
```bash
social-media-hub/
├── estilo/
│   └── style.css              # Folha de estilo principal
├── imagens/
│   ├── fundo-madeira.jpg      # Imagem de fundo com textura de madeira
│   ├── frame-iphone.png       # Mockup do frame do iPhone
│   ├── logo-*.jpg             # Logos das plataformas sociais (6 plataformas)
│   └── tela-*.jpg             # Screenshots das interfaces das plataformas
├── facebook.html              # Página da plataforma Facebook
├── github.html                # Página da plataforma GitHub
├── home.html                  # Página inicial padrão
├── index.html                 # Ponto de entrada principal da aplicação
├── instagram.html             # Página da plataforma Instagram
├── twitter.html               # Página da plataforma Twitter/X
├── youtube.html               # Página da plataforma YouTube
├── .gitattributes             # Normalização de quebras de linha do Git
├── .vscode/settings.json      # Configuração do VSCode para live preview
├── LICENSE                    # Arquivo de licença MIT
└── README.md                  # Este arquivo de documentação
```

## ✨ Destaques & Funcionalidades

### 🎯 **Simulação Mobile Interativa**
- Frame realista do iPhone com dimensões precisas (311x627px)
- Integração de iframe para preview das plataformas
- Posicionamento centralizado com técnicas CSS transform
- Fundo fixo para experiência imersiva

### 🎨 **Design Visual Profissional**
- Fundo com textura de madeira e posicionamento fixo
- Ícones de redes sociais com animações hover
- Transições suaves com efeitos de escala
- Layout baseado em grid para organização visual
- Interface limpa com scrollbar customizada

### 📱 **Responsividade Avançada**
- Breakpoints otimizados para mobile (≤600px)
- Dimensionamento dinâmico com unidades vw
- Dimensões flexíveis do iframe (269x475px padrão)
- Redimensionamento responsivo de imagens
- Elementos interativos otimizados para touch

### ✅ **Excelência na Experiência do Usuário**
- Navegação intuitiva com feedback visual
- Efeitos hover com transformações 3D
- Sistema de frame target para alternância suave entre plataformas
- Estruturas de link conscientes da acessibilidade

### 🔄 **Integração com Plataformas**
- Seis principais plataformas de redes sociais suportadas
- Integração de links externos com atributos target apropriados
- Botões de acesso com tema consistente
- Implementação de iframe com consciência de segurança
- Esquemas de cores específicos de cada plataforma

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído usando as seguintes tecnologias:

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Detalhes Técnicos:
- **HTML5**: Estrutura semântica com integração de iframe, navegação por frame target e atributos de acessibilidade
- **CSS3**: Posicionamento avançado com transforms, layouts grid/flexbox, media queries, animações hover e estilização customizada
- **Design Responsivo**: Abordagem mobile-first com meta tags de viewport, unidades flexíveis e breakpoints adaptativos

## ⚙️ Pré-requisitos

Este é um projeto web estático com requisitos mínimos:

**Compatibilidade de Navegadores:**
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

**Ambiente de Desenvolvimento:**
- Qualquer editor de texto moderno ou IDE
- Extensão de live server (recomendado)
- Navegador web moderno para testes

## 📦 Instalação

```bash
# 1. Clone este repositório
$ git clone https://github.com/emellybmuniz/social-media-hub.git

# 2. Navegue até o diretório do projeto
$ cd social-media-hub

# 3. Abra com um live server (recomendado)
# Usando a extensão Live Server do VSCode ou qualquer servidor estático

# 4. Alternativamente, abra diretamente no navegador
$ open index.html
```

**Alternativa:** [Visite a Demo Online](https://emellybmuniz.github.io/social-media-hub/)

## 💡 Como Usar

1. **Iniciar Aplicação** - Abra o `index.html` no seu navegador ou acesse a demo online
2. **Navegar pelas Plataformas** - Clique em qualquer ícone de rede social no lado direito da tela
3. **Visualizar Conteúdo** - Cada plataforma carrega dentro do frame do iPhone com previews autênticas da interface
4. **Acessar Perfis** - Clique no botão "ACESSE" em qualquer plataforma para visitar os perfis reais das redes sociais
5. **Experiência Mobile** - Acesse de dispositivos móveis para uma experiência responsiva otimizada
6. **Retornar ao Início** - Clique no ícone home para retornar à tela inicial padrão

### Exemplos de Uso:
```html
<!-- Exemplo de integração de plataforma personalizada -->
<a href="plataforma-personalizada.html" target='frame'>
  <img src="imagens/logo-personalizado.jpg" alt="plataforma personalizada">
</a>
```

## 📱 Responsividade

### Desktop (> 600px)
- Display completo do frame do iPhone com fundo de textura de madeira
- Navegação de redes sociais baseada em grid no lado direito
- Animações hover e efeitos transform habilitados
- Anexação de fundo fixo para efeito parallax

### Mobile (≤ 600px)
- Dimensionamento otimizado de ícones usando unidades viewport width (13vw)
- Posicionamento ajustado do telefone com margens negativas
- Proporções mantidas para experiência consistente
- Elementos interativos otimizados para touch

## 🛡️ Validação & Tratamento de Erros

### Validações Implementadas:
- **Estrutura HTML**: Marcação semântica com DOCTYPE apropriado e atributos lang
- **Reset CSS**: Reset universal de margin/padding para renderização consistente entre navegadores
- **Tags Alt de Imagem**: Conformidade com acessibilidade com texto alternativo descritivo
- **Meta Viewport**: Configuração apropriada de viewport para mobile


## 🔌 API/Funcionalidades Avançadas

### Integração com Plataformas:
| Plataforma | Tipo de Integração | URL Target | Funcionalidades |
|------------|-------------------|------------|-----------------|
| Home | Conteúdo Local | `home.html` | Página inicial da marca |
| Instagram | Busca Externa | API de Busca do Bing | Descoberta de perfil |
| YouTube | Canal Direto | Canal do YouTube | Acesso a conteúdo de vídeo |
| Facebook | Perfil Direto | Vídeos do Facebook | Conteúdo de mídia |
| Twitter/X | Perfil Direto | Perfil do Twitter | Atualizações sociais |
| GitHub | Repositório Direto | Perfil do GitHub | Repositórios de código |

### Funcionalidades Especiais:
- **Segurança do Iframe**: Direcionamento apropriado de frame com frames nomeados para segurança
- **Layout CSS Grid**: Sistema de posicionamento avançado para ícones sociais responsivos
- **Animações Transform**: Transforms CSS aceleradas por hardware para interações suaves

## 🤝 Contribuição

Contribuições são sempre bem-vindas e **muito apreciadas!** Sinta-se livre para abrir uma issue ou enviar um pull request.

### Como contribuir:
1. **Fork** este repositório
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/social-media-hub.git`
3. **Crie uma branch** para sua feature: `git checkout -b feature/funcionalidade-incrivel`
4. **Faça suas alterações** e teste completamente
5. **Commit** suas mudanças: `git commit -m 'Add funcionalidade incrivel'`
6. **Push** para a branch: `git push origin feature/funcionalidade-incrivel`
7. **Abra um Pull Request** com descrição detalhada das mudanças

### Diretrizes de Contribuição:
- Mantenha o código limpo e bem comentado
- Siga as convenções de nomenclatura CSS e estrutura existentes
- Teste a responsividade em diferentes dispositivos e navegadores
- Garanta que os padrões de acessibilidade sejam mantidos
- Inclua tags alt apropriadas e HTML semântico

## 🔑 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

A Licença MIT permite uso gratuito, modificação e distribuição deste software, tornando-o perfeito para propósitos educacionais e contribuições open-source.

## ✍️ Autora

Criado com ❤️ por **Emelly Beatriz**

📬 Entre em contato:
📧 emellybmuniz@gmail.com |
💼 [Linkedin](https://www.linkedin.com/in/emellybmuniz) |
🐙 [Github](https://github.com/emellybmuniz)

---

⭐ **Gostou do projeto?** Deixe uma estrela no repositório para apoiar o desenvolvimento!

**#SocialMediaHub #DesignResponsivo #MobileFirst #DesenvolvimentoWeb #CSS3 #HTML5**